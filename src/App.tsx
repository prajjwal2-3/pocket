import Header from "./components/Header";
import {Infinitescrollbrand} from "./components/infinitescrollbrand";
import { SvgComponent } from "./components/image";
import Blackbutton from "./components/Blackbutton";
import Hero from "./components/Hero";
import CustomizedAccordions from "./components/Accordian";
function App() {
  return (
    <div className="h-auto bg-[rgb(22,22,24)] flex flex-col items-center">
      <Header />
      <Blackbutton/>
      <Hero/>
    <Infinitescrollbrand/>
      
<div className="w-full flex flex-row justify-around h-auto">
<div className="w-5/12">
<CustomizedAccordions/>
</div>
<div className="w-5/12  ">
<SvgComponent />
</div>
</div>
    </div>
  );
}

export default App;
