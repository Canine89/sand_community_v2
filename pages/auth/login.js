import { authService } from "./fBase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import rabbit from "../../public/login_rabbit.png";

export default function Login() {
  const provider = new GoogleAuthProvider();

  const onSocialClickHandler = async (e) => {
    await signInWithPopup(authService, provider);
  };

  return (
    <div className="grid grid-cols-3 my-2">
      <div className="col-start-2 rounded-t-md bg-amber-100 text-center">
        <Image className="" src={rabbit} />
      </div>
      <div className="col-start-2">
        <button
          onClick={onSocialClickHandler}
          name="google"
          className="rounded-b-md bg-amber-300 w-full h-fit py-2 px-4 hover:bg-amber-200 hover:shadow"
        >
          구글 로그인
        </button>
      </div>
    </div>
  );
}
