import Image from "next/image";
import Link from "next/link";
import gitLogo from "../../public/git.svg";
import linkdLogo from "../../public/link.svg";

export default function Home() {
  return (
    <div>
      <div className="m-40 flex flex-col justify-center relative items-center text-center">
        <h3 className=" justify-center items-center text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quide
          optio. Eius inventore iure minima possimus.
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center absolute inset-x-0 bottom-0 h-16 ">
        <div className="flex justify-center items-center 	rounded-t-lg text-center mb-auto bg-orange-100">
          <a href="https://github.com/OmarnLujan"><Image src={gitLogo} alt="git" className="w-24 h-24 p-4" /></a>
          <a href="https://www.linkedin.com/in/omar-nazareno-lujan-8b09b0268/"><Image src={linkdLogo} alt="linkd" className="w-24 h-24  p-4" /></a>
        </div>
      </div>
    </div>
  );
}
