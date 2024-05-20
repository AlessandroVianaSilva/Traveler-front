import React from "react";
import { MdLocationPin } from "react-icons/md";

const Hero = () => {
  return (
    <section
      className="mx-auto max-w-full px-6 lg:px-20 3xl:px-0 w-full relative flex items-center justify-center"
      id="inicio"
    >
      <div className="absolute h-full w-full bg-[#2f6a7f2f] top-0 bottom-0 z-10"></div>
      <video
        src={"/video.mp4"}
        muted
        loop
        className="absolute h-full w-full top-0 bottom-0 object-cover"
      ></video>

      {/* content */}
      <div className="w-full h-max pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto z-20 lg:pt-64 lg:pb-24">
        <div className="px-0 py-8 text-white">
          {/* <span className="uppercase text-[18px] font-[400]">
            Viaje para qualquer canto do mundo
          </span> */}
          <h2 className=" text-[44px] leading-tight md:text-[55px] md:Leading-[1.3] mb-4 font-bold; max-w-[777px]">
            Sua viagem no melhor lugar!
          </h2>
        </div>

        {/* form */}
        <div className="">
          <div className="text-center">
            <span className="bg-white text-gray-800 px-12 py-4 text-[16px] font-[400] rounded-l-xl rounded-r-xl">
              Procure por sua viagem
            </span>
          </div>

          <div className=" flex flex-col md:flex-row gap-6 px-8 py-10 md:px-12 bg-white rounded-xl">
            <div className="flex flex-col w-full xl:px-6">
              <label htmlFor="city" className="block text-gray-800 pb-2">
              Cidade origem:
              </label>
              <div className="flex items-center h-10 px-4 justify-center bg-gray-200 rounded-full w-full">
                <input
                  type="text"
                  placeholder="De"
                  className="bg-transparent border-none outline-none w-full text-[14px] font-[400]"
                />
                <MdLocationPin className="text-lg" />
              </div>
            </div>
            <div className="flex flex-col w-full xl:px-6">
              <label htmlFor="city" className="block text-gray-800 pb-2">
                Cidade destino:
              </label>
              <div className="flex items-center h-10 px-4 justify-center bg-gray-200 rounded-full w-full">
                <input
                  type="text"
                  placeholder="Para"
                  className="bg-transparent border-none outline-none w-full text-[14px] font-[400]"
                />
                <MdLocationPin className="text-lg" />
              </div>
            </div>
            <div className="flex flex-col w-full xl:px-6">
              <label htmlFor="date" className="block text-gray-800 pb-2">
                Selecione uma data:
              </label>
              <div className="flex items-center h-10 px-4 justify-center bg-gray-200 rounded-full w-full">
                <input
                  type="date"
                  className="bg-transparent border-none outline-none w-full text-[14px] font-[400]"
                />
              </div>
            </div>
            {/* <div className="flex flex-col w-full xl:px-6">
              <div className="flex items-center justify-between">
                <label htmlFor="price" className="block text-gray-800 pb-2">
                  {" "}
                  Preço
                </label>
                <h4>$5000</h4>
              </div>
              <div className="flex items-center justify-center h-10 px-4 bg-gray-200 rounded-full w-full">
                <input
                  type="range"
                  max={"5000"}
                  min={"1000"}
                  className="border-none outline-none w-full text-[14px] font-[400]"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
