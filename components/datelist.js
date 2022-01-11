export default function DateList({ dates, dateChangeHandler }) {
  return (
    <select
      onChange={dateChangeHandler}
      className="appearance-none block w-full p-2 bg-gray-50 border-t border-l border-r text-sm font-bold text-gray-700 bg-clip-padding m-0"
    >
      {dates.map((date, index) => {
        return (
          <option value={date} key={"_" + date + index}>
            {date.slice(0, 4) +
              "년 " +
              date.slice(5, 7) +
              "월 " +
              date.slice(7, 9) +
              "일"}
          </option>
        );
      })}
    </select>
  );
}
