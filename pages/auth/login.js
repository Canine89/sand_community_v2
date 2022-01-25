import { useDispatch } from "react-redux";
import { authService } from "./fBase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setLoginAction } from "../../reducers/auth.js";

export default function Login() {
  const loginDispatch = useDispatch();
  const setUserDispatch = useDispatch();

  const onSocialClickHandler = async (e) => {
    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(authService, provider);

    // member 관리
    const easyspub_member = /\w+@easyspub.co.kr/gi;
    const out_member = "xcode.ko@gmail.com";

    if (data.user.accessToken && data.user.email.match(easyspub_member)) {
      loginDispatch(setLoginAction());
    } else if (data.user.accessToken && data.user.email === out_member) {
      loginDispatch(setLoginAction());
    }
  };

  return (
    <div className="grid gap-2 my-2 justify-center">
      <button
        onClick={onSocialClickHandler}
        name="google"
        className="rounded-lg bg-amber-300 w-80 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow"
      >
        구글 로그인(easyspub.co.kr 계정으로 로그인하세요)
      </button>
    </div>
  );
}
