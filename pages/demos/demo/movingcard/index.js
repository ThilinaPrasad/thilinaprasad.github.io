import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./Moving.module.css";

export default function MovingCard() {
  const MovingCard = () => {
    return (
      <div
        className={`card-container shadow-lg max-w-lg min-w-lg rounded-b-md rounded-t-md ${Styles.scrollBg} transform rotate-12`}
      >
        <div className="top-text p-8">
          <div className="icon-quotes">
            <svg
              width="45"
              height="36"
              class="mb-5 fill-current text-green-300"
            >
              <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
            </svg>
          </div>
          <div className="container-text max-w-lg">
            <p className="font-semibold text-gray-900 text-xl py-8">
              As seen on the tailwild <a href="tailwindcss.com">website</a>,
              this moving testimonial slider is an excellent example of modern
              UI that looks clean.
            </p>
          </div>
        </div>
        <div className="footer-container flex flex-row flex-nowrap justify-between min-w-lg max-w-lg bg-gradient-to-r from-green-400 to-blue-500 py-4 px-8 rounded-b-lg">
          <div className="avatar-container">
            <div className="footer-img flex flex-row flex-nowrap">
              <Image
                src="/avatar.jpg"
                height={60}
                width={60}
                className="border-2 rounded-full border-gray-200"
              />
              <div className="footer-text flex flex-col flex-nowrap">
                <p className="text-gray-100 font-bold ml-6">Manu Arora</p>
                <p className="text-gray-200 ml-6">Software Developer</p>
              </div>
            </div>
          </div>
          <div className="twitter-icon my-auto">
            <a href="https://twitter.com/mannupaaji">
              <svg
                width="33"
                height="32"
                fill="currentColor"
                className="text-gray-100"
              >
                <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  };

  //   const styleTransform = (x, z) => {
  //     return {
  //       transform: `translateX(${x}%)`,
  //       transform: `translateZ(${z}px)`,
  //     };
  //   };

  //   const styleRotate = (deg, z) => {
  //     return {
  //       transform: `rotate(${deg}deg)`,
  //       transform: `translateZ(${z}px)`,
  //     };
  //   };

  //   const tempStyle = {
  //     transform: "translateX(223.603%)",
  //     transform: "translateZ(0px)",
  //   };
  return (
    <div className="flex flex-none space-x-8 justify-center items-center h-screen">
      <div className="flex flex-none">
        <MovingCard />
      </div>
      <div className="flex flex-none">
        <MovingCard />
      </div>
      <div className="flex flex-none">
        <MovingCard rotateClass="rotate-12" />
      </div>
      <div className="flex flex-none">
        <MovingCard rotateClass="rotate-12" />
      </div>
      <div className="flex flex-none">
        <MovingCard rotateClass="rotate-12" />
      </div>
      <div className="flex flex-none">
        <MovingCard rotateClass="rotate-12" />
      </div>
      <div className="flex flex-none">
        <MovingCard rotateClass="rotate-12" />
      </div>
      <div className="flex flex-none">
        <MovingCard rotateClass="rotate-12" />
      </div>
    </div>
  );
}
