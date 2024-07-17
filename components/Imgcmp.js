import React from "react";
import Image from "next/image";
import Arrow from "@/public/arrow.svg";
import mobi from "@/public/1imgcmp.png";
import mobi2 from "@/public/2imgcmp.png";
import mobi3 from "@/public/3imgcmp.png";
import mobi4 from "@/public/4imgcmp.png";
import mobi5 from "@/public/5imgcmp.png";
import mobi6 from "@/public/6imgcmp.png";
import mobi8 from "@/public/8imgcmp.png";
const Imgcmp = () => {
  return (
    <div className="mx-4 md:mx-8 xl:mx-36 grid  mb-10 items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      <div className="hover:bg-zinc-800 imgco xl:h-44  lg:h-48  bg-black  2xl:w-72 h-44 px-6  rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2  flex flex-row justify-between">
          <div className="">01</div>
          <div className="opacity-0 ">
            <Image
              className=" rounded-full"
              src={mobi}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 font-poppins xl:text-2xl ">
          Blockchain
        </h2>
        <p className="text-zinc-500 ">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7  items-right">
          <Image
            className="absolute lg:right-1 xl:-bottom-6 xl:-right-4 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco  xl:h-44 lg:h-48  bg-black  2xl:w-72 h-44 px-6 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="">02</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full"
              src={mobi2}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">AR/VR</h2>
        <p className="text-zinc-500">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative  bottom-7">
          <Image
            className="absolute xl:-bottom-6 xl:-right-4 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco  xl:h-44 lg:h-48  bg-black  2xl:w-72 h-44 px-6 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="">03</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full"
              src={mobi3}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">Metaverse</h2>
        <p className="text-zinc-500">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-1 bottom-7">
          <Image
            className="absolute xl:-bottom-6 xl:-right-4 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco  xl:h-44 lg:h-48  bg-black px-6  2xl:w-72 h-44 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="">04</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full"
              src={mobi4}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">IOT</h2>
        <p className="text-zinc-500">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7">
          <Image
            className="absolute xl:-bottom-6 xl:-right-4 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco  xl:h-44 lg:h-48  bg-black px-6  2xl:w-72 h-44 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="">05</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full"
              src={mobi5}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">NFT</h2>
        <p className="text-zinc-500">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7">
          <Image
            className="absolute xl:-bottom-6 xl:-right-4 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco  xl:h-44 lg:h-48  bg-black px-6  2xl:w-72 h-44 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="">06</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full"
              src={mobi6}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">AI Development</h2>
        <p className="text-zinc-500">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7">
          <Image
            className="absolute xl:-bottom-6 xl:-right-4 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco  xl:h-44 lg:h-48  bg-black px-6  2xl:w-72 h-44 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="">07</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full"
              src="7imgcmp.svg"
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">Android</h2>
        <p className="text-zinc-500">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7">
          <Image
            className="absolute xl:-bottom-6 xl:-right-4 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco  xl:h-44 lg:h-48  bg-black px-6  2xl:w-72 h-44 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="">08</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full"
              src={mobi8}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">iOS</h2>
        <p className="text-zinc-500">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7">
          <Image
            className="absolute xl:-bottom-6 xl:-right-4 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Imgcmp;
