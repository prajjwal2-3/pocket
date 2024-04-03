import Header from "./components/Header";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SvgComponent } from "./components/image";
function App() {
  return (
    <div className="h-auto bg-[rgb(22,22,24)] flex flex-col items-center">
      <Header />
      <div className="mt-20 bg-[rgb(46,46,48)] rounded-3xl p-1  border border-white/20">
        <button className="text-white font-semibold p-1 flex ">
          <div className="">Watch our recorded AI Features webinar</div> 
          <div className=""></div>
          <div className="">
           <ArrowForwardIcon/>
            </div>
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
{/* <div className="w-8/12 m-2 text-center text-black font-semibold text-xl ">
       Power the best business and legal team.
      </div> */}
    </div>
   
    <div className="w-[80rem] h-[80rem] absolute mt-[20rem] blur-3xl bg-blue-500/20 rounded-full"></div>
    <img
    className="w-10/12  "
    src="https://framerusercontent.com/images/XYW9U89OkawwfrVLXPIaB6miUN0.svg?scale-down-to=1024"
    alt="pending"
  />
  
      </div>
      <div className="w-full text-center text-white/50 font-semibold text-xl z-10 mt-32 h-auto">
      Power the best business and legal team.
      </div>
      <div className="w-10/12 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img className="w-48 h-44"  src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160175/svgexport-10_mc4o8r.svg" alt="Facebook" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160175/svgexport-9_pnpgja.svg" alt="Disney" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160173/svgexport-11_ysrlon.svg" alt="Airbnb" />
        </li>
        {/* <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160173/svgexport-12_bgv5wt.svg" alt="Apple" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160173/svgexport-13_w3tdfy.svg" alt="Spark" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160171/svgexport-14_wijrye.svg" alt="Samsung" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160145/svgexport-15_momxul.svg" alt="Quora" />
        </li> */}
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160015/svgexport-8_n7zris.svg" alt="Sass" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712159898/svgexport-7_1_guroio.svg" alt="Sass" />
        </li>
    </ul>
    
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
    <li>
            <img className="w-48 h-44"  src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160175/svgexport-10_mc4o8r.svg" alt="Facebook" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160175/svgexport-9_pnpgja.svg" alt="Disney" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160173/svgexport-11_ysrlon.svg" alt="Airbnb" />
        </li>
        {/* <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160173/svgexport-12_bgv5wt.svg" alt="Apple" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160173/svgexport-13_w3tdfy.svg" alt="Spark" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160171/svgexport-14_wijrye.svg" alt="Samsung" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160145/svgexport-15_momxul.svg" alt="Quora" />
        </li> */}
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712160015/svgexport-8_n7zris.svg" alt="Sass" />
        </li>
        <li>
            <img className="w-48 h-48" src="https://res.cloudinary.com/dzkldv06d/image/upload/v1712159898/svgexport-7_1_guroio.svg" alt="Sass" />
        </li>
    </ul>
</div>
<div className="w-6/12 h-auto">
<SvgComponent />
</div>
    </div>
  );
}

export default App;
