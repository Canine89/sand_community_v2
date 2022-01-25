import Layout from "../components/layout";
import Image from "next/image";
import rabbit from "../public/rabbit.png";
import Auth from "./auth/login";

// with dispatch
import { useSelector } from "react-redux";

export default function Page() {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="text-center pt-20 bg-amber-100">
            <Image className=" rounded-md" src={rabbit} />
          </div>
          <div className="w-full text-center pt-4 pb-20 bg-amber-100">
            <div className="text-5xl font-extrabold text-amber-600">
              드디어 OPEN!
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="text-center pt-20 bg-amber-100"></div>
          <div className="w-full text-center pt-4 pb-20 bg-amber-100">
            <div className="text-5xl font-extrabold text-amber-600">
              안 로그인...
            </div>
            <Auth />
          </div>
        </>
      )}
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
