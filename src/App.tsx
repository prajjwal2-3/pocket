import Header from "./components/Header";

function App() {
  return (
    <div className="h-auto bg-[rgb(22,22,24)] flex flex-col items-center">
      <Header />
      <div className="mt-20 bg-[rgb(46,46,48)] rounded-3xl p-1 border border-white/20">
        <button className="text-white font-semibold p-1">
          Watch our recorded AI Features webinar -&gt;
        </button>
      </div>
      
      <div className="relative w-full h-auto flex flex-col    items-center">
    <div className="absolute  z-10 flex flex-col  items-center">
    <div className="w-8/12  text-center flex flex-col justify-center items-center ">
        <div className="text-[5rem] m-2 font-bold text-center font-serif text-white">
          The most powerful and intuitive legal platform
        </div>
        <div className="w-8/12 m-2 text-center text-white/70 font-semibold text-xl">
          Pocketlaw is the new standard for legal management. Streamline
          contract lifecycles, task management and legal data insights and
          intelligence. Powered by AI.
        </div>
        <div className="">
          <button className="bg-yellow-400 px-4 py-2 rounded-full mt-12">Get a demo</button>
        </div>
      </div>
      <div className="flex flex-col items-center my-14">
<img
    className="w-10/12 h-full "
    src="https://framerusercontent.com/images/Ro1VeqQgAxlkL2UpRh09z6kimI.svg"
    alt="pending"
  />
</div>
    </div>
   
    <div className="w-[80rem] h-[80rem] absolute mt-[20rem] blur-3xl bg-blue-500/20 rounded-full"></div>
    <img
    className="w-10/12  "
    src="https://framerusercontent.com/images/XYW9U89OkawwfrVLXPIaB6miUN0.svg?scale-down-to=1024"
    alt="pending"
  />
  
      </div>
      <div className="w-full h-48">.</div>
    </div>
  );
}

export default App;
