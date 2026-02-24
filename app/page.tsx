"use client";

import { BlogCard } from "./components/CostumeCard";

export default function Home() {
  const images = [
    "/aaron-burden.jpg",
    "/british-library.jpg",
    "/europeana.jpg",
    "/priscilla-du-preez.jpg",
    "/stephanie-leblanc.jpg",
  ];
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <div className="pt-5 columns-1 md:columns-1 lg:columns-2 gap-x-5">
          {images.map((image: string, index: number) => {
            return <BlogCard key={index} src={image}></BlogCard>;
          })}
        </div>
      </main>
    </>
  );
}
