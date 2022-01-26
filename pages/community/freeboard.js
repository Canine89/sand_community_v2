import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BoardMsg from "../../components/boardmsg";
import FreeBoardMenu from "../../components/freeboardmenu";
import Layout from "../../components/layout";
import { dbService } from "../auth/fbase";

const FreeBoard = () => {
  const [msgs, setMsgs] = useState();
  const userinfo = useSelector((state) => state.authReducer.payload);

  useEffect(() => {
    onSnapshot(collection(dbService, "msgs"), (snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      setMsgs(newArray);
    });
  }, []);

  return (
    <>
      <FreeBoardMenu />
      {msgs ? (
        <div className="grid grid-cols-2 gap-2 py-2">
          {msgs
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((msg) => (
              <BoardMsg userinfo={userinfo} msg={msg} />
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
