"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col md:overflow-hidden">
      <header className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mt-[5vh] md:mt-[7vh]  w-full px-[5vw] md:px-[6.67vw] mx-auto z-10">
        <div className="md:col-start-2 w-full max-w-[80vw] md:max-w-[27.7vw] aspect-532/173 relative mx-auto">
          <Image
            src={"/logo.png"}
            alt="Evolution logo"
            sizes="(max-width: 768px) 80vw, 27.7vw"
            fill
            className="object-contain"
          />
        </div>

        <div className="hidden md:flex flex-col justify-center md:col-start-3 items-center md:items-end text-center md:text-right gap-[0.5vh]">
          <p className="text-sm md:text-[1.04vw] leading-[1.3] tracking-normal">
            с 10 до 22, каждый день
          </p>
          <Link
            href={"tel:89309900081"}
            className="font-normal text-lg md:text-[1.56vw] leading-[1.3] tracking-normal pb-3 md:pb-[1.5vh] hover:opacity-80 transition-opacity"
          >
            +7 930 990 0081
          </Link>
          <p className="text-sm md:text-[1.04vw] leading-[1.3] tracking-normal">
            Благовещенский пер., 1А, подъезд 4
          </p>
        </div>
      </header>

      <div className="bg-[#A0866A]/25 flex-1">
        <div className="bg-[url('/jungle.png')] bg-cover bg-center min-h-[40vh] md:min-h-[45vh] w-full pt-0 md:pt-[17vh] pb-12 md:pb-0 flex items-start">
          <p className="font-normal text-lg md:text-[1.56vw] leading-[1.3] tracking-normal text-center text-white mx-auto px-[5vw] md:px-[3vw] max-w-[90vw] md:max-w-[72.9vw] pt-[80px] md:pt-0">
            Пространство восстановления ЭВОЛЮЦИЯ — это бережные уходы за кожей
            лица, инновационные аппаратные технологии на службе здоровья,
            авторские массажи лица и тела, профилактическая подология и глубокое
            расслабление с эффектом невесомости в сухом флоатинге NUVOLA LEGERA,
            которые помогают вам комфортно Эволюционировать к новым ресурсам.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:hidden bg-[#A0866A]/25 py-7 text-center gap-2">
        <p className="font-normal text-base leading-[1.3] tracking-normal text-center">
          с 10 до 22, каждый день
        </p>
        <Link
          href={"tel:89309900081"}
          className="font-normal text-2xl leading-[1.3] tracking-normal text-center"
        >
          +7 930 990 0081
        </Link>
      </div>

      <p className="block md:hidden bg-[#A0866A]/25 font-extrabold text-xl leading-[1.3] tracking-normal text-center text-[#A1876A] pb-5">
        Сайт на паузе, но не надолго!
      </p>

      <div className="flex flex-col md:flex-row flex-1 justify-between md:items-end bg-[#A0866A]/25 px-[5vw] md:px-[4vw] pb-8 md:pb-[4vh] gap-8 md:gap-[2vw]">
        <div className="flex flex-col justify-end gap-4 md:gap-[2vh] w-full md:w-auto md:flex-1 md:max-w-[30vw]">
          <div className="w-full text-center">
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm inline-block font-light w-full text-xl md:text-[2.29vw] leading-[112%] md:leading-[1.18] tracking-normal uppercase text-[#A0866A] bg-white py-4 md:py-[2vh] px-8 md:px-[3vw] hover:text-white hover:bg-[#A0866A] transition-all duration-300"
            >
              меню услуг
            </a>
          </div>
          <div className="flex justify-center md:justify-between gap-4">
            <div className="flex gap-3 md:gap-[1.5vw]">
              <Link
                href={"https://t.me/prostranstvo_evolution"}
                target="_blank"
                className="w-10 h-10 md:w-[2.7vw] md:h-[2.7vw] relative hover:opacity-80 transition-opacity"
              >
                <Image
                  src={"/tg.svg"}
                  alt="Telegram logo"
                  fill
                  sizes="2.7vw"
                  className="object-contain"
                />
              </Link>
              <Link
                href={
                  "https://max.ru/join/vHYs8sxgXpIyTO1Ev-kev_roCGGO_GzWUvgzKHeBfng"
                }
                target="_blank"
                className="w-10 h-10 md:w-[2.7vw] md:h-[2.7vw] relative hover:opacity-80 transition-opacity"
              >
                <Image
                  src={"/max.svg"}
                  alt="Max logo"
                  fill
                  sizes="2.7vw"
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="flex gap-3 md:gap-[1.5vw]">
              <Link
                href={
                  "https://yandex.ru/maps/213/moscow/house/blagoveshchenskiy_pereulok_1a/Z04Ycw5mT0cDQFtvfXt3d3RjYQ==/?ll=37.598511%2C55.765702&z=17.1"
                }
                target="_blank"
                className="w-9 h-10 md:w-[2.2vw] md:h-[2.7vw] relative hover:opacity-80 transition-opacity"
              >
                <Image
                  src={"/yandex.svg"}
                  alt="Yandex maps logo"
                  fill
                  sizes="2.2vw"
                  className="object-contain"
                />
              </Link>
              <Link
                href={
                  "https://2gis.ru/moscow/search/%D0%91%D0%9B%D0%90%D0%93%D0%9E%D0%92%D0%95%D0%A9%D0%95%D0%9D%D0%A1%D0%9A%D0%98%D0%99%20%D0%9F%D0%95%D0%A0%D0%95%D0%A3%D0%9B%D0%9E%D0%9A%2C%201%D0%90%2C%20%D0%9F%D0%9E%D0%94%D0%AA%D0%95%D0%97%D0%94%204%20%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0/firm/70000001082376713/37.596719%2C55.766806?m=37.590342%2C55.767188%2F13.94"
                }
                target="_blank"
                className="w-10 h-10 md:w-[2.7vw] md:h-[2.7vw] relative hover:opacity-80 transition-opacity"
              >
                <Image
                  src={"/2gis.svg"}
                  alt="2GIS logo"
                  fill
                  sizes="2.7vw"
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-4 md:gap-[2vh] justify-end text-center md:flex-1 md:max-w-[35vw]">
          <p className="font-extrabold text-2xl md:text-[1.67vw] leading-[1.3] tracking-normal text-[#A1876A]">
            Сайт на паузе, но не надолго!
          </p>
          <p className="font-normal text-base md:text-[1.04vw] leading-[1.3] tracking-normal">
            Мы работаем над улучшением нашего сайта,{" "}
            <br className="hidden md:flex" />и совсем скоро вы сможете увидеть
            все новшества!
          </p>
        </div>

        <div className="hidden md:flex flex-col gap-4 md:gap-[2vh] justify-end relative w-full max-w-[300px] md:max-w-[22vw] aspect-[423/222] mx-auto md:mx-0 md:flex-1">
          <Image
            src={"/monkey.svg"}
            alt="Monkey illustration"
            fill
            sizes="(max-width: 768px) 300px, 22vw"
            className="object-contain"
          />
        </div>

        <div className="flex md:hidden justify-center">
          <p className="font-normal text-base leading-[1.3] tracking-normal text-center">
            Благовещенский пер., 1А, подъезд 4
          </p>
        </div>
      </div>
    </div>
  );
}
