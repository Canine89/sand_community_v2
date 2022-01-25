import Layout from "../components/layout";
import Image from "next/image";
import yeahBaby from "../public/yes-baby.gif";
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
            <Image
              className="grayscale rounded-md"
              src={yeahBaby}
              height={200}
            />
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
