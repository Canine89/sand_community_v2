import Link from "next/link";
import { signOut } from "firebase/auth";
import { authService } from "../pages/auth/fbase";
import { setLogoutAction } from "../reducers/auth.js";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const logoutDispatch = useDispatch();
  const displayName = useSelector(
    (state) => state.authReducer.payload.displayName
  );

  const logoutHandler = (e) => {
    logoutDispatch(setLogoutAction());
    signOut(authService);
    Router.push("/");
  };

  return (
    <div className="flex flex-row items-center py-4 gap-4 pl-4 bg-amber-300	">
      <Link href="/">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          🏠 모래성
        </button>
      </Link>
      <Link href="/about">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          <b> What is Sand? v2.0</b>
        </button>
      </Link>
      <Link href="/stat/bookstat">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          📙 책
        </button>
      </Link>
      <Link href="/stat/infolabstat">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          📈 출판사
        </button>
      </Link>
      <Link href="/stat/easysstat">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          👩‍🔬 이지스퍼블리싱 DB
        </button>
      </Link>
      <Link href="/community/freeboard">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          ✍ 한두마디게시판
        </button>
      </Link>
      <a href="https://minhyeokl.github.io/team3d/">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          ✍ 목차뽑기(feat. 민혁님)
        </button>
      </a>
      <button
        className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow"
        onClick={logoutHandler}
      >
        🏃‍♀️ ({displayName})로그아웃
      </button>
    </div>
  );
}
