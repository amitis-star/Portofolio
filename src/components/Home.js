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

const Home = () => {
  return (
    <>
      <div className="container w-2xl">
        {/* header */}
        <div className=" w-full h-24 flex justify-around items-center py-5">
          <div className="w-37 h-full flex gap-4 items-cetner">
            <span className="bg-fuchsia-800 w-14 h-14 rounded-full flex justify-center items-center text-30 font-500 text-white">
              A
            </span>
            <p className="text-30 font-500 text-fuchsia-900 text-center my-1">
              Amitis
            </p>
          </div>
          <div className="w-[722px] h-full  flex items=center justify-between">
            <span className="text-gray-600 font-600 py-4 px-4">Home</span>
            <span className="text-gray-600 font-600 py-4 px-4">About</span>
            <span className="text-gray-600 font-600 py-4 px-4">Process</span>
            <span className="text-gray-600 font-600 py-4 px-4">Portfolio</span>
            <span className="text-gray-600 font-600 py-4 px-4">Blog</span>
            <span className="text-gray-600 font-600 py-4 px-4">Services</span>
            <button className="h-full w-26 bg-fuchsia-800 rounded-xl text-white font-600">
              Contact
            </button>
          </div>
        </div>
        {/* section 1 */}
        <div className="w-full h-73 flex justify-between items-center px-10 mt-10 mb-20">
          <div className="h-full w-[648px]  flex flex-col items-between justify-between">
            <div className="w-full h-51  flex flex-col items-between justify-between">
              <p className="h-32 text-60 font-700 w-69">
                Hello, I’m Brooklyn Gilbert
              </p>
              <p className="h-18 text-gray-600 text-18">
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
              <button className="h-12 w-28 bg-fuchsia-800 rounded-xl text-white font-600">
                Say Hello!
              </button>
            </div>
            <div className="w-full h-26  p-3 flex justify-between items-center ">
              <div className="w-35 h-26 bg-fuchsia-100 flex flex-col items-center justify-center gap-2">
                <p className="text-40 font-700 text-gray-600">15 Y.</p>
                <p className="text-gray-500 font-400 text-16">Expirence</p>
              </div>
              <div className="w-35 h-26 bg-fuchsia-100 flex flex-col items-center justify-center gap-2">
                <p className="text-40 font-700 text-gray-600">250+</p>
                <p className="text-gray-500 font-400 text-16">
                  Project Completed
                </p>
              </div>
              <div className="w-35 h-26 bg-fuchsia-100 flex flex-col items-center justify-center gap-2">
                <p className="text-40 font-700 text-gray-600">58</p>
                <p className="text-gray-500 font-400 text-16">Happy Client</p>
              </div>
            </div>
          </div>
          <div className="h-full w-72 bg-lime-200 rounded-xl">
            <img alt="" />
          </div>
        </div>
        {/* section 2 */}
        <div className="w-full h-73 flex justify-between items-center px-10 mt-20 mb-10">
          <div className="h-full w-72 bg-lime-200 rounded-xl relative">
            <img alt="" />
            <span className="absolute w-43 h-18 bg-white top-69 left-30 flex items-center justify-evenly rounded rounded-xl">
              <div>
                <img src={Facebook} alt="Facebook" className="w-12 h-12" />
              </div>
              <div>
                <img src={Ball} alt="Ball" className="w-12 h-12" />
              </div>
              <div>
                <img src={Insta} alt="Insta" className="w-12 h-12" />
              </div>
              <div>
                <img src={In} alt="In" className="" />
              </div>
              <div>
                <img src={Be} alt="Be" className="w-12 h-12" />
              </div>
            </span>
          </div>
          <div className="h-full w-[648px]  flex flex-col items-between justify-between">
            <div className="w-full h-full  flex flex-col items-between justify-between">
              <p className="h-30 text-60 font-700 w-full">
                I am Professional User Experience Designer
              </p>
              <p className=" text-gray-600 text-18">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
              <p className=" text-gray-600 text-18">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services.
              </p>
              <div className="flex gap-5 items-center ">
                <button className="h-12 w-28 bg-fuchsia-800 rounded-xl text-white font-600">
                  Say Hello!
                </button>
                <button className="h-12 w-34 border border-fuchsia-800 rounded-xl text-fuchsia-800  font-600 flex justify-center items-center gap-5">
                  <img src={Download} alt="download" />
                  download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* section 3 */}
        <div className="w-full h-[700px] mt-30 flex justify-between items-center bg-gray-200 px-10 p-10 mb-30">
          <div className="h-40 w-71 flex flex-col itmes-between justify-between">
            <p className="text-50 font-600 text-gray-900">Work Process</p>
            <p className="text-gray-500 font-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p className="text-gray-500 font-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
          <div className="w-[648px] h-full flex justify-between items-center">
            <div className="h-full w-46 flex flex-col items-between justify-between">
              <div className="w-full h-[276px] bg-neutral-100 rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <img src={Research} alt="research" />
                </div>
                <div>
                  <p className="text-30 text-gray-900 font-600">1. Research</p>
                  <p className="text-14 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu.
                  </p>
                </div>
              </div>
              <div className="w-full h-[276px] bg-neutral-100 rounded-xl p-8 flex flex-col justify-between">
                <div className="w-18 h-18 flex justify-center items-center bg-stone-200 rounded-xl">
                  <img src={Design} alt="design" />
                </div>
                <div>
                  <p className="text-30 text-gray-900 font-600">2. Design</p>
                  <p className="text-14 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full w-46 flex flex-col items-evenly justify-evenly">
              <div className="w-full h-[276px] bg-neutral-100 rounded-xl p-8 flex flex-col justify-between">
                <div className="w-18 h-18 flex justify-center items-center bg-stone-200 rounded-xl">
                  <img src={Analyze} alt="analyze" />
                </div>
                <div>
                  <p className="text-30 text-gray-900 font-600">3. Analyze</p>
                  <p className="text-14 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu.
                  </p>
                </div>
              </div>
              <div className="w-full h-[276px] bg-neutral-100 rounded-xl p-8 flex flex-col justify-between">
                <div className="w-18 h-18 flex justify-center items-center bg-stone-200 rounded-xl">
                  <img src={Launch} alt="launch" />
                </div>
                <div>
                  <p className="text-30 text-gray-900 font-600">4. Launch</p>
                  <p className="text-14 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 4 */}
        <div className="w-full mx-auto flex flex-col items-center justify-between gap-4 mb-17">
          <span className="text-40 font-500 text-gray-900">Portfolio</span>
          <span className="w-[577px] h-12 text-center text-20 font-300 text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </span>
        </div>
        {/* section 5 */}
        <div className=" mx-auto w-[1320px] h-66 flex justify-between items-center">
          <div className="h-full w-60 bg-stone-100 flex flex-col justify-between ">
            <img alt="" className="w-full h-41 bg-green-100" />
            <div className="w-53 h-31 m-auto flex flex-col justify-between">
              <p className="text-12 text-gray-400">UI-UX DESIGN</p>
              <span className="text-18 text-gray-900 font-600">
                Product Admin Dashboard
              </span>
              <p className="text-12 text-gray-400">
                Vivamus eleifend convallis ante, non pharetra libero molestie
                laoreet. Donec id imperdiet lacus.
              </p>
              <button
                type="text"
                className="mt-2 border border-fuchsia-900 border-[2px] rounded-xl w-32 h-12 px-3 py-6 flex justify-center gap-5 items-center"
              >
                <p>Case Study</p>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="h-full w-60 bg-stone-100 flex flex-col justify-between ">
            <img alt="" className="w-full h-41 bg-green-100" />
            <div className="w-53 h-31 m-auto flex flex-col justify-between">
              <p className="text-12 text-gray-400">UI-UX DESIGN</p>
              <span className="text-18 text-gray-900 font-600">
                Product Admin Dashboard
              </span>
              <p className="text-12 text-gray-400">
                Vivamus eleifend convallis ante, non pharetra libero molestie
                laoreet. Donec id imperdiet lacus.
              </p>
              <button
                type="text"
                className="mt-2 border border-fuchsia-900 border-[2px] rounded-xl w-32 h-12 px-3 py-6 flex justify-center gap-5 items-center"
              >
                <p>Case Study</p>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="h-full w-60 bg-stone-100 flex flex-col justify-between ">
            <img alt="" className="w-full h-41 bg-green-100" />
            <div className="w-53 h-31 m-auto flex flex-col justify-between">
              <p className="text-12 text-gray-400">UI-UX DESIGN</p>
              <span className="text-18 text-gray-900 font-600">
                Product Admin Dashboard
              </span>
              <p className="text-12 text-gray-400">
                Vivamus eleifend convallis ante, non pharetra libero molestie
                laoreet. Donec id imperdiet lacus.
              </p>
              <button
                type="text"
                className="mt-2 border border-fuchsia-900 border-[2px] rounded-xl w-32 h-12 px-3 py-6 flex justify-center gap-5 items-center"
              >
                <p>Case Study</p>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
        {/* section 6 */}
        <div className="mx-auto w-[1320px] h-66 flex justify-between items-center mt-10 mb-20">
          <div className="h-full w-60 bg-stone-100 flex flex-col justify-between ">
            <img alt="" className="w-full h-41 bg-green-100" />
            <div className="w-53 h-31 m-auto flex flex-col justify-between">
              <p className="text-12 text-gray-400">UI-UX DESIGN</p>
              <span className="text-18 text-gray-900 font-600">
                Product Admin Dashboard
              </span>
              <p className="text-12 text-gray-400">
                Vivamus eleifend convallis ante, non pharetra libero molestie
                laoreet. Donec id imperdiet lacus.
              </p>
              <button
                type="text"
                className="mt-2 border border-fuchsia-900 border-[2px] rounded-xl w-32 h-12 px-3 py-6 flex justify-center gap-5 items-center"
              >
                <p>Case Study</p>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="h-full w-60 bg-stone-100 flex flex-col justify-between ">
            <img alt="" className="w-full h-41 bg-green-100" />
            <div className="w-53 h-31 m-auto flex flex-col justify-between">
              <p className="text-12 text-gray-400">UI-UX DESIGN</p>
              <span className="text-18 text-gray-900 font-600">
                Product Admin Dashboard
              </span>
              <p className="text-12 text-gray-400">
                Vivamus eleifend convallis ante, non pharetra libero molestie
                laoreet. Donec id imperdiet lacus.
              </p>
              <button
                type="text"
                className="mt-2 border border-fuchsia-900 border-[2px] rounded-xl w-32 h-12 px-3 py-6 flex justify-center gap-5 items-center"
              >
                <p>Case Study</p>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="h-full w-60 bg-stone-100 flex flex-col justify-between ">
            <img alt="" className="w-full h-41 bg-green-100" />
            <div className="w-53 h-31 m-auto flex flex-col justify-between">
              <p className="text-12 text-gray-400">UI-UX DESIGN</p>
              <span className="text-18 text-gray-900 font-600">
                Product Admin Dashboard
              </span>
              <p className="text-12 text-gray-400">
                Vivamus eleifend convallis ante, non pharetra libero molestie
                laoreet. Donec id imperdiet lacus.
              </p>
              <button
                type="text"
                className="mt-2 border border-fuchsia-900 border-[2px] rounded-xl w-32 h-12 px-3 py-6 flex justify-center gap-5 items-center"
              >
                <p>Case Study</p>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
        {/* section 7 */}
        <div className="w-full mx-auto flex justify-center itmes-center">
          <button className="w-30 h-12 bg-fuchsia-700 text-white rounded-xl font-600">
            More Projects
          </button>
        </div>
        {/* section 8 */}
        <div className="bg-blue-950 h-65 mt-20 flex justify-center items-center mb-25">
          <div className="w-[620px] h-54 flex flex-col items-center justify-between">
            <p className="text-white font-600 text-50 text-center">Do you have Project Idia? Let's discuss your project!</p>
            <p className="text-gray-500 font-500 text-18 text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <button className="bg-fuchsia-600 w-40 h-12 flex items-center gap-3 justify-center rounded-xl">
                <p className="text-white font-500">Let's work Together</p>
                <img src={WhiteArrow} alt="arrow"/>
            </button>
          </div>
        </div>
        {/* section 9 */}
        <div className="w-full mx-auto flex flex-col items-center justify-between gap-4 mb-17">
          <span className="text-40 font-500 text-gray-900">Blog</span>
          <span className="w-[577px] h-12 text-center text-20 font-300 text-gray-500">
            TThere are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
