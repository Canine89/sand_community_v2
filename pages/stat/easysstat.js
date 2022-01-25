import EasysTable from "../../components/easystable";
import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import Search from "../../components/search";
import DownloadToolBar from "../../components/downloadtoolbar";

function EasysStat() {
  const [datas, setDatas] = useState([]);
  const [renderingDatas, setRenderingDatas] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const _apiurlbase = "http://175.211.105.9:8000";

  useEffect(() => {
    fetch(_apiurlbase + "/book/publisher/easyspub/")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const datas = json.map((data) => {
          const _author = data.author
            .replace(/\'/gi, "")
            .replace(/\[/gi, "")
            .replace(/\]/gi, "");

          return {
            title: data.title,
            author: _author,
            isbn: data.isbn,
            page: data.page,
            publisher: data.publisher,
            publish_date: data.publish_date.slice(0, 10),
            right_price: data.right_price,
            sales_price: data.sales_price,
            tags: data.tags.reduce((acc, curr) => {
              return acc + ", " + curr;
            }),
            url: data.url,
          };
        });
        setDatas(datas);
        setRenderingDatas(datas);
      });
  }, []);

  useEffect(() => {
    setRenderingDatas(
      datas.filter((data) => {
        return (
          data.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          data.publisher.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          data.tags.toLowerCase().includes(searchKeyword.toLowerCase())
        );
      })
    );
  }, [searchKeyword]);

  function searchHandler(e) {
    setSearchKeyword(e.target.value);
  }

  return (
    <>
      <Search
        searchKeyword={searchKeyword}
        searchHandler={searchHandler}
        datas={renderingDatas}
      />

      <DownloadToolBar datas={renderingDatas} searchKeyword={searchKeyword} />
      <EasysTable datas={renderingDatas} />
    </>
  );
}

EasysStat.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default EasysStat;
