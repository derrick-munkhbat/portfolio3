"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-full h-full bg-">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* container */}
        <div className="relative w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]">
          {/* image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="absolute w-full h-full"
          >
            <Image
              src="/images/profile-1.jpg"
              priority
              quality={100}
              fill
              alt="profile-pic"
              sizes="(min-width: 100vw) 100vw, 100vw"
              className="object-cover brightness-90 rounded-full shadow-xl shadow-black"
            />
          </motion.div>

          {/* circle */}
          {/* <motion.svg
            className="absolute w-full h-full"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="black"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.circle>
          </motion.svg> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
