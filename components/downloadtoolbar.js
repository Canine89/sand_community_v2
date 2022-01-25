import { CSVLink } from "react-csv";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DownloadToolBar({ datas, searchKeyword }) {
  return (
    <>
      {datas.length > 0 ? (
        <button className="text-sm bg-gray-300 h-fit py-1 px-4 hover:bg-gray-200 hover:shadow">
          <CSVLink
            data={datas}
            filename={"excel_data_" + searchKeyword + ".xls"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faFileExcel} className="mr-2" />
            엑셀 다운로드
          </CSVLink>
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
