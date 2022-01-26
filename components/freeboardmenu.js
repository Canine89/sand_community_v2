import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { dbService } from "../pages/auth/fbase";
import { useSelector } from "react-redux";

const FreeBoardMenu = () => {
  const [msg, setMsg] = useState();
  const userinfo = useSelector((state) => state.authReducer.payload);

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
      writer: userinfo.uid,
      createdAt: Date.now(),
    });
    setMsg("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={msg}
        onChange={changeHandler}
        type="text"
        placeholder="한두마디 적어보세요!"
        maxLength={200}
        className="text-sm p-1 w-1/2"
      />
      <button className="text-sm bg-yellow-300 h-fit py-1 px-4 hover:bg-yellow-200 hover:shadow">
        한두마디 등록
      </button>
    </form>
  );
};

export default FreeBoardMenu;
