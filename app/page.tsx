"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaY = startY - currentY;

    // Если почти не двигали (меньше 10px), считаем это кликом
    if (Math.abs(deltaY) < 10) {
      setIsExpanded(!isExpanded);
    } else if (deltaY > 50) {
      setIsExpanded(true);
    } else if (deltaY < -50) {
      setIsExpanded(false);
    }

    setStartY(0);
    setCurrentY(0);
  };

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventDefault);
    };
  }, [isDragging]);
  return (
    <main className="overflow-hidden min-h-screen w-screen relative bg-[#F8F7F7] bg-[url(/bg.svg)] bg-cover bg-center flex flex-col ">
      <div className="px-5 py-8 md:px-20 md:py-20 md:h-screen flex flex-col gap-8 md:gap-0 md:justify-between">
        <header className="flex flex-col gap-5 md:gap-0 md:grid grid-cols-[1fr_auto_1fr] md:items-center ">
          <div className="order-2 md:order-1 flex flex-col gap-2 md:gap-3 justify-self-start">
            <p className="font-normal text-base leading-[122%] md:leading-none tracking-normal text-[#7A7570] md:text-[#22252D]">
              Москва, ул. Большая Садовая, 14, стр. 6
            </p>
            <Link
              href={"tel:89309900081"}
              className="font-extrabold md:font-bold text-base underline md:no-underline md:text-2xl leading-[122%] md:leading-none  tracking-normal"
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
            <p className="font-normal text-base leading-[122%] md:leading-none tracking-normal text-[#7A7570] md:text-[#22252D]">
              Ежедневно
            </p>
            <p className="font-extrabold md:font-bold text-base  md:text-2xl leading-[120%] md:leading-none tracking-normal">
              с 10:00 - 22:00
            </p>
          </div>
        </header>

        {/* Mobile info */}
        <div className="md:hidden w-full flex flex-col gap-2">
          <h1 className="font-extrabold text-base leading-[1.22] md:font-bold md:text-2xl  md:leading-none tracking-normal">
            Пространство восстановления ЭВОЛЮЦИЯ
          </h1>
          <div className="relative">
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? "max-h-[80px]" : "max-h-[500px]"
              }`}
            >
              <h2 className="font-normal text-base leading-[1.22] tracking-normal">
                Это бережные уходы за кожей лица, инновационные аппаратные
                технологии на службе здоровья, авторские{" "}
                <br className="hidden md:flex" /> массажи лица и тела,
                профилактическая подология и глубокое расслабление с эффектом
                невесомости <br className="hidden md:flex" /> в сухом флоатинге
                NUVOLA LEGERA, которые помогают вам комфортно Эволюционировать к
                новым ресурсам
              </h2>
            </div>
            {isExpanded && (
              <div className="absolute bottom-0 right-0 bg-gradient-to-l from-[#F8F7F7] via-[#F8F7F7] to-transparent pl-8 pr-1">
                <span className="font-normal text-base leading-[1.22] tracking-normal">
                  ...
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="md:px-20 hidden md:flex justify-between items-end">
          <div className="flex flex-col w-full md:w-fit">
            <div className="order-2 md:order-1 flex justify-between  md:pb-14">
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

      <div className="px-4 py-5 text-center w-full  bg-[#A0866A] text-white flex flex-col gap-2 md:hidden">
        <p className="font-light text-lg leading-[1.12] tracking-[-0.01em] text-center uppercase">
          Сайт на паузе, но не надолго!
        </p>
        <p className="font-normal text-base leading-[1.22] tracking-normal text-center">
          Мы работаем над улучшением нашего сайта, и совсем скоро вы сможете
          увидеть все новшества!
        </p>
      </div>

      <div
        className={`flex md:hidden relative mx-auto transition-all duration-300  ${
          isExpanded
            ? "w-[370px] h-[195px] mt-[5px] mb-[108px]"
            : "w-[226px] h-[118px] mt-[44px] mb-[108px]"
        }`}
      >
        <Image src={"/monkey.svg"} alt="logo" fill sizes="autp" />
      </div>

      {/* mobile bottom bar */}
      <div
        ref={menuRef}
        className={`bg-[#F1F0EE] rounded-t-3xl md:hidden flex flex-col w-full md:w-fit px-4 pt-2 pb-8 absolute bottom-0 z-10 shadow-[0px_-1px_1px_0px_#22252D0A,0px_-2px_1px_0px_#22252D08,0px_-4px_1px_0px_#22252D03,0px_-6px_2px_0px_#22252D03] ${
          isDragging ? "" : "transition-transform duration-300"
        } ${isExpanded ? "translate-y-0" : "translate-y-[calc(100%-100px)]"}`}
        style={
          isDragging
            ? {
                transform: `translateY(${Math.max(
                  0,
                  Math.min(
                    currentY - startY,
                    isExpanded ? 0 : window.innerHeight
                  )
                )}px)`,
              }
            : undefined
        }
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full flex justify-center pb-4 cursor-grab active:cursor-grabbing">
          <svg
            width="60"
            height="8"
            viewBox="0 0 60 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H56C58.2091 0 60 1.79086 60 4C60 6.20914 58.2091 8 56 8H4C1.79086 8 0 6.20914 0 4Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="flex justify-between pb-5">
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
        <div className="w-full text-center">
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
