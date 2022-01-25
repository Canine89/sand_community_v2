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
  // const out_member = "xcode.ko@gmail.com";

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        if (user.email.match(easyspub_member)) {
          loginDispatch(
            setLoginAction({
              payload: {
                email: user.email,
                displayName: user.displayName,
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
