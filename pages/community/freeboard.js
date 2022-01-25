import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import FreeBoardMenu from "../../components/freeboardmenu";
import Layout from "../../components/layout";
import { dbService } from "../auth/fbase";

const FreeBoard = () => {
  const [msgs, setMsgs] = useState();

  useEffect(() => {
    onSnapshot(collection(dbService, "msgs"), (snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      setMsgs(newArray);
      console.log(newArray);
    });
  }, []);
  return (
    <>
      <FreeBoardMenu />
      {msgs ? (
        <div>
          {msgs.map((msg) => (
            <li key={msg.id}>{msg.msg}</li>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

FreeBoard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default FreeBoard;
