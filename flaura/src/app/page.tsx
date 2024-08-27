import Image from "next/image";
import BG from "./assets/BG.png"
import Demo from "./assets/Demo3.svg"
import Logo_Icon from "./assets/Logo_Icon.svg"
import ArrowUpRight from "./assets/arrow-up-right";
import sheet from "./assets/Futuristic Spreadsheet Interface.png"
import fai from "./assets/pfp/Fai.png"
import jedi from "./assets/pfp/Jedi.png"
import dev from "./assets/pfp/Dev.png"
import arm from "./assets/pfp/Arm.png"
import art from "./assets/pfp/Art.png"

export default function Home() {
  return (
    <div className="hero w-full bg-transaparent min-h-screen flex flex-col bg-cover bg-center -z-20 justify-start items-start">
      <div id="home" className="z-0 md:px-20 w-full flex sm:flex-row flex-col-reverse justify-end items-end lg:pt-[300px] pt-[150px] gap-5 lg:pb-[120px]">
        <div className="flex items-end flex-col">
          <h1 className="xl:text-9xl lg:text-8xl md:text-7xl text-5xl font-cera-pro font font-thin">Flaura.AI</h1>
          <div className="divider mt-0 text-"></div>
          <p className="lg:text-xl md:text-2xl font-thin text-xl text-end">Where the elegance of simplicity meets the power of AI. Transform your data experience with a beautiful, intuitive spreadsheet that’s as smart as it is stylish.</p>
          <div className="pt-5 flex gap-4">
            <div className="badge badge-success badge-lg py-4 px-4 font-cera-pro font-semibold text-lg text-black">Simplicity<ArrowUpRight className={`stroke-black`} /></div>
            <div className="badge badge-primary badge-lg py-4 px-4 font-cera-pro font-semibold text-lg text-white">Powerful<ArrowUpRight className={`stroke-white`} /></div>
            <div className="badge badge-primary badge-lg py-4 px-4 font-cera-pro font-semibold text-lg text-white bg-gradient-to-r from-black via-[#8b55ff] to-[#b7efe3] border-[#8b55ff]">AI Integrated<ArrowUpRight className="stroke-white" /></div>

          </div>
        </div>
        <div className="max-sm:grid max-sm:grid-cols-6">
        <Image className="z-0 w-[500px] col-span-3 col-start-4 animate-spin-slow" src={Logo_Icon} width={160} height={60} alt="Logo" />
        </div>
      </div>
      <div className="z-0 w-full flex flex-row px-[80px] justify-start items-center lg:pt-[300px] pt-[150px] gap-20 pb-[120px]">
        <div className="">
          <Image className="z-0 w-full" src={Demo} width={160} height={60} alt="Logo" />

        </div>
        <div id="product" className="bg-[#c2c2c2] bg-opacity-25 w-[1440px] border-[1px] border-[#acaaaa] lg:pb-10 lg:pt-16 py-8 lg:px-10 px-6 rounded-3xl flex flex-col gap-2">
          <h1 className="lg:text-5xl md:text-3xl text-2xl text-center font-thin">Our Product</h1>
          <p className="lg:text-xl md:text-base text-xs lg:leading-10">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Welcome to Flaura, the next-gen spreadsheet that transforms data management. Flaura combines a user-friendly interface with powerful AI for predictive insights and automation, making data handling effortless. Flaura is your smart partner in data management, helping you make informed decisions easily. Experience simplicity and sophistication with Flaura.</p>
          <button className="mt-2 btn btn-black bg-black border-black hover:bg-white hover:text-black hover:border-white text-2xl text-white">Learn More</button>
        </div>
      </div>
      <div id="team" className="z-0 w-full pb-[0px] flex flex-col px-[80px] justify-start pt-[200px] gap-20">
        <div className="">
        <h1 className="text-8xl text-center font-cera-pro font-thin">Our Team</h1>
        </div>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-4 backdrop-blur-md col-start-3 bg-[#c2c2c2] bg-opacity-25 border-[1px] border-[#acaaaa] py-10 px-10 rounded-3xl flex flex-col">
          <Image className="mb-2 z-0 mask mask-hexagon-2 w-full" src={fai} width={160} height={60} alt="Logo" />
          <h2 className="text-4xl">Jirawan Fai Makcharoensub</h2>
          <div className="divider bg-white h-[3px]"></div>
          <h2 className="text-3xl pb-2">Co-CEO & President</h2>
          <h2 className="text-2xl">Vice President of Design</h2>
        </div>
        <div className="col-span-4 backdrop-blur-md bg-[#c2c2c2] bg-opacity-25 border-[1px] border-[#acaaaa] py-10 px-10 rounded-3xl flex flex-col">
          <Image className="mb-2 z-0 mask mask-hexagon-2 w-full" src={jedi} width={160} height={60} alt="Logo" />
          <h2 className="text-4xl">Natakorn Jedi Wannabovorn</h2>
          <div className="divider bg-white h-[3px]"></div>
          <h2 className="text-3xl pb-2">Co-CEO & CTO</h2>
          <h2 className="text-2xl">Vice President of Technology and Development</h2>
        </div>
        <div className="col-span-4 backdrop-blur-md bg-[#c2c2c2] bg-opacity-25 border-[1px] border-[#acaaaa] py-10 px-10 rounded-3xl flex flex-col">
          <Image className="mb-2 z-0 mask mask-hexagon-2 w-full" src={dev} width={160} height={60} alt="Logo" />
          <h2 className="text-4xl">Nuttahapong Dev Sachthep</h2>
          <div className="divider bg-white h-[3px]"></div>
          <h2 className="text-3xl pb-2">CBO</h2>
          <h2 className="text-2xl">Vice President of Technology and Marketing and Business</h2>
        </div>
        <div className="col-span-4 backdrop-blur-md bg-[#c2c2c2] bg-opacity-25 border-[1px] border-[#acaaaa] py-10 px-10 rounded-3xl flex flex-col">
          <Image className="mb-2 z-0 mask mask-hexagon-2 w-full" src={arm} width={160} height={60} alt="Logo" />
          <h2 className="text-4xl">Patthadon Arm Aroonpairodjanakul</h2>
          <div className="divider bg-white h-[3px]"></div>
          <h2 className="text-3xl pb-2">CDO</h2>
          <h2 className="text-2xl">Vice President of Development and Engineering</h2>
        </div>
        <div className="col-span-4 backdrop-blur-md bg-[#c2c2c2] bg-opacity-25 border-[1px] border-[#acaaaa] py-10 px-10 rounded-3xl flex flex-col">
          <Image className="mb-2 z-0 mask mask-hexagon-2 w-full" src={art} width={160} height={60} alt="Logo" />
          <h2 className="text-4xl">Puttisan Art Korsettarat</h2>
          <div className="divider bg-white h-[3px]"></div>
          <h2 className="text-3xl pb-2">CRO</h2>
          <h2 className="text-2xl">Vice President of Research and Development</h2>
        </div>
        </div>
        
      </div>
      <div id="contact" className="z-0 w-full flex justify-start gap-20 pt-[80px] h-full">
        <div className="bg-[#c2c2c2] backdrop-blur-md rounded-t-3xl w-full bg-opacity-25 border-[1px] border-[#acaaaa] px-20 py-12 flex flex-col items-start gap-10">
        <h1 className="text-6xl text-center font-thin">Contact Us</h1>
        <p className="text-2xl">HARBOUR.SPACE@UTCC<br/>UNIVERSITY OF THE THAI CHAMBER OF COMMERCE
<br/>FLOOR 6 BUILDING 10<br/>
126/1 SOI VIBHAVADI 2 DINDAENG <br/>BANGKOK 10900</p>
        </div>
      </div>
    </div>
  );
}
