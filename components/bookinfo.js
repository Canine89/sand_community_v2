export default function BookInfo({ isbnData }) {
  const info = isbnData[isbnData.length - 1];

  return (
    <div className="pl-4">
      <span className="font-bold">
        {info.book.title} 책 정보({info.crawl_date.slice(0, 10)}일 기준)
      </span>
      <div class="grid grid-cols-2 gap-4 pt-2 text-sm">
        <div>순위</div>
        <div>{info.rank}</div>
        <div>판매지수</div>
        <div>{info.sales_point}</div>
        <div>ISBN</div>
        <div>{info.book.isbn}</div>
        <div>쪽수</div>
        <div>{info.book.page}</div>
        <div>출판사</div>
        <div>{info.book.publisher}</div>
        <div>정가</div>
        <div>{info.book.right_price}원</div>
        <div>10% 할인가</div>
        <div>{info.book.sales_price}원</div>
      </div>
    </div>
  );
}
