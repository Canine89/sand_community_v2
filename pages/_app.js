import "../styles/globals.css";
import { wrapper } from "../store";
import { useSelector } from "react-redux";
import Login from "./auth/login";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  if (isLoggedIn === false) return <Login />;
  return getLayout(<Component {...pageProps} />);
};

export default wrapper.withRedux(MyApp);
