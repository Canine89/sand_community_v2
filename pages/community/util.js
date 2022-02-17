import Layout from "../../components/layout";
import { useState, useEffect } from "react";

const Util = () => {
  const [pdfFile, setPdfFile] = useState(null);

  function clickTransPdfHandler(e) {
    if (pdfFile !== null) {
      const formData = new FormData();
      const target_name = "변환_" + pdfFile.name;
      formData.append("file", pdfFile);
      console.log(pdfFile);
      fetch("http://175.211.105.9:8000/utils/transpdf/", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.blob();
        })
        .then((data) => {
          let a = document.createElement("a");
          a.href = window.URL.createObjectURL(data);
          a.download = target_name;
          a.click();
        });
    } else {
      console.log("pdf file null");
    }
  }

  function onPdfFileChangeHandler(e) {
    if (e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  }

  return (
    <>
      <input type="file" onChange={onPdfFileChangeHandler} />
      <button onClick={clickTransPdfHandler}>변경!</button>
    </>
  );
};

Util.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Util;
