"use client";

import Link from "next/link";
import Slider from "react-slick";
import { FEATURE } from "./constant";
import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const TopDestination = () => {

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 right-0 lg:-top-24 lg:right-4 z-10 ring-1 ring-slate-900/5 hover:bg-gray-400"
      >
        <RiArrowRightSLine />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 
        lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5 hover:bg-gray-400"
      >
        <RiArrowLeftSLine />
      </div>
    );
  };

  var settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 py-20 xl:py-32 bg-gray-200"
      id="viagens"
    >
      <div className="w-[90%] m-auto">
        <div className="mx-4">
          <h3 className="text-[32px] leading-tight md:text-[36px] md:Leading-[1.3] mb-4 font-bold max-w-lg">
            Top Destinos
          </h3>
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            deleniti totam magnam praesentium ratione eligendi perspiciatis
            delectus non adipisci voluptatum reiciendis aut suscipit, iure
            impedit error mollitia quidem architecto facilis!
          </p>
        </div>

        {/* container */}
        <div className="pt-10">
          <Slider {...settings}>
            {FEATURE.map((feature) => (
              <FeatureItem
                key={feature.URL}
                URL={feature.URL}
                title={feature.title}
                des={feature.des}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
type FeatureItem = {
  title: string;
  URL: string;
  des: string;
};

const FeatureItem = ({ title, URL, des }: FeatureItem) => {
  return (
    <div className="mx-4 overflow-hidden group">
      <Link href="/" className="overflow-hidden relative">
        <div>
          <Image
            src={URL}
            alt="img"
            height={600}
            width={510}
            className="hover:scale-105 transition-all duration-700 overflow-hidden"
          />
        </div>
        <h4 className=" capitalize absolute text-[22px] font-[400] top-6 left-4 text-white">
          {title}
        </h4>
      </Link>
    </div>
  );
};

export default TopDestination;
