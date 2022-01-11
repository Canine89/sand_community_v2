import InfoLabTable from "../../components/infolabtable";
import Layout from "../../components/layout";

function InfoLabStat({ pubrenderingdatas, tagsrenderingdatas }) {
  return (
    <InfoLabTable
      pubrenderingdatas={pubrenderingdatas}
      tagsrenderingdatas={tagsrenderingdatas}
    />
  );
}

export async function getStaticProps() {
  const _apiurlbase = "http://175.211.105.9:8000";

  const regexForAnd = /and/gi;
  const regexForTo = /to/gi;
  const regexForSpace = /ssppaaccee/gi;

  const pubres = await fetch(
    _apiurlbase +
      "/book/publisher/status" +
      "?year=" +
      new Date().getFullYear().toString() +
      "&month=" +
      (new Date().getMonth() + 1).toString() +
      "&day=" +
      new Date().getDate().toString()
  );

  let pubrenderingdatas = await pubres.json();
  pubrenderingdatas = pubrenderingdatas.map((data) => {
    return {
      publisher: data.book__publisher,
      sales_point_sum: data.sales_point_sum,
      sales_point_avg: Math.round(data.sales_point_avg),
      rank_avg: Math.round(data.rank_avg),
      number_of_book: data.number_of_book,
    };
  });

  const tagsres = await fetch(_apiurlbase + "/book/count/tags");
  let tagsrenderingdatas = await tagsres.json();
  tagsrenderingdatas = tagsrenderingdatas.map((data, index) => {
    return {
      tagNum: index + 1,
      tagName: data.tagName
        .replace(regexForAnd, "/")
        .replace(regexForTo, "-")
        .replace(regexForSpace, " "),
      tagCount: data.tagCount,
    };
  });

  return {
    props: {
      pubrenderingdatas,
      tagsrenderingdatas,
    },
  };
}

InfoLabStat.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default InfoLabStat;
