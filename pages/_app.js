import "../styles/globals.css";
import { wrapper } from "../store";
import Login from "./auth/login";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoginAction, setLogoutAction } from "../reducers/auth.js";
import { authService } from "./auth/fBase";
import { signOut } from "firebase/auth";
import Router from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const loginDispatch = useDispatch();
  const logoutDispatch = useDispatch();

  // member 관리
  const easyspub_member = /\w+@easyspub.co.kr/gi;
  const out_members = [
    "xcode.ko@gmail.com",
    "pyk707@hanbit.co.kr",
    "minhyeok@hanbit.co.kr",
  ];

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        if (
          user.email.match(easyspub_member) ||
          out_members.indexOf(user.email) >= 0
        ) {
          loginDispatch(
            setLoginAction({
              payload: {
                email: user.email,
                displayName: user.displayName,
                uid: user.uid,
              },
            })
          );
        } else {
          logoutDispatch(setLogoutAction());
          signOut(authService);
          Router.push("/");
        }
      } else {
        logoutDispatch(setLogoutAction());
        signOut(authService);
        Router.push("/");
      }
    });
  }, []);

  if (isLoggedIn === false) return <Login />;
  return getLayout(<Component {...pageProps} />);
};

export default wrapper.withRedux(MyApp);
