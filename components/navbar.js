import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center py-4 gap-4 pl-4 bg-amber-300	">
      <Link href="/">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          🏠 모래성
        </button>
      </Link>
      <Link href="/about">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          <b> What is Sand? v2.0</b>
        </button>
      </Link>
      <Link href="/stat/bookstat">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          📙 책
        </button>
      </Link>
      <Link href="/stat/infolabstat">
        <button className="rounded-lg bg-amber-300 h-fit py-1 px-4 hover:bg-amber-200 hover:shadow">
          📈 출판사
        </button>
      </Link>
    </div>
  );
}