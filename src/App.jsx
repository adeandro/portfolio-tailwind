import { useState } from "react";
import profil from "./assets/img/cropped-removebg-preview (1).png";
import { useEffect } from "react";

// porto img
import img1 from "./assets/portfolio/1.jpg";
// import img2 from "./assets/portfolio/2.jpg";
// import img3 from "./assets/portfolio/3.jpg";

// clients logo
import google from "./assets/clients/google.svg";
import gojek from "./assets/clients/gojek.svg";
import tokopedia from "./assets/clients/tokopedia.svg";
import traveloka from "./assets/clients/traveloka.svg";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [dark, setDark] = useState(false);

  // darkmode

  function navbar() {
    setIsActive(!isActive);
    console.log(isActive);
  }

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      setIsFixed(window.scrollY > fixedNav);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`${localStorage.getItem("theme")}`}
      // onClick={() => {
      //   if (isActive) {
      //     setIsActive(false);
      //   }
      // }}
    >
      {/* navbar start */}
      <header
        className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${
          isFixed ? "navbar-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="flex item-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                Ade Ariawan
              </a>
            </div>
            <div className="flex items-center p-4">
              <button
                type="button"
                className={`block absolute right-4 ${
                  isActive ? "hamburger-active" : ""
                } lg:hidden`}
                onClick={navbar}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className={`${
                  !isActive ? "hidden" : ""
                } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:py-0 dark:bg-dark lg:dark:bg-transparent dark:shadow-slate-500`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex hover:text-primary dark:text-white lg:inline-flex"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex hover:text-primary dark:text-white lg:inline-flex"
                    >
                      Tentang saya
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-dark py-2 mx-8 flex hover:text-primary dark:text-white lg:inline-flex"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="text-base text-dark py-2 mx-8 flex hover:text-primary dark:text-white lg:inline-flex"
                    >
                      Klien
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#blog"
                      className="text-base text-dark py-2 mx-8 flex hover:text-primary dark:text-white lg:inline-flex"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark py-2 mx-8 flex hover:text-primary dark:text-white lg:inline-flex"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="flex items-center pl-8 mt-3 lg:mt-0 lg:pl-0">
                    <div className="flex">
                      <span className="mr-2 text-sm text-slate-500">Light</span>
                      <button
                        className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1"
                        onClick={() => {
                          setDark(!dark);
                          if (!dark) {
                            localStorage.setItem("theme", "dark");
                          } else {
                            localStorage.setItem("theme", "light");
                          }
                        }}
                      >
                        <div
                          className={`${localStorage.getItem("theme") == "dark" ? "toggle-circle" : ""} h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out`}
                        ></div>
                      </button>
                      <span className="ml-2 text-sm text-slate-500">Dark</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* navbar end  */}

      {/* Hero section start */}
      <section id="home" className="pt-36 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Halo Semua, Saya{" "}
                <span className="block font-bold text-dark text-4xl mt-1 lg:5xl dark:text-white">
                  Ade Ariawan
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl dark:text-white">
                Teacher |{" "}
                <span className="text-dark dark:text-white">
                  Web Programmer
                </span>
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed dark:text-white">
                Belajar web programming itu mudah dan menyenangkan
                <span className="font-semibold text-dark"> bukan!</span>.
              </p>
              <a
                href="#"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 relative lg:mt-9 lg:right-0">
                <img
                  src={profil}
                  alt="andro"
                  className="min-w-full mx-auto blur-sm rounded-full hover:blur-none relative z-10"
                />
                <span className="absolute -top-14 left-1/2  -translate-x-1/2 md:scale-125">
                  <svg
                    width={500}
                    height={500}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#14b8a6"
                      d="M42,-35.4C54.5,-17.7,64.9,-0.3,64,19.1C63.2,38.5,51.1,59.8,31.9,70.8C12.6,81.8,-13.7,82.6,-30.6,71.4C-47.4,60.3,-54.7,37.2,-59.6,14.1C-64.4,-9,-66.8,-32.1,-56.5,-49.2C-46.2,-66.4,-23.1,-77.6,-4.2,-74.2C14.7,-70.9,29.4,-53,42,-35.4Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section end */}

      {/* About section start  */}
      <section id="about" className="pt-36 pb-32 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3 ">
                Tentang Saya
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl dark:text-white">
                Yuk, Belajar web programming
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                velit fuga unde, asperiores ipsa sed dolore.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10 dark:text-white">
                Mari berteman
              </h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, iste? Asperiores distinctio architecto enim iste
                laboriosam earum nulla!
              </p>
              <div className="flex items-center">
                {/* youtube  */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    width={20}
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* instagram  */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    width={20}
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                  </svg>
                </a>

                {/* twitter  */}
                <a
                  href="https://x.com"
                  target="_blank"
                  className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    width={20}
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>

                {/* tiktok  */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    width={20}
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>TikTok</title>
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section end  */}

      {/* Portfolio section start  */}
      <section
        id="portfolio"
        className="pt-36 pb-16 bg-slate-200 dark:bg-slate-800"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Portfolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
                Project Terbaru
              </h2>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                placeat? Perferendis voluptatibus voluptatem explicabo
                inventore. Dolores error perferendis exercitationem adipisci.
              </p>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={img1} className="w-full" alt="" />
              </div>
              <h3 className="font-semibold text-xl mt-5 mb-3 dark:text-white">
                Landing page Ade Andro
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                qui ratione dolorum.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={img1} className="w-full" alt="" />
              </div>
              <h3 className="font-semibold text-xl mt-5 mb-3 dark:text-white">
                E-Commerce
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                qui ratione dolorum.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={img1} className="w-full" alt="" />
              </div>
              <h3 className="font-semibold text-xl mt-5 mb-3 dark:text-white">
                Tecnical Documentation
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                qui ratione dolorum.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={img1} className="w-full" alt="" />
              </div>
              <h3 className="font-semibold text-xl mt-5 mb-3 dark:text-white">
                Tribute Page
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                qui ratione dolorum.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio section end  */}

      {/* client section start  */}
      <section
        id="clients"
        className="pt-36 pb-32 bg-slate-800 dark:bg-slate-300"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className=" mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Clients
              </h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-dark">
                Yang Pernah Bekerjasama
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis dolorum excepturi quis.
              </p>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="#"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8"
              >
                <img src={google} alt="google" />
              </a>
              <a
                href="#"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8"
              >
                <img src={gojek} alt="google" />
              </a>
              <a
                href="#"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8"
              >
                <img src={tokopedia} alt="google" />
              </a>
              <a
                href="#"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8"
              >
                <img src={traveloka} alt="google" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* client section end  */}

      {/* blog section start  */}
      <section id="blog" className="pt-36 pb-32 bg-slate-100 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
                Artikel Terkini
              </h2>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente eveniet ratione repudiandae deserunt!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg mb-10">
                <img src={img1} alt="programming" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl hover:text-primary truncate"
                    >
                      Review Keyboard
                    </a>
                  </h3>
                  <p className="font-medium text-secondary text-base mb-4 dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque, odit eum? Ab.
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 hover:shadow-md"
                  >
                    Baca selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg mb-10">
                <img src={img1} alt="programming" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl hover:text-primary truncate dark:text-white"
                    >
                      Menikmati secangkir kopi
                    </a>
                  </h3>
                  <p className="font-medium text-secondary text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit laboriosam neque vero?
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 hover:shadow-md"
                  >
                    Baca selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg mb-10">
                <img src={img1} alt="programming" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl hover:text-primary truncate dark:text-white"
                    >
                      Tips Belajar Programming
                    </a>
                  </h3>
                  <p className="font-medium text-secondary text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, magni?
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 hover:shadow-md"
                  >
                    Baca selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog section end */}

      {/* contact section start  */}
      <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white ">
                Hubungi kami
              </h2>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, doloremque.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <form>
              <div className="w-full mb-8 px-4">
                <label
                  htmlFor="name"
                  className="text-base text-primary font-bold"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full mb-8 px-4">
                <label
                  htmlFor="email"
                  className="text-base text-primary font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full mb-8 px-4">
                <label
                  htmlFor="message"
                  className="text-base text-primary font-bold"
                >
                  Pesan
                </label>
                <textarea
                  name="message"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                />
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500 ">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* contact section end */}

      {/* footer start  */}
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full p-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">Sesekali</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi kami</h3>
              <p>ariawan.ade@gmail.com</p>
              <p>Jl. Dieng-batur km06</p>
              <p>Bakal</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-3">
                Kategori tulisan
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary"
                  >
                    Programming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary"
                  >
                    Teknologi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary"
                  >
                    Gaya hidup
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-3">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#home"
                    className="inline-block text-base hover:text-primary"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="inline-block text-base hover:text-primary"
                  >
                    Tentang saya
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="inline-block text-base hover:text-primary"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#cliens"
                    className="inline-block text-base hover:text-primary"
                  >
                    Cliens
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="inline-block text-base hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block text-base hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-t-slate-700">
            <div className="flex items-center justify-center mb-5">
              {/* youtube  */}
              <a
                href="https://youtube.com"
                target="_blank"
                className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  width={20}
                  className="fill-current"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* instagram  */}
              <a
                href="https://instagram.com"
                target="_blank"
                className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  width={20}
                  className="fill-current"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </a>

              {/* twitter  */}
              <a
                href="https://x.com"
                target="_blank"
                className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  width={20}
                  className="fill-current"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              {/* tiktok  */}
              <a
                href="https://tiktok.com"
                target="_blank"
                className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  width={20}
                  className="fill-current"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>TikTok</title>
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              Dibuat dengan <span className="text-pink-500">❤️</span>
              <a
                href="https://instagram.com/ade_andro"
                target="_blank"
                className="text-primary font-bold"
              >
                Ade Ariawan
              </a>
              , Menggunakan{" "}
              <a
                href="https://tailwindcss.com"
                className="font-bold text-sky-500"
                target="_blank"
              >
                TailwindCSS
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
      {/* footer end  */}

      {/* back to top  */}
      <a
        href="#home"
        className={`h-14 w-14 bg-primary rounded-full fixed z-[999] bottom-4 right-4 p-4 justify-center items-center hover:animate-pulse ${isFixed ? "flex" : "hidden"}`}
      >
        <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
      </a>

      {/* back to top end  */}
    </div>
  );
}

export default App;
