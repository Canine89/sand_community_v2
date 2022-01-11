export default function Loading({ msgs }) {
  return (
    <>
      <div className="bg-amber-100 flex space-x-2 py-40 justify-center items-center">
        <div className="p-1 mr-2 w-4 h-4 rounded-full animate-bounce">🔎</div>
        {Array.from(msgs).map((msg, index) => {
          return (
            <div
              className="p-1 w-4 h-4 rounded-full animate-bounce"
              key="{index}"
            >
              {msg}
            </div>
          );
        })}
      </div>
    </>
  );
}
