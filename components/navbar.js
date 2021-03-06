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
          π  λͺ¨λμ±
        </button>
      </Link>
      <Link href="/about">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          <b> What is Sand? v2.0</b>
        </button>
      </Link>
      <Link href="/stat/bookstat">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          π λμμ±
        </button>
      </Link>
      <Link href="/stat/edubookstat">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          π μλμ±
        </button>
      </Link>
      <Link href="/stat/infolabstat">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          π μΆνμ¬
        </button>
      </Link>
      <Link href="/stat/easysstat">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          π©βπ¬ μ΄μ§μ€νΌλΈλ¦¬μ± DB
        </button>
      </Link>
      <Link href="/community/freeboard">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          β νλλ§λκ²μν
        </button>
      </Link>
      <a href="/community/util">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          πͺ PDF μλ₯΄κΈ°
        </button>
      </a>
      <button
        className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow"
        onClick={logoutHandler}
      >
        πββοΈ ({displayName})λ‘κ·Έμμ
      </button>
    </div>
  );
}
