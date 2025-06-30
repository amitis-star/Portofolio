import { useState } from "react";
import Download from "../assests/svg/download.svg";
import Facebook from "../assests/svg/facebook.svg";
import Ball from "../assests/svg/ball.svg";
import Be from "../assests/svg/be.svg";
import Insta from "../assests/svg/insta.svg";
import In from "../assests/svg/in.svg";
import Research from "../assests/svg/research.svg";
import Design from "../assests/svg/design.svg";
import Analyze from "../assests/svg/analyze.svg";
import Launch from "../assests/svg/launch.svg";
import Arrow from "../assests/svg/arrow.svg";
import WhiteArrow from "../assests/svg/white-arrow.svg";
import Spotify from "../assests/svg/spotify.svg";
import Google from "../assests/svg/google.svg";
import Dibble from "../assests/svg/dribble.svg";
import Linkedin from "../assests/svg/linkedin.svg";
import Amazon from "../assests/svg/amazon.svg";
import Medium from "../assests/svg/medium.svg";
import InEmpty from "../assests/svg/in-empty.svg";
import FacebookPurple from "../assests/svg/facebook-purple.svg";
import LocationPurple from "../assests/svg/location-purple.svg";
import LocationEmpty from "../assests/svg/location-empty.svg";
import Send from "../assests/svg/send.svg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container">
        <div className="h-24 flex justify-between items-center px-5 py-5 w-full">
          <div className="flex items-center gap-4 flex-grow justify-start">
            <span className="bg-fuchsia-800 w-14 h-14 rounded-full flex justify-center items-center text-[30px] font-semibold text-white">
              A
            </span>
            <p className="text-[30px] font-semibold text-fuchsia-900 my-1">
              Amitis
            </p>
          </div>

          <div className="lg:hidden relative flex justify-end ml-4 z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {isOpen && (
              <div className="absolute top-full right-0 mt-2 w-60 bg-fuchsia-200 rounded-2xl shadow-xl flex flex-col items-center gap-4 py-6 px-4 z-50">
                <span className="text-gray-800 font-semibold">Home</span>
                <span className="text-gray-800 font-semibold">About</span>
                <span className="text-gray-800 font-semibold">Process</span>
                <span className="text-gray-800 font-semibold">Portfolio</span>
                <span className="text-gray-800 font-semibold">Blog</span>
                <span className="text-gray-800 font-semibold">Services</span>
                <button className="h-10 px-6 bg-fuchsia-800 rounded-xl text-white font-semibold">
                  Contact
                </button>
              </div>
            )}
          </div>

          <div className="hidden lg:flex gap-6 items-center">
            <span className="text-gray-600 font-semibold py-2 px-4">Home</span>
            <span className="text-gray-600 font-semibold py-2 px-4">About</span>
            <span className="text-gray-600 font-semibold py-2 px-4">
              Process
            </span>
            <span className="text-gray-600 font-semibold py-2 px-4">
              Portfolio
            </span>
            <span className="text-gray-600 font-semibold py-2 px-4">Blog</span>
            <span className="text-gray-600 font-semibold py-2 px-4">
              Services
            </span>
            <button className="h-10 px-6 bg-fuchsia-800 rounded-xl text-white font-semibold">
              Contact
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-10 mt-10 mb-20 gap-10 lg:gap-20">
          <div className="w-full flex flex-col lg:flex-row-reverse justify-center lg:justify-start items-center lg:items-start">
            <div className=" rounded-xl w-full max-w-xs lg:max-w-none flex justify-center">
              <img alt="" className="object-cover rounded-xl h-73 w-73 " />
            </div>
          </div>

          <div className="w-full flex flex-col justify-between h-full">
            <div className="w-full flex flex-col justify-between gap-4 text-center md:text-left">
              <p className="text-center lg:text-left text-24 md:text-36 font-bold w-full md:w-69">
                Hello, I’m Brooklyn Gilbert
              </p>
              <p className="text-center lg:text-left text-gray-600 text-14 md:text-18">
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strive to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
              <button className="h-12 w-full sm:w-32 md:w-full lg:w-32 bg-fuchsia-800 rounded-xl text-white font-semibold">
                Say Hello!
              </button>
            </div>

            <div className="w-full mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-fuchsia-100 flex flex-col items-center justify-center gap-2 py-4 rounded-xl">
                <p className="text-3xl md:text-40 font-bold text-gray-600">
                  15 Y.
                </p>
                <p className="text-gray-500 font-normal text-sm md:text-16">
                  Experience
                </p>
              </div>
              <div className="bg-fuchsia-100 flex flex-col items-center justify-center gap-2 py-4 rounded-xl">
                <p className="text-3xl md:text-40 font-bold text-gray-600">
                  250+
                </p>
                <p className="text-gray-500 font-normal text-sm md:text-16">
                  Project Completed
                </p>
              </div>
              <div className="bg-fuchsia-100 flex flex-col items-center justify-center gap-2 py-4 rounded-xl">
                <p className="text-3xl md:text-40 font-bold text-gray-600">
                  58
                </p>
                <p className="text-gray-500 font-normal text-sm md:text-16">
                  Happy Client
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 mt-10 mb-10 px-4 md:px-10 lg:px-20">
          <img
            alt=""
            className="h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 object-cover rounded-xl "
          />

          <span className="w-fit bg-white flex flex-row items-center justify-center gap-4 rounded-xl shadow-md px-4 py-2">
            <img
              src={Facebook}
              alt="Facebook"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <img src={Ball} alt="Ball" className="w-10 h-10 md:w-12 md:h-12" />
            <img
              src={Insta}
              alt="Insta"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <img src={In} alt="In" className="w-10 h-10 md:w-12 md:h-12" />
            <img src={Be} alt="Be" className="w-10 h-10 md:w-12 md:h-12" />
          </span>

          <div className="w-full max-w-3xl flex flex-col items-center text-center gap-6">
            <p className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-fuchsia-900 leading-tight">
              I am Professional User Experience Designer
            </p>
            <p className="text-gray-600 text-[16px] md:text-[18px]">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p className="text-gray-600 text-[16px] md:text-[18px]">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
              <button className="h-12 px-6 bg-fuchsia-800 rounded-xl text-white font-semibold">
                Say Hello!
              </button>
              <button className="h-12 px-6 border border-fuchsia-800 rounded-xl text-fuchsia-800 font-semibold flex items-center gap-3">
                <img src={Download} alt="download" className="w-5 h-5" />
                download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-gray-200 mt-30">
        <div className="container">
          <div className="py-10 mb-30 flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <p className="text-center lg:text-left text-30 sm:text-50 font-600 text-gray-900">
                Work Process
              </p>
              <p className="text-center lg:text-left text-gray-500 font-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p className="text-center lg:text-left text-gray-500 font-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non.
              </p>
            </div>
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="bg-neutral-100 rounded-xl p-8 flex flex-col gap-5">
                <div>
                  <img src={Research} alt="research" />
                </div>
                <div>
                  <p className="text-20 sm:text-30 text-gray-900 font-600">
                    1. Research
                  </p>
                  <p className="text-14 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-100 rounded-xl p-8 flex flex-col gap-5">
                <div className="w-18 h-18 flex justify-center items-center bg-stone-200 rounded-xl">
                  <img src={Design} alt="design" />
                </div>
                <div>
                  <p className="text-20 sm:text-30 text-gray-900 font-600">
                    2. Design
                  </p>
                  <p className="text-14 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-100 rounded-xl p-8 flex flex-col gap-5">
                <div className="w-18 h-18 flex justify-center items-center bg-stone-200 rounded-xl">
                  <img src={Analyze} alt="analyze" />
                </div>
                <div>
                  <p className="text-20 sm:text-30 text-gray-900 font-600">
                    3. Analyze
                  </p>
                  <p className="text-14 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-100 rounded-xl p-8 flex flex-col gap-5">
                <div className="w-18 h-18 flex justify-center items-center bg-stone-200 rounded-xl">
                  <img src={Launch} alt="launch" />
                </div>
                <div>
                  <p className="text-20 sm:text-30 text-gray-900 font-600">
                    4. Launch
                  </p>
                  <p className="text-14 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 mb-17">
          <span className="text-24 sm:text-40 font-500 text-gray-900">
            Portfolio
          </span>
          <span className="text-18 sm:text-20 max-w-full sm:w-[577px] text-center font-300 text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-stone-100 flex flex-col justify-between"
            >
              <img alt="" className="w-full h-41" />
              <div className="flex flex-col px-5 sm:px-10 lg:px-20 py-10">
                <p className="text-12 text-gray-400 mb-5">UI-UX DESIGN</p>
                <span className="text-18 text-gray-900 font-600 mb-5">
                  Product Admin Dashboard
                </span>
                <p className="text-12 text-gray-400 mb-5">
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>

                <button
                  type="button"
                  className="w-full sm:w-32 mt-2 border-fuchsia-900 border-[2px] rounded-xl h-12 px-3 py-6 flex justify-center gap-5 items-center"
                >
                  <p>Case Study</p>
                  <img src={Arrow} alt="arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mx-auto flex justify-center items-center mt-10">
          <button className="w-full sm:w-30 h-12 bg-fuchsia-700 text-white rounded-xl font-600">
            More Projects
          </button>
        </div>
      </div>
      <div className="bg-blue-950 mt-20 mb-25 flex justify-center items-center py-10 px-4">
        <div className="w-full max-w-[620px] flex flex-col items-center gap-6">
          <p className="text-24 sm:text-[32px]  text-white font-semibold text-center leading-tight">
            Do you have Project Idea? Let's discuss your project!
          </p>
          <p className="text-14 sm:text-[16px] text-gray-400 font-medium text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <button className="bg-fuchsia-600 w-full sm:w-40 h-12 flex items-center justify-center gap-3 rounded-xl">
            <p className="text-white font-medium">Let's work Together</p>
            <img src={WhiteArrow} alt="arrow" className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 mb-17">
        <span className="text-24 sm:text-40 font-500 text-gray-900">Blog</span>
        <span className="text-16 sm:text-20 text-center font-300 text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </span>
      </div>
      <div className="container">
        <div className="mb-25 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border shadow-xl bg-stone-100 rounded-t-2xl flex flex-col items-center justify-start">
            <img
              alt="blog-pics"
              className="w-full h-39  overflow-hidden rounded-t-2xl mb-2"
            />
            <div className="w-full my-auto px-6">
              <p className="text-gray-500 font-400 text-12 mb-2">
                22 Oct, 2020 / 246 Comments
              </p>
              <p className="text-14 sm:text-18 text-gray-700 font-600 mb-3">
                Lorem ipsum dolor sit consea. Nulla purus arcu
              </p>
            </div>
          </div>

          <div className="border shadow-xl bg-stone-100 rounded-t-2xl flex flex-col items-center justify-start">
            <img
              alt="blog-pics"
              className="w-full h-39  overflow-hidden rounded-t-2xl mb-2"
            />
            <div className="w-full my-auto px-6">
              <p className="text-gray-500 font-400 text-12 mb-2">
                22 Oct, 2020 / 246 Comments
              </p>
              <p className="text-14 sm:text-18 text-gray-700 font-600 mb-3">
                Lorem ipsum dolor sit consea. Nulla purus arcu
              </p>
            </div>
          </div>

          <div className="border shadow-xl bg-stone-100 rounded-t-2xl flex flex-col items-center justify-start">
            <img
              alt="blog-pics"
              className="w-full h-39 overflow-hidden rounded-t-2xl mb-2"
            />
            <div className="w-full my-auto px-6">
              <p className="text-gray-500 font-400 text-12 mb-2">
                22 Oct, 2020 / 246 Comments
              </p>
              <p className="text-14 sm:text-18 text-gray-700 font-600 mb-3">
                Lorem ipsum dolor sit consea. Nulla purus arcu
              </p>
            </div>
          </div>

          <div className="border shadow-xl bg-stone-100 rounded-t-2xl flex flex-col items-center justify-start">
            <img
              alt="blog-pics"
              className="w-full h-39 overflow-hidden rounded-t-2xl mb-2"
            />
            <div className="w-full my-auto px-6">
              <p className="text-gray-500 font-400 text-12 mb-2">
                22 Oct, 2020 / 246 Comments
              </p>
              <p className="text-14 sm:text-18 text-gray-700 font-600 mb-3">
                Lorem ipsum dolor sit consea. Nulla purus arcu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="mt-30 mb-25 px-10 py-10 bg-gray-200 grid grid-cols-1 gap-10 lg:grid-cols-2 h-auto lg:h-[700px]">
          <div className="flex flex-col justify-center items-start gap-5">
            <p className="text-center lg:text-left text-24 sm:text-50 font-600 text-gray-900">
              Work Process
            </p>

            <p className="text-center lg:text-left text-18 sm:text-24 text-gray-500 font-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p className="text-center lg:text-left text-gray-500 font-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>

          <div className="flex flex-col justify-evenly items-center">
            <div className="h-auto lg:h-33 bg-white rounded-2xl p-8 flex flex-col mb-5 gap-4">
              <p className="text-gray-800 font-800 text-20">
                User Experience (UX)
              </p>
              <p className="text-gray-500 font-400 text-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
            <div className="h-auto lg:h-33 bg-white rounded-2xl p-8 flex flex-col mb-5 gap-4">
              <p className="text-gray-800 font-800 text-20">
                User Interface (UI)
              </p>
              <p className="text-gray-500 font-400 text-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
            <div className="h-auto lg:h-33 bg-white rounded-2xl p-8 flex flex-col gap-4">
              <p className="text-gray-800 font-800 text-20">Web Development</p>
              <p className="text-gray-500 font-400 text-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex flex-col items-center justify-between gap-4 mb-17">
          <span className="text-24 sm:text-40 font-500 text-gray-900">
            Happy Clients
          </span>
          <span className="text-16 sm:text-20 h-12 text-center font-300 text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </span>
        </div>
      </div>
      <div className="container">
        <div className="mx-auto mb-00 lg:mb-25 grid grid-cols-6">
          <div>
            <img src={Google} alt="google" />
          </div>
          <div>
            <img src={Dibble} alt="dibble" />
          </div>
          <div>
            <img src={Linkedin} alt="limkedin" />
          </div>
          <div>
            <img src={Amazon} alt="amazon" />
          </div>
          <div>
            <img src={Medium} alt="medium" />
          </div>
          <div>
            <img src={Spotify} alt="spotify" />
          </div>
        </div>

        <div className="mx-auto flex flex-col items-center justify-between gap-4 mb-25">
          <span className="text-24 sm:text-40 font-500 text-gray-900">
            Testimonial
          </span>
          <span className="text-16 sm:text-20 text-center font-300 text-gray-500 mb-15">
            TThere are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </span>
          <span className="text-center text-gray-800 font-700">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            Morbi ornare elit at libero suscipit porta.”
          </span>
          <p className="text-gray-900 font-600">Esther Howard</p>
          <p className="font-400 text-gray-700">
            Managing Director, ABC company
          </p>
        </div>

        <div className="p-6 mx-auto lg:p-22 h-auto grid grid-cols-1 xl:grid-cols-2 gap-10 shadow-2xl bg-stone-100 rounded-2xl">
          <div className="w-full h-auto xl:w-66 flex flex-col justify-between items-start gap-6">
            <div className="w-full h-auto xl:h-27 flex flex-col justify-between items-center xl:items-start text-center xl:text-left gap-2">
              <p className="w-full font-700 text-2xl xl:text-40 text-gray-900">
                Let’s discuss your Project
              </p>
              <p className="w-full font-400 text-base xl:text-18 text-gray-600">
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alteration.
              </p>
            </div>

            <div className="w-full xl:w-51 h-auto xl:h-47 flex flex-col justify-between items-center gap-4">
              <div className="w-full bg-white rounded-xl shadow-lg p-4 xl:p-6 flex justify-start gap-4 items-center">
                <img
                  src={LocationPurple}
                  alt="location"
                  className="w-10 h-10 xl:w-12 xl:h-12"
                />
                <div>
                  <p className="text-gray-600 font-400 text-sm xl:text-14">
                    Address:
                  </p>
                  <p className="text-gray-700 font-600 text-base xl:text-18">
                    New Mexico 31134
                  </p>
                </div>
              </div>
              <div className="w-full bg-white rounded-xl shadow-lg p-4 xl:p-6 flex justify-start gap-4 items-center">
                <img
                  src={LocationEmpty}
                  alt="email"
                  className="w-10 h-10 xl:w-12 xl:h-12 bg-stone-100 rounded-sm"
                />
                <div>
                  <p className="text-gray-600 font-400 text-sm xl:text-14">
                    My Email:
                  </p>
                  <p className="text-gray-700 font-600 text-base xl:text-18">
                    mymail@mail.com
                  </p>
                </div>
              </div>
              <div className="w-full bg-white rounded-xl shadow-lg p-4 xl:p-6 flex justify-start gap-4 items-center">
                <img
                  src={LocationEmpty}
                  alt="call"
                  className="w-10 h-10 xl:w-12 xl:h-12 bg-stone-100 rounded-sm"
                />
                <div>
                  <p className="text-gray-600 font-400 text-sm xl:text-14">
                    Call Me Now:
                  </p>
                  <p className="text-gray-700 font-600 text-base xl:text-18">
                    00-1234 00000
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-44 flex justify-center xl:justify-between items-center gap-4">
              <img src={FacebookPurple} alt="facebook" />
              <img
                src={Ball}
                alt="ball"
                className="w-10 h-10 xl:w-12 xl:h-12"
              />
              <img src={Be} alt="be" className="w-10 h-10 xl:w-12 xl:h-12" />
              <img
                src={Insta}
                alt="insta"
                className="w-10 h-10 xl:w-12 xl:h-12"
              />
              <img
                src={InEmpty}
                alt="in"
                className="w-10 h-10 xl:w-12 xl:h-12"
              />
            </div>
          </div>

          <div className="w-full h-auto xl:w-74 flex flex-col items-start gap-8">
            <div className="w-full">
              <p className="text-gray-500 font-400 text-sm xl:text-16">
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alteration.
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="border-b-2 border-fuchsia-400 pb-1">
                <p className="text-fuchsia-500 font-400 text-base lg:text-18">
                  Name*
                </p>
              </div>
              <div className="border-b-2 border-gray-400 pb-1">
                <p className="text-gray-500 font-400 text-base lg:text-18">
                  Email*
                </p>
              </div>
              <div className="border-b-2 border-gray-400 pb-1">
                <p className="text-gray-500 font-400 text-base lg:text-18">
                  Location
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="w-full sm:w-1/2 border-b-2 border-gray-400 pb-1">
                  <p className="text-gray-500 font-400 text-base lg:text-18">
                    Budget*
                  </p>
                </div>
                <div className="w-full sm:w-1/2 border-b-2 border-gray-400 pb-1">
                  <p className="text-gray-500 font-400 text-base lg:text-18">
                    Subject*
                  </p>
                </div>
              </div>
              <div className="border-b-2 border-gray-400 pb-1 mb-5">
                <p className="text-gray-500 font-400 text-base lg:text-18">
                  Message*
                </p>
              </div>
              <div className="w-full">
                <button className="w-full h-12 bg-purple-600 rounded-lg flex p-4 items-center justify-center gap-2">
                  <p className="text-white font-700 text-base lg:text-18">
                    Submit
                  </p>
                  <img
                    src={Send}
                    alt="send"
                    className="w-4 h-4 lg:w-5 lg:h-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
