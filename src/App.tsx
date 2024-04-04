import Header from "./components/Header";
import {Infinitescrollbrand} from "./components/infinitescrollbrand";
import { SvgComponent } from "./components/image";
import { SvgComponent2 } from "./components/image2";
import { SvgComponent3 } from "./components/image3";
import { SvgComponent5 } from "./components/image5";
import { SvgComponent4 } from "./components/image4";
import { SvgComponent6 } from "./components/image6";
import Blackbutton from "./components/Blackbutton";
import Hero from "./components/Hero";
import CustomizedAccordions from "./components/Accordian";
import Para from "./components/Para";
function App() {
  return (
    <div className="h-auto bg-[rgb(22,22,24)] flex flex-col items-center">
      <Header />
      <Blackbutton/>
      <Hero/>
      <Infinitescrollbrand/>
      <Para/>
<div className="w-full flex flex-row justify-around h-auto">
<div className="sm:w-5/12 w-11/12">
<CustomizedAccordions/>
</div>
<div className="w-5/12  sm:block hidden ">
<SvgComponent6 />
</div>
</div>
    </div>
  );
}

export default App;
