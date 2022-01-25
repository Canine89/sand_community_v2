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
        <div className="grid grid-cols-2 gap-2 py-2">
          {msgs.map((msg) => (
            <div
              key={msg.id}
              className="rounded-lg bg-amber-100 py-2 h-24 text-center drop-shadow-lg"
            >
              {msg.msg}
            </div>
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
