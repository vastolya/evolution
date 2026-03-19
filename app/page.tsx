import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen relative bg-[#F8F7F7] bg-[url(/bg.svg)] bg-cover bg-center flex flex-col justify-between">
      <div className="px-5 pt-8 pb-5 md:px-20 md:pt-20 md:pb-20 md:h-screen flex flex-col gap-5 md:gap-0 md:justify-between">
        <header className="flex flex-col gap-5 md:gap-0 md:grid grid-cols-[1fr_auto_1fr] md:items-center ">
          <div className="order-2 md:order-1 flex flex-col gap-2 md:gap-3 justify-self-start">
            <p className="font-normal text-base leading-[122%] md:leading-none tracking-normal">
              Москва, ул. Большая Садовая, 14, стр. 6
            </p>
            <Link
              href={"tel:89309900081"}
              className="font-bold text-xl md:text-2xl leading-[120%] md:leading-none  tracking-normal"
            >
              +7 (930) 990-00-81
            </Link>
          </div>

          <div className="order-1 md:order-2 justify-center flex">
            <div className="w-[151px] h-[48px] md:w-[390px] md:h-[127px] relative">
              <Image src={"/logo.png"} alt="logo" sizes="auto" fill />
            </div>
          </div>

          <div className="order-3 md:order-3 flex flex-col gap-2 md:gap-3 justify-self-end md:text-right">
            <p className="font-normal text-base leading-[122%] md:leading-none tracking-normal">
              Ежедневно
            </p>
            <p className="font-bold text-xl md:text-2xl leading-[120%] md:leading-none tracking-normal">
              с 10:00 - 22:00
            </p>
          </div>
        </header>

        <div className="md:hidden w-full flex flex-col gap-3 pb-7">
          <h1 className="font-bold text-xl md:text-2xl leading-[120%] md:leading-none tracking-normal">
            Пространство восстановления ЭВОЛЮЦИЯ
          </h1>
          <h2 className="font-normal text-base leading-[122%] md:leading-none tracking-normal">
            Это бережные уходы за кожей лица, инновационные аппаратные
            технологии на службе здоровья, авторские{" "}
            <br className="hidden md:flex" /> массажи лица и тела,
            профилактическая подология и глубокое расслабление с эффектом
            невесомости <br className="hidden md:flex" /> в сухом флоатинге
            NUVOLA LEGERA, которые помогают вам комфортно Эволюционировать к
            новым ресурсам
          </h2>
        </div>

        <div className="md:px-20 flex justify-between items-end">
          <div className="flex flex-col w-full md:w-fit">
            <div className="order-2 md:order-1 flex justify-between  md:pb-14">
              <div className="flex gap-5">
                <Link
                  href={
                    "https://max.ru/join/vHYs8sxgXpIyTO1Ev-kev_roCGGO_GzWUvgzKHeBfng"
                  }
                  target="_blank"
                  className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] relative"
                >
                  <Image src={"/tg.svg"} alt="logo" fill sizes="auto" />
                </Link>
                <Link
                  href={
                    "https://max.ru/join/vHYs8sxgXpIyTO1Ev-kev_roCGGO_GzWUvgzKHeBfng"
                  }
                  target="_blank"
                  className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] relative"
                >
                  <Image src={"/max.svg"} alt="logo" fill sizes="auto" />
                </Link>
              </div>
              <div className="flex gap-5">
                <Link
                  href={
                    "https://yandex.ru/maps/213/moscow/house/blagoveshchenskiy_pereulok_1a/Z04Ycw5mT0cDQFtvfXt3d3RjYQ==/?ll=37.598511%2C55.765702&z=17.1"
                  }
                  target="_blank"
                  className="w-[36px] h-[44px] md:w-[42px] md:h-[52px] relative"
                >
                  <Image src={"/yandex.svg"} alt="logo" fill sizes="auto" />
                </Link>
                <Link
                  href={
                    "https://2gis.ru/moscow/search/%D0%91%D0%9B%D0%90%D0%93%D0%9E%D0%92%D0%95%D0%A9%D0%95%D0%9D%D0%A1%D0%9A%D0%98%D0%99%20%D0%9F%D0%95%D0%A0%D0%95%D0%A3%D0%9B%D0%9E%D0%9A%2C%201%D0%90%2C%20%D0%9F%D0%9E%D0%94%D0%AA%D0%95%D0%97%D0%94%204%20%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0/firm/70000001082376713/37.596719%2C55.766806?m=37.590342%2C55.767188%2F13.94"
                  }
                  target="_blank"
                  className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] relative"
                >
                  <Image src={"/2gis.svg"} alt="logo" fill sizes="auto" />
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 w-full text-center pb-5 md:pb-0">
              <a
                href="/menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" inline-block font-light w-full text-lg md:text-[44px] leading-[112%] md:leading-[1.18] tracking-normal uppercase text-[#A0866A] bg-white py-5 px-16 hover:text-white hover:bg-[#A0866A] transition-all duration-300"
              >
                меню услуг
              </a>
            </div>
          </div>

          <div className="hidden md:flex relative w-[587px] h-[307px]">
            <Image src={"/monkey.svg"} alt="logo" fill sizes="autp" />
          </div>
        </div>
      </div>

      <div className="px-5 pt-5 pb-8 w-full  bg-[#A0866A] text-white flex flex-col gap-3 md:hidden">
        <p className="font-light text-[18px] leading-[1.12] tracking-[-0.01em] uppercase">
          Сайт на паузе, но не надолго!
        </p>
        <p className="font-normal text-[16px] leading-[1.22] tracking-normal">
          Мы работаем над улучшением нашего сайта, и совсем скоро вы сможете
          увидеть все новшества!
        </p>
      </div>

      <div className="hidden md:flex flex-col absolute top-1/3 w-full">
        <div className=" w-full text-center flex flex-col gap-3 pb-6">
          <h1 className="font-bold text-2xl leading-none tracking-normal">
            Пространство восстановления ЭВОЛЮЦИЯ
          </h1>
          <h2 className="font-normal text-base leading-none tracking-normal">
            Это бережные уходы за кожей лица, инновационные аппаратные
            технологии на службе здоровья, авторские <br /> массажи лица и тела,
            профилактическая подология и глубокое расслабление с эффектом
            невесомости <br /> в сухом флоатинге NUVOLA LEGERA, которые помогают
            вам комфортно Эволюционировать к новым ресурсам
          </h2>
        </div>

        <div className="w-full text-center bg-[#A0866A] py-14 text-white flex flex-col gap-3 ">
          <p className="font-light text-[44px] leading-[1.18] tracking-normal uppercase">
            Сайт на паузе, но не надолго!
          </p>
          <p className="font-normal text-base leading-none tracking-normal">
            Мы работаем над улучшением нашего сайта, и совсем скоро вы сможете
            увидеть все новшества!
          </p>
        </div>
      </div>
    </main>
  );
}
