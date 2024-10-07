"use client";

import Image from "next/image";

const images = [
  {
    image: "/assets/gallery/images/image1.jpg",
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
