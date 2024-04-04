import Header from "./components/Header";
import {Infinitescrollbrand} from "./components/infinitescrollbrand";
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
<div className="sm:w-full w-full sm:my-40 my-20 sm:mx-20">
<CustomizedAccordions/>
</div>

</div>
    </div>
  );
}

export default App;
