import BookTable from "../../components/booktable";
import BookList from "../../components/datelist";
import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import Loading from "../../components/loading";
import Search from "../../components/search";
import BookGraph from "../../components/BookGraph";
import BookInfo from "../../components/bookinfo";

function BookStat({ dates }) {
  const [date, setDate] = useState([]);
  const [datas, setDatas] = useState([]);
  const [renderingDatas, setRenderingDatas] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isbnData, setIsbnData] = useState([]);
  const _apiurlbase = "http://175.211.105.9:8000";

  useEffect(() => {
    if (date.length > 0) {
      const _year = parseInt(date.slice(0, 4));
      const _month = parseInt(date.slice(5, 7));
      const _day = parseInt(date.slice(7, 9));

      fetch(
        _apiurlbase +
          "/book/date?" +
          "year=" +
          _year +
          "&month=" +
          _month +
          "&day=" +
          _day
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const datas = json.map((data) => {
            return {
              title: data.book.title,
              author: data.book.author,
              isbn: data.book.isbn,
              page: data.book.page,
              publisher: data.book.publisher,
              publish_date: data.book.publish_date,
              right_price: data.book.right_price,
              tags: data.book.tags.reduce((acc, curr) => {
                return acc + ", " + curr;
              }),
              url: data.book.url,
              rank: data.rank,
              sales_point: data.sales_point,
            };
          });
          setDatas(datas);
          setRenderingDatas(datas);
        });
    }
  }, [date]);

  function dateChangeHandler(e) {
    setDate(e.target.value);
  }

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

  function clickTitleHandler(e) {
    fetch("http://175.211.105.9:8000/book/isbn/?id=" + e.target.id)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setIsbnData(json);
      });
  }

  return (
    <>
      <BookList dates={dates} dateChangeHandler={dateChangeHandler} />
      <Search searchKeyword={searchKeyword} searchHandler={searchHandler} />
      {datas.length > 0 ? (
        <BookTable
          datas={renderingDatas}
          clickTitleHandler={clickTitleHandler}
        />
      ) : (
        <Loading msgs="날짜를 선택하세요" />
      )}
      {isbnData.length > 0 ? (
        <div className="flex">
          <div className="w-2/3">
            <BookGraph isbnData={isbnData} />
          </div>
          <div className="w-1/3">
            <BookInfo isbnData={isbnData} />
          </div>
        </div>
      ) : (
        <Loading msgs="제목을 누르세요" />
      )}
    </>
  );
}

export async function getStaticProps() {
  const _apiurlbase = "http://175.211.105.9:8000";
  const resdate = await fetch(_apiurlbase + "/book/datelist");

  let dates = await resdate.json();

  return {
    props: {
      dates,
    },
  };
}

BookStat.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BookStat;
