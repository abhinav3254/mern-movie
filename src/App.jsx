import GsapFrom from "./gsap/GsapFrom"
import GsapFromTo from "./gsap/GsapFromTo"
import GsapStagger from "./gsap/GsapStagger"
import GsapTimeLine from "./gsap/GsapTimeLine"
import GsapTo from "./gsap/GsapTo"

const App = () => {

  return (
    <div>
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapTimeLine />
      <GsapStagger />
    </div>
  )
}

export default App