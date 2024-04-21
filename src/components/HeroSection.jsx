import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";


function HeroSection() {
  return (
    <div className="flex flex-col items-center lg:mt-5">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-blue-500 to-green-900 text-transparent bg-clip-text">
          YuppyTech Build {" "}
        </span>
        tools for developers
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your YT app ideas to life 
        with our intuitove development tools. Get Started today and 
        turn your imagination into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation 
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay 
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-orange-400 mx-2 my-4" 
        >
          <source src={video1} type="video/mp4" />
          Sorry Page Loading
        </video>
        <video
          autoPlay 
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-orange-400 mx-2 my-4" 
        >
          <source src={video2} type="video/mp4" />
          Sorry Page Loading
        </video>
      </div>
    </div>
  )
}

export default HeroSection