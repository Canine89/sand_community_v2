import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { authService, dbService } from "../pages/auth/fbase";
import { GoogleAuthProvider } from "firebase/auth";

const FreeBoardMenu = () => {
  const [msg, setMsg] = useState();

  const changeHandler = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    setMsg(value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, "msgs"), {
      msg: msg,
      //   writer: data.user.displayName,
      createdAt: Date.now(),
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        value={msg}
        onChange={changeHandler}
        type="text"
        placeholder="한두마디 적어보세요!"
        maxLength={200}
      />
      <button className="text-sm bg-gray-300 h-fit py-1 px-4 hover:bg-gray-200 hover:shadow">
        한두마디 등록
      </button>
    </form>
  );
};

export default FreeBoardMenu;
