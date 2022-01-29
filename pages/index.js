import Navbar from "./Components/Navbar";
export default function Home() {
  return (
    <div className="w-full font-sans ">
      <Navbar />
      <div className="container mx-auto">
        <section className="my-10">
          <div className="flex justify-between">
            <div className="text-center">
              <h1 className="text-2xl text-gray-900 font-bold leading-tight my-4">
                Иргэдийн{" "}
                <span className="text-blue-500">санхүүгийн хүртээмжийг</span>{" "}
                нэмэгдүүлэхийн төлөө{" "}
              </h1>
              <p className="mx-2 font-sm text-gray-600 my-8 ">
                Бидний эрхэм зорилго хүн бүр эдийн засгийн боломжоор хангагдсан
                санхүүгийн хувьд хүртээмжтэй нийгмийг бий болгох явдал юм.
                Хүмүүст амьдралаа дээшлүүлэхэд нь шаардлагатай санхүүгийн
                чадамжийг бүрдүүлэхэд туслах нь бидний алсын хараа юм.{" "}
              </p>
              <div className="flex flex-col mx-24">
                <button className="mt-2 px-2 py-3 bg-blue-500 text-white shadow-2xl">
                  Санхүүгийн боловсрол
                </button>
                <button className="mt-2 px-2 py-3 ">Холбоо барих</button>
              </div>
            </div>
            <div className="hidden">Image</div>
          </div>
          <div className="mx-4 my-8 flex flex-col items-center">
            <div className="flex ">
              <div>image - 1</div>
              <div>image - 2</div>
            </div>
            <div>image - 3</div>
          </div>
        </section>
      </div>
    </div>
  );
}
