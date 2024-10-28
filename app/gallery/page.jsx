"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";


const imagePaths = [
  "/assets/gallery/image1.jpg",
  "/assets/gallery/image2.jpg",
  "/assets/gallery/image3.jpg",
  "/assets/gallery/image4.jpg",
  "/assets/gallery/image5.jpg",
  "/assets/gallery/image6.jpg",
  "/assets/gallery/image7.jpg",
  "/assets/gallery/image8.jpg",
  "/assets/gallery/image9.jpg",
  "/assets/gallery/image10.jpg",
  "/assets/gallery/image11.jpg",
  "/assets/gallery/image12.jpg",
  "/assets/gallery/image13.jpg",
  "/assets/gallery/image14.jpg",
];

const images = imagePaths.map((path) => ({ image: path }));

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
        <div className="flex flex-wrap xl:flex-nowrap xl:justify-start justify-center overflow-x-auto py-5 gap-5">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.image}
              alt={`Image ${index + 1}`}
              width={500}
              height={300}
              onClick={() => handleImageClick(image.image)}
              className="rounded-xl w-full h-full xl:w-[1280px] xl:h-[720px] aspect-video cursor-pointer hover:opacity-80"
            />
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleClose}
        >
          <Image
            src={selectedImage}
            alt="Selected Image"
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


