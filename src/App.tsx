
import Header from "./components/Header"

function App() {
  

  return (
  <div className="h-auto bg-[rgb(22,22,24)] flex flex-col items-center">
    <Header/>
    <div className="mt-20 bg-[rgb(46,46,48)] rounded-3xl p-1 border border-white/20">
      <button className="text-white font-semibold p-1">Watch our recorded AI Features webinar -&gt;
</button>
    </div>
    <div className="w-8/12">
      <div className="text-[5rem] font-bold text-center font-serif text-white">The most powerful and intuitive legal platform</div>
      <div className=""></div>
    </div>
    <div className="">
      <img src="https://framerusercontent.com/images/XYW9U89OkawwfrVLXPIaB6miUN0.svg?scale-down-to=1024" alt="pending" />
    </div>
  </div>
  
  )
}

export default App
