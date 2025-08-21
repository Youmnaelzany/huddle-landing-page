import Image from "next/image";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <>
      <header className="py-8">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={19}
          className="lg:w-[200px]"
        />
      </header>
      <main className="flex flex-col items-center justify-center gap-10 lg:gap-6">
        {/* Header */}
        <section className="flex flex-col items-center justify-center gap-14 pt-16 md:gap-10 lg:flex-row lg:justify-between lg:gap-14 lg:pt-[6.5rem]">
          {/* Image */}
          <div className="">
            <Image
              src="/illustration-mockups.svg"
              alt="Illustration Mockups"
              width={709}
              height={506}
            />
          </div>
          {/* Text */}
          <div className="flex max-w-2xs flex-col items-center justify-center gap-6 text-center md:max-w-lg lg:items-start lg:text-left">
            <h1 className="font-[poppins] text-2xl leading-[125%] font-semibold text-white md:text-[2.5rem]">
              Build The Community Your Fans Will Love
            </h1>
            <p className="font-[openSans] text-base leading-[150%] font-semibold text-white md:text-lg">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button
              type="button"
              className="rounded-full bg-white font-[poppins] text-xs leading-[150%] font-normal text-[#684BB1] transition-colors duration-300 ease-in-out hover:bg-[#E880E8] hover:text-white md:text-lg"
              size={"lg"}
            >
              Register
            </Button>
          </div>
        </section>
        <section className="flex items-center gap-4 lg:self-end">
          <div className="group flex size-10 items-center justify-center rounded-full border border-white p-1 hover:border-[#E880E8]">
            <FaFacebookF className="cursor-pointer text-white transition-colors duration-300 ease-in-out group-hover:text-[#E880E8]" />
          </div>
          <div className="group flex size-10 items-center justify-center rounded-full border border-white p-1 hover:border-[#E880E8]">
            <FaXTwitter className="cursor-pointer text-white transition-colors duration-300 ease-in-out group-hover:text-[#E880E8]" />
          </div>
          <div className="group flex size-10 items-center justify-center rounded-full border border-white p-1 hover:border-[#E880E8]">
            <FaInstagram className="cursor-pointer text-white transition-colors duration-300 ease-in-out group-hover:text-[#E880E8]" />
          </div>
        </section>
      </main>
    </>
  );
}
