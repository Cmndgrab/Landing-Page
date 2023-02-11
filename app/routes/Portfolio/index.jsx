import { Link } from "@remix-run/react";

export default function Portfolio() {
    return (
        <main className="sm:flex bg-black">
  <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            <Link
    to="/"
    className="text-xl text-white-600 underline  sm:flex sm:items-center sm:justify-center grayscale transition hover:grayscale-0 focus:grayscale-0"
  >
    <img src="https://www.pngall.com/wp-content/uploads/2016/04/Home-Download-PNG.png" alt="homebutton"/>
  </Link>  
            <a href="https://www.linkedin.com/in/daniel-b-939078252/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linked in logo" className="grayscale transition hover:grayscale-0 focus:grayscale-0"/></a>
            </div>
          </div>
        <div className="relative min-h-screen bg-black sm:flex sm:items-center sm:justify-center">
            <a href="https://glittery-dasik-5b5ef6.netlify.app/">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://www.historytoday.com/sites/default/files/drac_misc.jpg"
                alt="Junji header"
              />

              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-orange-300 drop-shadow-md">
                  MADT
                </span>
              </h1>
              
             
             
            </div>
          </div>
        </div>
        
        </div>
        </a>
        <a href="https://six-weddings-and-a-seamonkey-frontend.onrender.com/">
        <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="data:image/jpeg;base64,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"
                alt="Junji header"
              />

              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-orange-300 drop-shadow-md">
                  Fodmap
                </span>
              </h1>
              
             
             
            </div>
          </div>
        </div>
        </div>
        </a>
        <a href="https://github.com/Cmndgrab">
        <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://prod-images.tcm.com/Master-Profile-Images/thewolfman1941.96098.jpg"
                alt="Junji header"
              />

              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-orange-300 drop-shadow-md">
                  Github
                </span>
              </h1>
              
             
             
            </div>
          </div>
        </div>
        </div>
        </a>
         
        
        
      
         
         </div> 
         
        </main>
    )}