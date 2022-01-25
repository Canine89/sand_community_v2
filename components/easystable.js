import DataTable from "react-data-table-component";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faClone } from "@fortawesome/free-solid-svg-icons";

export default function EasysTable({ datas }) {
  const columns = [
    {
      name: "제목",
      sortable: "true",
      maxWidth: "400px",
      cell: (row) => {
        return (
          <div>
            <span data-tip data-for="title" id={row.isbn} value={row.title}>
              {row.title}
            </span>
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
          </div>
        );
      },
    },
    {
      name: "저자",
      selector: "author",
      sortable: "true",
      maxWidth: "220px",
      hide: "md",
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
      name: "정가",
      selector: "right_price",
      sortable: "true",
      maxWidth: "10px",
    },
    {
      name: "할인가",
      selector: "sales_price",
      sortable: "true",
      maxWidth: "10px",
    },
    {
      name: "출간일",
      selector: "publish_date",
      sortable: "true",
      maxWidth: "150px",
      hide: "lg",
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
