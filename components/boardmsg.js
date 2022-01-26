import { doc, deleteDoc } from "firebase/firestore";
import { dbService } from "../pages/auth/fbase";

const BoardMsg = ({ userinfo, msg }) => {
  const deleteMsg = (id) => {
    return deleteDoc(doc(dbService, "msgs", id));
  };

  const deleteHandler = async () => {
    const ok = window.confirm("글을 삭제하시겠어요?");
    if (ok) await deleteMsg(msg.id);
  };

  return (
    <div
      key={msg.id}
      className="rounded-lg bg-amber-100 py-2 h-18 text-center drop-shadow-lg"
    >
      {msg.msg}
      <div className="pt-8 pr-2 text-right">
        <span className="col-start-3 col-end-4 rounded-lg bg-amber-200 px-1 text-center drop-shadow-lg">
          {new Date(msg.createdAt).toString().slice(0, 21)}
        </span>
        {userinfo.uid === msg.writer ? (
          <span
            className="col-start-4 col-end-4 w-12 rounded-lg bg-amber-200 px-1 text-center drop-shadow-lg ml-2 hover:bg-amber-400 hover:shadow"
            onClick={deleteHandler}
          >
            삭제
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default BoardMsg;
