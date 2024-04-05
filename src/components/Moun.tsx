

const Moun = () => {
  return (
    <div className="relative w-full my-20 ">
      <div className="bg-gradient-to-b  from-[rgb(22,22,24)] to-transparent absolute  w-full h-[30rem] z-10"></div>
      <img className=" object-cover object-center w-full h-[30rem] absolute"  src="https://framerusercontent.com/images/nxT02XSEg6U0ivCS5ojfouAZTk.png?scale-down-to=2048" alt="" />
       <div className="absolute z-20 w-full  flex flex-col items-center  text-center">
        <div className="text-yellow-400 w-7/12 mt-16 font-serif text-[4rem] font-bold ">
        Siloed legal solutions slow you down and create risks
        </div>
        <div className="text-center text-white/80 my-5 font-semibold sm:text-xl w-6/12">
        When you use different solutions for your legal work you create organizational drag and introduce unnecessary risk with lack of visibility.
        </div>
        <div className="">
        <button className="bg-yellow-400 hover:bg-yellow-400/80 px-4 py-2 rounded-full mt-6">Get a demo</button>
        </div>
       </div>
      
    </div>
  )
}

export default Moun
