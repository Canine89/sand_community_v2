import Layout from "../components/layout";

function About() {
  return (
    <>
      <div className="w-full text-center pt-40 bg-amber-100">
        <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-gray-500">
          모래알 커뮤니티에 오신 것을 환영합니다!
        </div>
      </div>

      <div className="w-full text-center px-20 pt-4 pb-40 bg-amber-100">
        <div className="text-gray-500">
          이지스퍼블리싱 박현규가 만들어가는 편집자 비공식 유틸리티
          사이트입니다. 물론 판매처에서 API 제공하기 시작하면
          무용지물😥이지만...
          <br /> 도서 정보 API, 출판사 API 개발이 완료되어 있습니다.
        </div>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
