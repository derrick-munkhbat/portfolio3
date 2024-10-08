"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    image: "/assets/gallery/images/image1.jpg",
  },
  {
    image: "/assets/gallery/images/image2.jpg",
  },
  {
    image: "/assets/gallery/images/image3.jpg",
  },
  {
    image: "/assets/gallery/images/image4.jpg",
  },
  {
    image: "/assets/gallery/images/image5.jpg",
  },
  {
    image: "/assets/gallery/images/image6.jpg",
  },
  {
    image: "/assets/gallery/images/image7.jpg",
  },
  {
    image: "/assets/gallery/images/image8.jpg",
  },
  {
    image: "/assets/gallery/images/image9.jpg",
  },
  {
    image: "/assets/gallery/images/image10.jpg",
  },
  {
    image: "/assets/gallery/images/image11.jpg",
  },
  {
    image: "/assets/gallery/images/image12.jpg",
  },
  {
    image: "/assets/gallery/images/image13.jpg",
  },
  {
    image: "/assets/gallery/images/image14.jpg",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full flex flex-col px-4"
    >
      <div className="container mx-auto bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <div className="relative">
          <div className=" flex flex-wrap xl:flex-nowrap xl:justify-start justify-center overflow-x-auto py-5 gap-5">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.image}
                alt="Image"
                width={500}
                height={500}
                onClick={() => handleImageClick(image.image)}
                className=" rounded-xl w-full h-full xl:w-[1280px] xl:h-[720px] cursor-pointer hover:opacity-80 "
              />
            ))}
          </div>
          <h2 className="fixed top-36 left-0 xl:absolute xl:top-10 xl:text-3xl font-bold text-center text-white opacity-50 dark flex justify-center items-center w-full">
            click to view full screen
          </h2>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center "
          onClick={handleClose}
        >
          <Image
            src={selectedImage}
            alt="Image"
            width={2560}
            height={1440}
            className="w-full max-h-full"
          />
        </div>
      )}
    </motion.section>
  );
};

export default Gallery;
