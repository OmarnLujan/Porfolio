import { FormEmail } from "@/components/FormEmail";
import Image from "next/image";
import gitLogo from "../../../public/git.svg";
import linkdLogo from "../../../public/link.svg";
import Link from "next/link";

export default function Contacto() {
  return (
    <div className="flex justify-center items-center ">
      <div className=" w-1/2 justify-center items-center 	rounded-lg text-center mb-auto bg-neutral-800">
        <FormEmail />
      </div>

      <div className="flex flex-col justify-center items-center absolute inset-x-0 bottom-0 h-16 ">
        <div className="flex justify-center items-center 	rounded-t-lg text-center mb-auto bg-orange-100">
          <a href="https://github.com/OmarnLujan">
            <Image src={gitLogo} alt="git" className="w-24 h-24 p-4" />
          </a>
          <a href="https://www.linkedin.com/in/omar-nazareno-lujan-8b09b0268/">
            <Image src={linkdLogo} alt="linkd" className="w-24 h-24  p-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
