export default function Search({ searchKeyword, searchHandler }) {
  return (
    <>
      <input
        className="w-full p-2 border text-sm font-normal text-gray-700"
        name="searchKeyword"
        value={searchKeyword}
        onChange={searchHandler}
        placeholder="검색어를 입력하세요"
      />
    </>
  );
}
