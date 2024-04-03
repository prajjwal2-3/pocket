

const Hero = () => {
  return (
    <div className="relative w-full h-auto flex flex-col    items-center">
    <div className="absolute  z-10 flex flex-col  items-center">
    <div className="sm:w-8/12   text-center flex flex-col justify-center items-center ">
        <div className="sm:text-[5rem] text-[2rem] m-2 font-bold text-center font-serif text-white">
          The most powerful and intuitive legal platform
        </div>
        <div className="sm:w-8/12 m-2 text-center text-white/70 font-semibold sm:text-xl">
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
{/* <div className="w-8/12 m-2 text-center text-black font-semibold text-xl ">
       Power the best business and legal team.
      </div> */}
    </div>
   
    <div className="sm:w-[80rem] sm:h-[80rem] w-[24rem] h-[24rem] absolute mt-[20rem] blur-3xl bg-blue-500/20 rounded-full"></div>
    <img
    className="w-full sm:w-10/12 sm:-mt-[4rem] mt-[6rem] "
    src="https://framerusercontent.com/images/XYW9U89OkawwfrVLXPIaB6miUN0.svg?scale-down-to=1024"
    alt="pending"
  />
  
      </div>
  )
}

export default Hero
