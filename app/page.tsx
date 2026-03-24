"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col md:overflow-hidden">
      <header className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mt-11 md:mt-16 lg:mt-20 max-w-[1920px] w-full px-14 md:px-[128px] mx-auto z-10">
        <div className="md:col-start-2 w-full max-w-[532px] aspect-532/173 relative mx-auto">
          <Image
            src={"/logo.png"}
            alt="Evolution logo"
            sizes="(max-width: 768px) 80vw, 532px"
            fill
            className="object-contain"
          />
        </div>

        <div className="hidden md:flex flex-col justify-center md:col-start-3 items-center md:items-end text-center md:text-right gap-2">
          <p className="text-sm md:text-base leading-[1.3] tracking-normal">
            с 10 до 22, каждый день
          </p>
          <Link
            href={"tel:89309900081"}
            className="font-normal text-lg md:text-2xl leading-[1.3] tracking-normal pb-3 md:pb-5 hover:opacity-80 transition-opacity"
          >
            +7 930 990 0081
          </Link>
          <p className="text-sm md:text-base leading-[1.3] tracking-normal">
            Благовещенский пер., 1А, подъезд 4
          </p>
        </div>
      </header>

      <div className="bg-[#A0866A]/25 flex-1">
        <div className="bg-[url('/jungle.png')] bg-cover bg-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px] w-full pt-0 md:pt-48 pb-12 md:pb-0 lg:pt-56 flex items-start">
          <p className="font-normal text-lg md:text-2xl lg:text-[30px] leading-[1.3] tracking-normal text-center text-white mx-auto px-14 md:px-8 max-w-[1400px] pt-[80px] md:pt-0">
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

      <div className="flex flex-col lg:flex-row flex-1 justify-between md:items-end bg-[#A0866A]/25 px-14 md:px-8 lg:px-16 xl:px-32 pb-8 md:pb-12 lg:pb-12 gap-8 lg:gap-12">
        <div className="flex flex-col justify-end gap-4 md:gap-5 w-full lg:w-auto lg:flex-1 lg:max-w-md">
          <div className="w-full text-center">
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm inline-block font-light w-full text-xl md:text-3xl lg:text-[44px] leading-[112%] md:leading-[1.18] tracking-normal uppercase text-[#A0866A] bg-white py-4 md:py-5 px-8 md:px-12 lg:px-16 hover:text-white hover:bg-[#A0866A] transition-all duration-300"
            >
              меню услуг
            </a>
          </div>
          <div className="flex justify-center md:justify-between gap-4">
            <div className="flex gap-3 md:gap-5">
              <Link
                href={"https://t.me/prostranstvo_evolution"}
                target="_blank"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] relative hover:opacity-80 transition-opacity"
              >
                <Image
                  src={"/tg.svg"}
                  alt="Telegram logo"
                  fill
                  sizes="52px"
                  className="object-contain"
                />
              </Link>
              <Link
                href={
                  "https://max.ru/join/vHYs8sxgXpIyTO1Ev-kev_roCGGO_GzWUvgzKHeBfng"
                }
                target="_blank"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] relative hover:opacity-80 transition-opacity"
              >
                <Image
                  src={"/max.svg"}
                  alt="Max logo"
                  fill
                  sizes="52px"
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="flex gap-3 md:gap-5">
              <Link
                href={
                  "https://yandex.ru/maps/213/moscow/house/blagoveshchenskiy_pereulok_1a/Z04Ycw5mT0cDQFtvfXt3d3RjYQ==/?ll=37.598511%2C55.765702&z=17.1"
                }
                target="_blank"
                className="w-9 h-10 md:w-10 md:h-12 lg:w-[42px] lg:h-[52px] relative hover:opacity-80 transition-opacity"
              >
                <Image
                  src={"/yandex.svg"}
                  alt="Yandex maps logo"
                  fill
                  sizes="42px"
                  className="object-contain"
                />
              </Link>
              <Link
                href={
                  "https://2gis.ru/moscow/search/%D0%91%D0%9B%D0%90%D0%93%D0%9E%D0%92%D0%95%D0%A9%D0%95%D0%9D%D0%A1%D0%9A%D0%98%D0%99%20%D0%9F%D0%95%D0%A0%D0%95%D0%A3%D0%9B%D0%9E%D0%9A%2C%201%D0%90%2C%20%D0%9F%D0%9E%D0%94%D0%AA%D0%95%D0%97%D0%94%204%20%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0/firm/70000001082376713/37.596719%2C55.766806?m=37.590342%2C55.767188%2F13.94"
                }
                target="_blank"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] relative hover:opacity-80 transition-opacity"
              >
                <Image
                  src={"/2gis.svg"}
                  alt="2GIS logo"
                  fill
                  sizes="52px"
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-4 md:gap-5 justify-end text-center lg:flex-1 lg:max-w-lg">
          <p className="font-extrabold text-2xl md:text-3xl lg:text-[32px] leading-[1.3] tracking-normal text-[#A1876A]">
            Сайт на паузе, но не надолго!
          </p>
          <p className="font-normal text-base md:text-lg lg:text-[20px] leading-[1.3] tracking-normal">
            Мы работаем над улучшением нашего сайта, и совсем скоро вы сможете
            увидеть все новшества!
          </p>
        </div>

        <div className="hidden md:flex flex-col gap-4 md:gap-5 justify-end relative w-full max-w-[300px] md:max-w-[350px] lg:max-w-[423px] aspect-[423/222] mx-auto lg:mx-0 lg:flex-1">
          <Image
            src={"/monkey.svg"}
            alt="Monkey illustration"
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 423px"
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
