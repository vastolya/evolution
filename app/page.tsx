import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen relative bg-[#F8F7F7] bg-[url(/bg.svg)] bg-cover bg-center">
      <header className="grid grid-cols-[1fr_auto_1fr] items-center py-20 px-20">
        <div className="flex flex-col gap-3 justify-self-start">
          <p className="font-normal text-[16px] leading-none tracking-normal">
            Москва, ул. Большая Садовая, 14, стр. 6
          </p>
          <Link
            href={"tel:89309900081"}
            className="font-bold text-[24px] leading-none tracking-normal"
          >
            +7 (930) 990-00-81
          </Link>
        </div>

        <div className="justify-self-center">
          <Image src={"/logo.png"} alt="logo" width={390} height={127} />
        </div>

        <div className="flex flex-col gap-3 justify-self-end text-right">
          <p className="font-normal text-[16px] leading-none tracking-normal">
            Ежедневно
          </p>
          <p className="font-bold text-[24px] leading-none tracking-normal">
            с 10:00 - 22:00
          </p>
        </div>
      </header>

      <div className=" w-full text-center flex flex-col gap-3 pb-6">
        <h1 className="font-bold text-[24px] leading-none tracking-normal">
          Пространство восстановления ЭВОЛЮЦИЯ
        </h1>
        <h2 className="font-normal text-[16px] leading-none tracking-normal">
          Это бережные уходы за кожей лица, инновационные аппаратные технологии
          на службе здоровья, авторские <br /> массажи лица и тела,
          профилактическая подология и глубокое расслабление с эффектом
          невесомости <br /> в сухом флоатинге NUVOLA LEGERA, которые помогают
          вам комфортно Эволюционировать к новым ресурсам
        </h2>
      </div>

      <div className="w-full text-center bg-[#A0866A] py-14 text-white flex flex-col gap-3 ">
        <p className="font-light text-[44px] leading-[1.18] tracking-normal uppercase">
          Сайт на паузе, но не надолго!
        </p>
        <p className="font-normal text-[16px] leading-none tracking-normal">
          Мы работаем над улучшением нашего сайта, и совсем скоро вы сможете
          увидеть все новшества!
        </p>
      </div>

      <div className="pt-6 px-20 flex justify-between items-end">
        <div className="w-fit">
          <div className="flex justify-between pb-14">
            <div className="flex gap-5">
              <Link
                href={
                  "https://max.ru/join/vHYs8sxgXpIyTO1Ev-kev_roCGGO_GzWUvgzKHeBfng"
                }
                target="_blank"
              >
                <Image src={"/tg.svg"} alt="logo" width={52} height={52} />
              </Link>
              <Link
                href={
                  "https://max.ru/join/vHYs8sxgXpIyTO1Ev-kev_roCGGO_GzWUvgzKHeBfng"
                }
                target="_blank"
              >
                <Image src={"/max.svg"} alt="logo" width={52} height={52} />
              </Link>
            </div>
            <div className="flex gap-5">
              <Link
                href={
                  "https://yandex.ru/maps/213/moscow/house/blagoveshchenskiy_pereulok_1a/Z04Ycw5mT0cDQFtvfXt3d3RjYQ==/?ll=37.598511%2C55.765702&z=17.1"
                }
                target="_blank"
              >
                <Image src={"/yandex.svg"} alt="logo" width={42} height={52} />
              </Link>
              <Link
                href={
                  "https://2gis.ru/moscow/search/%D0%91%D0%9B%D0%90%D0%93%D0%9E%D0%92%D0%95%D0%A9%D0%95%D0%9D%D0%A1%D0%9A%D0%98%D0%99%20%D0%9F%D0%95%D0%A0%D0%95%D0%A3%D0%9B%D0%9E%D0%9A%2C%201%D0%90%2C%20%D0%9F%D0%9E%D0%94%D0%AA%D0%95%D0%97%D0%94%204%20%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0/firm/70000001082376713/37.596719%2C55.766806?m=37.590342%2C55.767188%2F13.94"
                }
                target="_blank"
              >
                <Image src={"/2gis.svg"} alt="logo" width={52} height={52} />
              </Link>
            </div>
          </div>
          <a
            href="/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-light text-[44px] leading-[1.18] tracking-normal uppercase text-[#A0866A] bg-white py-5 px-16 hover:text-white hover:bg-[#A0866A] transition-all duration-300"
          >
            меню услуг
          </a>
        </div>

        <Image src={"/monkey.svg"} alt="logo" width={587} height={307} />
      </div>
    </main>
  );
}
