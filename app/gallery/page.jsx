"use client";

import Image from "next/image";
import { useState } from "react";

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
    <section className="h-full flex flex-col px-4">
      <div className="container mx-auto bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <div className="flex xl:flex-nowrap flex-wrap overflow-x-auto py-5 gap-5 relative">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.image}
              alt="Image"
              width={500}
              height={500}
              onClick={() => handleImageClick(image.image)}
              className="border rounded-xl xl:w-[1280px] xl:h-[720px] cursor-pointer hover:opacity-80"
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
            alt="Image"
            width={1920}
            height={1080}
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
