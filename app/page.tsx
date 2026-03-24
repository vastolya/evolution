"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col  overflow-hidden">
      <header className="grid grid-cols-3 mt-[86px] max-w-480 mx-auto z-10">
        <div className="col-start-2 w-[532px] h-[173px] relative">
          <Image src={"/logo.png"} alt="" sizes="auto" fill />
        </div>
        <div className="flex flex-col justify-center col-start-3 items-end">
          <p className="text-base leading-[1.3] tracking-normal ">
            +7 930 990 0081
          </p>
          <Link
            href={"tel:89309900081"}
            className="font-normal text-2xl leading-[1.3] tracking-normal pb-5"
          >
            с 10 до 22, каждый день
          </Link>
          <p className="text-base leading-[1.3] tracking-normal ">
            Благовещенский пер., 1А, подъезд 4
          </p>
        </div>
      </header>

      <div className=" bg-[#A0866A]/25">
        <div className="bg-[url('/jungle.png')] bg-cover h-[500px] w-screen  -z-10 -mt-[60px] pt-[240px] flex flex-1">
          <p className="font-normal text-[30px] leading-[1.3] tracking-normal text-center text-white mx-auto">
            Пространство восстановления ЭВОЛЮЦИЯ — это бережные уходы за кожей
            лица, <br /> инновационные аппаратные технологии на службе здоровья,
            авторские массажи <br /> лица и тела, профилактическая подология и
            глубокое расслабление с эффектом <br /> невесомости в сухом
            флоатинге NUVOLA LEGERA, которые помогают вам <br /> комфортно
            Эволюционировать к новым ресурсам.
          </p>
        </div>
      </div>

      <div className="flex flex-1 justify-between bg-[#A0866A]/25 px-[160px] pb-[60px]">
        <div className="flex flex-col justify-end gap-5 w-full md:w-fit ">
          <div className="w-full text-center">
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm inline-block font-light w-full text-lg md:text-[44px] leading-[112%] md:leading-[1.18] tracking-normal uppercase text-[#A0866A] bg-white py-5 px-16 hover:text-white hover:bg-[#A0866A] transition-all duration-300"
            >
              меню услуг
            </a>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-5">
              <Link
                href={"https://t.me/prostranstvo_evolution"}
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
        </div>

        <div className="flex flex-col gap-5 justify-end ">
          <p className="font-extrabold text-[32px] leading-[1.3] tracking-normal text-center text-[#A1876A]">
            Сайт на паузе, но не надолго!
          </p>
          <p className="font-normal text-[20px] leading-[1.3] tracking-normal text-center">
            Мы работаем над улучшением нашего сайта, <br /> и совсем скоро вы
            сможете увидеть все новшества!
          </p>
        </div>

        <div className="flex flex-col gap-5 justify-end relative h-[222px] w-[423px] mt-[51px]">
          <Image src={"/monkey.svg"} alt="logo" fill sizes="autp" />
        </div>
      </div>
    </div>
  );
}
