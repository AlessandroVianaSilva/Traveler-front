import React from "react";
import { PACKAGES } from "./constant";
import Link from "next/link";
import Image from "next/image";
import { RiMapPinLine, RiTimeLine } from "react-icons/ri";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

const TravelPackages = () => {
  return (
    <section
      className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 py-16 xl:py-28 bg-gray-200"
      id="viagens"
    >
      <div className="mx-4">
        {/* <h4 className="text-[32px] leading-tight md:text-[36px] md:Leading-[1.3] mb-4 font-bold max-w-lg">de uma olhada nas viagens</h4> */}
        <h3 className="text-[32px] leading-tight md:text-[36px] md:Leading-[1.3] mb-4 font-bold max-w-lg">
          de uma olhada nas viagens
        </h3>
        <p className="max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius
          maxime unde recusandae asperiores dolores. Quaerat, temporibus culpa
          fugit modi earum possimus voluptatibus animi quod ipsa, laboriosam
          placeat, unde enim!
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-12">
        {PACKAGES.map((elem) => (
          <PackageItem
            key={elem.URL}
            URL={elem.URL}
            title={elem.title}
            location={elem.location}
            price={elem.price}
            des={elem.des}
            date={elem.data}
          />
        ))}
      </div>
      ;
    </section>
  );
};
type PackageItem = {
  URL: string;
  location: string;
  price: string;
  title: string;
  des: string;
  date: string;
};

const PackageItem = ({
  URL,
  title,
  location,
  price,
  des,
  date,
}: PackageItem) => {
  return (
    <div className="overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-200 group">
      <Link href={"/"} className="overflow-hidden relative ">
        <Image src={URL} height={366} width={640} alt="img" />
        <span className="bold-16 text-white bg-gray-800 absolute bottom-0 right-1/2 
        translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-gray-500">
          R$ {price}
        </span>
      </Link>
      <div className="bg-white p-4">
        <div className="capitalize text-[22px] font-[700]">
          <span>{title}</span>
          <div className="flex items-center gap-x-2 my-1">
            <RiMapPinLine className="text-gray-600" />
            <span className="text-[16px] font-[400] text-gray-600">{location}</span>
          </div>
        </div>
        <hr className="mt-3" />
        <p className="my-3">{des}</p>
        <hr className="mt-3" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex items-center justify-center gap-x-2 text-yellow-600">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarHalfFilled />
            </div>
            <span className="text-[16px] font-[700]">(222)</span>
          </div>
          <div className="flex items-center justify-start gap-2 text-gray-500">
            <RiTimeLine className="text-lg"/>
            <span className="text-[16px] font-[700]">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;
