import { Link } from "@remix-run/react";



export default function Index() {
 
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://64.media.tumblr.com/98fdf3e66928c07526f352030fae78ae/d4ddb50d95791411-1a/s1280x1920/52bab0717e6571bfdf5481b8ba038f2d5c42e45a.jpg"
                alt="Junji headero"
              />

              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-red-500 drop-shadow-md">
                  CMNDGRAB
                </span>
              </h1>
              
             
             
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {[
              {
                src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
                alt: "Fly.io",
                href: "https://fly.io",
              },
              {
                src: "https://w7.pngwing.com/pngs/396/90/png-transparent-postgresql-database-logo-computer-icons-replication-software-developer-miscellaneous-blue-mammal.png",
                alt: "Elephan SQL",
                href: "https://www.elephantsql.com",
              },
              {
                src: "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
                alt: "React",
                href: "https://reactjs.org/",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
                alt: "Tailwind",
                href: "https://tailwindcss.com",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
                alt: "Cypress",
                href: "https://www.cypress.io",
              },
              {
                src: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
                alt: "Node",
                href: "https://mswjs.io",
              },
              {
                src: "https://cdn.iconscout.com/icon/free/png-512/javascript-2038874-1720087.png?f=avif&w=256",
                alt: "Javascript",
                href: "https://www.javascript.com/",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
                alt: "Testing Library",
                href: "https://testing-library.com",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/2048px-Python_icon_%28black_and_white%29.svg.png",
                alt: "Python",
                href: "https://prettier.io",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/1200px-Amazon_Lambda_architecture_logo.svg.png",
                alt: "AWS",
                href: "https://eslint.org",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
                alt: "TypeScript",
                href: "https://typescriptlang.org",
              },
            ].map((img) => (
              <a
                key={img.href}
                href={img.href}
                className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} className="object-contain" />
              </a>
            ))}
          </div>
          <div>
  <Link
    to="/Portfolio"
    
  >
    <img alt="portfolio icon" src="https://www.seekpng.com/png/full/154-1545314_portfolio-icon-sales.png" className="mx-auto max-w-10xl py-2 px-4 sm:px-6 lg:px-8 flex h-20 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0 mt-6 flex flex-wrap justify-center gap-8"></img>
  </Link>
</div>

        </div>
      </div>
      
    </main>
  );
}