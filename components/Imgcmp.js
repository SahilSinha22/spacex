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
    <div className="mx-4 md:mx-8 xl:mx-36 grid  mb-10 items-center   justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      <div className="hover:bg-zinc-800 imgco  xl:h-44 2xl:max-h-52 xl:w-full 2xl:h-52 lg:h-48 lg:max-h-44 bg-black  h-44 px-6  rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2  flex flex-row justify-between">
          <div className="2xl:text-lg 2xl:pt-2">01</div>
          <div className="opacity-0 ">
            <Image
              className=" rounded-full  2xl:w-14 2xl:h-14"
              src={mobi}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>
      


            <h2 className="text-xl text-zinc-500  font-poppins xl:text-2xl ">
              Blockchain
            </h2>
            <p className="text-zinc-500 2xl:text-xl ">
              Our team is experienced <br />
              with various
            </p>
         

          <div className="text-blue-300 cursor-pointer relative right-1 bottom-7">
          <Image
            className="absolute lg:-right-4 xl:-bottom-6 2xl:-bottom-10  xl:-right-4  2xl:-right-2  2xl:w-6 2xl:h-6 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
        
      </div>

      <div className="hover:bg-zinc-800 imgco xl:w-full xl:h-44 2xl:max-h-52 2xl:h-52  lg:h-48 lg:max-h-44 bg-black   h-44 px-6 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="2xl:text-lg 2xl:pt-2">02</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full 2xl:w-14 2xl:h-14"
              src={mobi2}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">AR/VR</h2>
        <p className="text-zinc-500 2xl:text-xl">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative  bottom-7">
          <Image
            className="absolute lg:-right-3 xl:-bottom-6 2xl:-bottom-10  xl:-right-4  2xl:-right-2  2xl:w-6 2xl:h-6 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco xl:w-full xl:h-44 2xl:max-h-52 2xl:h-52 lg:h-48 lg:max-h-44 bg-black   h-44 px-6 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="2xl:text-lg 2xl:pt-2">03</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full 2xl:w-14 2xl:h-14"
              src={mobi3}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">Metaverse</h2>
        <p className="text-zinc-500 2xl:text-xl">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-1 bottom-7">
          <Image
            className="absolute lg:-right-4 xl:-bottom-6 2xl:-bottom-10  xl:-right-4  2xl:-right-2  2xl:w-6 2xl:h-6 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco xl:w-full xl:h-44 2xl:max-h-52 2xl:h-52 lg:h-48 lg:max-h-44 bg-black px-6   h-44 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="2xl:text-lg 2xl:pt-2">04</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full 2xl:w-14 2xl:h-14"
              src={mobi4}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">IOT</h2>
        <p className="text-zinc-500 2xl:text-xl">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7">
          <Image
            className="absolute lg:-right-4 xl:-bottom-6 2xl:-bottom-10  xl:-right-4  2xl:-right-2  2xl:w-6 2xl:h-6 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco xl:w-full xl:h-44 2xl:max-h-52 2xl:h-52 lg:h-48 lg:max-h-44 bg-black px-6   h-44 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="2xl:text-lg 2xl:pt-2">05</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full 2xl:w-14 2xl:h-14 "
              src={mobi5}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">NFT</h2>
        <p className="text-zinc-500 2xl:text-xl">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7">
          <Image
            className="absolute xl:-bottom-6 2xl:-bottom-10  lg:-right-4 xl:-right-4  2xl:-right-2  2xl:w-6 2xl:h-6 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco xl:w-full xl:h-44 2xl:max-h-52 2xl:h-52 lg:h-48 lg:max-h-44 bg-black px-6   h-44 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="2xl:text-lg 2xl:pt-2">06</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full 2xl:w-14 2xl:h-14"
              src={mobi6}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">AI Development</h2>
        <p className="text-zinc-500 2xl:text-xl">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7">
          <Image
            className="absolute lg:-right-4 xl:-bottom-6 2xl:-bottom-10  xl:-right-4  2xl:-right-2  2xl:w-6 2xl:h-6 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco xl:w-full xl:h-44 2xl:max-h-52 2xl:h-52 lg:h-48 lg:max-h-44 bg-black px-6   h-44 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="2xl:text-lg 2xl:pt-2">07</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full 2xl:w-14 2xl:h-14"
              src="7imgcmp.svg"
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">Android</h2>
        <p className="text-zinc-500 2xl:text-xl">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7">
          <Image
            className="absolute lg:-right-4 xl:-bottom-6 2xl:-bottom-10  xl:-right-4  2xl:-right-2  2xl:w-6 2xl:h-6 right-2"
            src={Arrow}
            alt="Arrow"
            width={20}
            height={5}
          />
        </div>
      </div>

      <div className="hover:bg-zinc-800 imgco xl:w-full xl:h-44 2xl:max-h-52 2xl:h-52 lg:h-48 lg:max-h-44 bg-black px-6   h-44 rounded-xl space-y-2">
        <div className="text-zinc-400 mt-2 flex flex-row justify-between">
          <div className="2xl:text-lg 2xl:pt-2">08</div>
          <div className=" opacity-0 hover:opacity-100">
            <Image
              className="rounded-full 2xl:w-14 2xl:h-14"
              src={mobi8}
              alt="icon"
              width={50}
              height={50}
            />{" "}
          </div>
        </div>

        <h2 className="text-xl text-zinc-500 xl:text-2xl">iOS</h2>
        <p className="text-zinc-500 2xl:text-xl">
          Our team is experienced <br />
          with various
        </p>
        <div className="text-blue-300 cursor-pointer relative right-2 bottom-7">
          <Image
            className="absolute lg:-right-4 xl:-bottom-6 2xl:-bottom-10  xl:-right-4  2xl:-right-2  2xl:w-6 2xl:h-6   right-2"
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
