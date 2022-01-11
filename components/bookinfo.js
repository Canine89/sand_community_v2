export default function BookInfo({ isbnData }) {
  const info = isbnData[isbnData.length - 1];

  return (
    <div className="pl-4">
      <span className="font-bold text-sm">
        {info.book.title} 책 정보({info.crawl_date.slice(0, 10)}일 기준)
      </span>
      <table className="text-sm table-auto">
        <tbody>
          <tr>
            <td className="p-1 text-gray-500">순위</td>
            <td className="p-1 text-gray-500">{info.rank}</td>
          </tr>
          <tr>
            <td className="p-1 text-gray-500">판매지수</td>
            <td className="p-1 text-gray-500">{info.sales_point}</td>
          </tr>
          <tr>
            <td className="p-1 text-gray-500">ISBN</td>
            <td className="p-1 text-gray-500">{info.book.isbn}</td>
          </tr>
          <tr>
            <td className="p-1 text-gray-500">쪽수</td>
            <td className="p-1 text-gray-500">{info.book.page}</td>
          </tr>
          <tr>
            <td className="p-1 text-gray-500">출판사</td>
            <td className="p-1 text-gray-500">{info.book.publisher}</td>
          </tr>
          <tr>
            <td className="p-1 text-gray-500">정가</td>
            <td className="p-1 text-gray-500">{info.book.right_price}</td>
          </tr>
          <tr>
            <td className="p-1 text-gray-500">10% 할인가</td>
            <td className="p-1 text-gray-500">{info.book.sales_price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
