import EduBookTable from "../../components/edubooktable";
import EduCategory from "../../components/educategory";
import BookList from "../../components/datelist";
import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import Loading from "../../components/loading";
import Search from "../../components/search";
import BookGraph from "../../components/BookGraph";
import BookInfo from "../../components/bookinfo";
import DownloadToolBar from "../../components/downloadtoolbar";
import { useSelector } from "react-redux";
import Router from "next/router";

function EduBookStat() {
  const [date, setDate] = useState([]);
  const [datas, setDatas] = useState([]);
  const [renderingDatas, setRenderingDatas] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [category, setCategory] = useState("초등참고서");
  const [isbnData, setIsbnData] = useState([]);
  const [dateList, setDateList] = useState([]);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  const _apiurlbase = "http://175.211.105.9:8000";

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push("/");
    }
    fetch(_apiurlbase + "/edu_book/datelist/")
      .then((res) => res.json())
      .then((json) => {
        setDateList(json);
        setDate(json[0]);
      });
  }, []);

  useEffect(() => {
    if (date.length > 0) {
      const _year = parseInt(date.slice(0, 4));
      const _month = parseInt(date.slice(5, 7));
      const _day = parseInt(date.slice(7, 9));
      const _category = category;

      fetch(
        _apiurlbase +
          "/edu_book/date?" +
          "year=" +
          _year +
          "&month=" +
          _month +
          "&day=" +
          _day +
          "&category=" +
          _category
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const datas = json.map((data) => {
            return {
              category: data.book.category,
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
  }, [date, category]);

  function dateChangeHandler(e) {
    setDate(e.target.value);
  }

  useEffect(() => {
    setRenderingDatas(
      datas.filter((data) => {
        return (
          data.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          data.category.toLowerCase().includes(searchKeyword.toLowerCase())
        );
      })
    );
  }, [searchKeyword]);

  function searchHandler(e) {
    setSearchKeyword(e.target.value);
  }

  function clickTitleHandler(e) {
    fetch(
      "http://175.211.105.9:8000/edu_book/isbn/?id=" +
        e.target.id +
        "&category=" +
        category
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setIsbnData(json);
      });
  }

  function categoryHandler(e) {
    setCategory(e.target.value);
  }

  return (
    <>
      {dateList.length > 0 ? (
        <BookList dates={dateList} dateChangeHandler={dateChangeHandler} />
      ) : (
        <></>
      )}

      <EduCategory categoryHandler={categoryHandler} />

      <Search
        searchKeyword={searchKeyword}
        searchHandler={searchHandler}
        datas={renderingDatas}
      />
      {datas.length > 0 ? (
        <>
          <DownloadToolBar
            datas={renderingDatas}
            searchKeyword={searchKeyword}
          />
          <EduBookTable
            datas={renderingDatas}
            clickTitleHandler={clickTitleHandler}
          />
        </>
      ) : (
        <Loading msgs="로딩하는 중이에요" />
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

EduBookStat.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default EduBookStat;
