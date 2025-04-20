import Download from "../assests/svg/download.svg";
import Facebook from "../assests/svg/facebook.svg";
import Ball from "../assests/svg/ball.svg";
import Be from "../assests/svg/be.svg";
import Insta from "../assests/svg/insta.svg";
import In from "../assests/svg/in.svg";

const Home = () => {
  return (
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
                <img src={Facebook} alt="Facebook" className="w-12 h-12"/>
            </div>
            <div>
                <img src={Ball} alt="Ball" className="w-12 h-12"/>
            </div>
            <div>
                <img src={Insta} alt="Insta" className="w-12 h-12"/>
            </div>
            <div>
                <img src={In} alt="In" className=""/>
            </div>
            <div>
                <img src={Be} alt="Be" className="w-12 h-12"/>
            </div>
          </span>
        </div>
        <div className="h-full w-[648px]  flex flex-col items-between justify-between">
          <div className="w-full h-full  flex flex-col items-between justify-between">
            <p className="h-30 text-60 font-700 w-full">
              I am Professional User Experience Designer
            </p>
            <p className=" text-gray-600 text-18">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p className=" text-gray-600 text-18">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
            <div className="flex gap-5 items-center ">
              <button className="h-12 w-28 bg-fuchsia-800 rounded-xl text-white font-600">
                Say Hello!
              </button>
              <button className="h-12 w-34 border border-fuchsia-800 rounded-xl text-fuchsia-800  font-600 flex justify-center items-center gap-5">
                <img src={Download} alt="download"/>
                download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="w-full h-[600px] bg-lime-200 mt-60">

      </div>
    </div>
  );
};

export default Home;
