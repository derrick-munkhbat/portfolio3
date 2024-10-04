"use client";

import Image from "next/image";
// import ImageGallery from "./ImageGallery";

const images = [
  {
    image: "/images/image1.jpg",
    thumbnail: "/images/image1.jpg",
  },
  {
    image: "/images/image2.jpg",
    thumbnail: "/images/image2.jpg",
  },
  {
    image: "/images/image3.jpg",
    thumbnail: "/images/image3.jpg",
  },
  {
    image: "/images/image4.jpg",
    thumbnail: "/images/image4.jpg",
  },
  {
    image: "/images/image5.jpg",
    thumbnail: "/images/image5.jpg",
  },
  {
    image: "/images/image6.jpg",
    thumbnail: "/images/image6.jpg",
  },
  {
    image: "/images/image7.jpg",
    thumbnail: "/images/image7.jpg",
  },
  {
    image: "/images/image8.jpg",
    thumbnail: "/images/image8.jpg",
  },
  {
    image: "/images/image9.jpg",
    thumbnail: "/images/image9.jpg",
  },

  {
    image: "/images/image10.jpg",
    thumbnail: "/images/image10.jpg",
  },
  {
    image: "/images/image11.jpg",
    thumbnail: "/images/image11.jpg",
  },
  {
    image: "/images/image12.jpg",
    thumbnail: "/images/image12.jpg",
  },
  {
    image: "/images/image13.jpg",
    thumbnail: "/images/image13.jpg",
  },
  {
    image: "/images/image14.jpg",
    thumbnail: "/images/image14.jpg",
  },
];

const Gallery = () => {
  return (
    <section className="h-full flex flex-col px-4">
      <div className="container mx-auto bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <div className="images">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.image}
              alt="Image"
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
