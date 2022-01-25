import DataTable from "react-data-table-component";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faClone } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function BookTable({ datas, clickTitleHandler }) {
  const columns = [
    {
      name: "순위",
      selector: "rank",
      sortable: "true",
      maxWidth: "10px",
    },
    {
      name: "판매지수",
      selector: "sales_point",
      sortable: "false",
      maxWidth: "10px",
    },
    {
      name: "제목",
      sortable: "true",
      maxWidth: "400px",
      cell: (row) => {
        return (
          <div>
            <span
              data-tip
              data-for="title"
              onClick={clickTitleHandler}
              id={row.isbn}
              value={row.title}
            >
              {row.title}
            </span>
            <ReactTooltip id="title">
              <span>제목을 누르면 그래프가 나타납니다.</span>
            </ReactTooltip>
            <a
              target="_blank"
              href={row.url}
              data-tip
              data-for="url"
              className="pl-2"
            >
              <FontAwesomeIcon icon={faLocationArrow} href={row.url} />
            </a>
            <ReactTooltip id="url">
              <span>yes24 사이트로 이동합니다.</span>
            </ReactTooltip>
            <CopyToClipboard
              text={row.isbn}
              data-tip
              data-for="isbn"
              className="pl-2"
            >
              <button>
                <FontAwesomeIcon icon={faClone} />
              </button>
            </CopyToClipboard>
            <ReactTooltip id="isbn">
              <span>isbn을 복사합니다.</span>
            </ReactTooltip>
          </div>
        );
      },
    },
    {
      name: "출판사",
      selector: "publisher",
      sortable: "true",
      maxWidth: "150px",
      hide: "md",
    },
    {
      name: "쪽",
      selector: "page",
      sortable: "false",
      maxWidth: "10px",
      hide: "md",
    },
    {
      name: "가격",
      selector: "right_price",
      sortable: "true",
      maxWidth: "10px",
    },
    {
      name: "태그",
      selector: "tags",
      sortable: "true",
      maxWidth: "500px",
      hide: "md",
    },
  ];

  return (
    <DataTable
      data={datas}
      noHeader
      columns={columns}
      pagination
      fixedHeader
      responsive
      dense
    />
  );
}
