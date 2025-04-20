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
      {/* first card */}
      <div className="w-full h-73 flex justify-between items-center px-10 mt-10 mb-10">
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
                <p className="text-gray-500 font-400 text-16">Project Completed</p>
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
      {/* second card */}
    </div>
  );
};

export default Home;
