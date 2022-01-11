import Layout from "../components/layout";
import Image from "next/image";
import yeahBaby from "../public/yes-baby.gif";

export default function Page() {
  return (
    <>
      <div className="text-center pt-20 bg-amber-100">
        <Image
          className="grayscale rounded-md"
          src={yeahBaby}
          height={200}
        ></Image>
      </div>
      <div className="w-full text-center pt-4 pb-20 bg-amber-100">
        <div className="text-5xl font-extrabold text-amber-600">
          드디어 OPEN!
        </div>
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
