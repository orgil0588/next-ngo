import Image from "next/image";
import Hero from "./images/hero-righthero.jpg";
const Home = () => {
  return (
    <>
      <section className="my-10">
        <div className="flex justify-between md:grid md:grid-cols-2">
          <div className="text-center md:text-left md:mt-6">
            <h1 className="text-2xl text-gray-700 font-bold leading-tight sm:text-3xl md:text-4xl md:w-10/12">
              Иргэдийн{" "}
              <span className="text-blue-500">санхүүгийн хүртээмжийг</span>{" "}
              нэмэгдүүлэхийн төлөө{" "}
            </h1>
            <p className="mx-2 font-sm text-gray-400 mt-2 md:mx-0 md:mt-6 md:w-10/12  ">
              Бидний эрхэм зорилго хүн бүр эдийн засгийн боломжоор хангагдсан
              санхүүгийн хувьд хүртээмжтэй нийгмийг бий болгох явдал юм. Хүмүүст
              амьдралаа дээшлүүлэхэд нь шаардлагатай санхүүгийн чадамжийг
              бүрдүүлэхэд туслах нь бидний алсын хараа юм.{" "}
            </p>
            <div className="flex flex-col mx-20 md:flex-row md:mx-0 md:mt-6">
              <button className="mt-3 px-2 py-3 bg-blue-500 text-white font-medium shadow-xl md:mr-4">
                Санхүүгийн боловсрол
              </button>
              <button className="mt-3 px-2 py-3 font-medium md:ml-4 ">
                Холбоо барих
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image alt="Hero image" src={Hero} />
          </div>
        </div>
        <div className="mx-4 my-8 flex flex-col items-center">
          <div className="flex ">
            <div>image - 1</div>
            <div>image - 2</div>
          </div>
          <div>image - 3</div>
        </div>
      </section>
      <section className="my-10 w-full">
        <h1 className="text-xl font-bold text-gray-600 text-center md:text-2xl">
          Бид юу хийдэг вэ ?
        </h1>
        <p className="mx-2 text-center text-gray-400 mt-2 md:w-8/12 md:mx-auto">
          Бид орчин үеийн санхүүгийн систем хүртээмжгүй байгаа гэр бүл, жижиг
          бизнес эрхлэгчид, хамт олныг дэмжиж тэдний санхүүгийн чадамжийг
          дээшлүүлэх чиглэлээр дараах арга барилаар ажилладаг.
        </p>
        <div className="flex flex-col items-center md:flex-row md:mt-10 ">
          <div className="flex flex-col items-center">
            <div>Icon - 1</div>
            <h2 className="text-lg font-bold text-gray-600 my-2 md:text-xl">
              Subtitle - 1
            </h2>
            <p className="mx-2 text-center text-gray-400 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div>Icon - 1</div>
            <h2 className="text-lg font-bold text-gray-600 my-2 md:text-xl">
              Subtitle - 1
            </h2>
            <p className="mx-2 text-center text-gray-400 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row ">
          <div className="flex flex-col items-center">
            <div>Icon - 1</div>
            <h2 className="text-lg font-bold text-gray-600 my-2 md:text-xl">
              Subtitle - 1
            </h2>
            <p className="mx-2 text-center text-gray-400 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div>Icon - 1</div>
            <h2 className="text-lg font-bold text-gray-600 my-2 md:text-xl">
              Subtitle - 1
            </h2>
            <p className="mx-2 text-center text-gray-400 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
