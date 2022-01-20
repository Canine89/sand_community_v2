import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedInAction } from "../reducers/auth";

export default function Auth() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const authDispatch = useDispatch();

  function inputHandler(e) {
    if (e.target.id === "id") {
      setId(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: id, password: password }),
    };
    fetch("http://localhost:8000/api/token/obtain/", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        authDispatch(setLoggedInAction());
      });
  }

  return (
    <form className="grid gap-2 my-2 justify-center" onSubmit={submitHandler}>
      <input
        type="text"
        id="id"
        value={id}
        onChange={inputHandler}
        className="rounded-lg w-80 py-1"
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={inputHandler}
        className="rounded-lg w-80 py-1"
      />
      <input
        type="submit"
        value="로그인"
        className="rounded-lg bg-amber-300 w-80 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow"
      />
    </form>
  );
}
