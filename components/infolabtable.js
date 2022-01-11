import DataTable from "react-data-table-component";

export default function InfoLabTable({
  pubrenderingdatas,
  tagsrenderingdatas,
}) {
  const pub_columns = [
    {
      name: "출판사",
      selector: "publisher",
      sortable: "true",
    },
    {
      name: "판매지수 합",
      selector: "sales_point_sum",
      sortable: "false",
    },
    {
      name: "판매지수 평균",
      selector: "sales_point_avg",
      sortable: "true",
      hide: "md",
    },
    {
      name: "순위 평균",
      selector: "rank_avg",
      sortable: "true",
      hide: "md",
    },
    {
      name: "집계 기준(종수)",
      selector: "number_of_book",
      sortable: "true",
      hide: "md",
    },
  ];

  const tag_columns = [
    {
      name: "#번호",
      selector: "tagNum",
      sortable: "true",
    },
    {
      name: "태그 이름",
      selector: "tagName",
      sortable: "true",
    },
    {
      name: "개수",
      selector: "tagCount",
      sortable: "true",
      hide: "md",
    },
  ];

  return (
    <>
      <DataTable
        data={pubrenderingdatas}
        noHeader
        columns={pub_columns}
        pagination
        fixedHeader
        responsive
        dense
      />
      <DataTable
        data={tagsrenderingdatas}
        noHeader
        columns={tag_columns}
        pagination
        fixedHeader
        responsive
        dense
      />
    </>
  );
}
