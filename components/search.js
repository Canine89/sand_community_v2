import { CSVLink } from "react-csv";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search({ searchKeyword, searchHandler, datas }) {
  return (
    <>
      {datas.length > 0 ? (
        <button className="rounded-lg bg-gray-300 h-fit py-1 px-4 hover:bg-gray-200 hover:shadow">
          <CSVLink
            data={datas}
            filename={
              (new Date().getMonth() + 1).toString() +
              "월" +
              new Date().getDate().toString() +
              "일_" +
              "excel_data_" +
              searchKeyword +
              ".xls"
            }
            target="_blank"
          >
            <FontAwesomeIcon icon={faFileExcel} className="mr-2" />
            엑셀 다운로드
          </CSVLink>
        </button>
      ) : (
        <button className="rounded-lg bg-gray-300 h-fit py-1 px-4 disabled:opacity-50">
          <FontAwesomeIcon icon={faFileExcel} className="mr-2" />
          엑셀 다운로드
        </button>
      )}

      <input
        className=" p-2 border text-sm font-normal text-gray-700"
        name="searchKeyword"
        value={searchKeyword}
        onChange={searchHandler}
        placeholder="검색어를 입력하세요"
      />
    </>
  );
}
