// components/mdxComponents.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold text-orange-700 mt-10 mb-4 " {...props} />
  ),
  h2: (props: any) => (
    <h2
      className="text-2xl font-semibold text-yellow-600 mt-8 mb-3 flex items-center justify-center "
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-medium text-orange-500 mt-6 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p
      className="text-sm sm:text-base leading-relaxed text-secondarytext mb-4"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="list-disc ml-6 mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal ml-6 mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => <li className="pl-1" {...props} />,
  a: (props: any) => (
    <Link
      className="text-blue-500 hover:underline hover:text-blue-700 transition"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-orange-800" {...props} />
  ),
  em: (props: any) => <em className="italic text-gray-400" {...props} />,

  img: (props: any) => {
    const isStatic = props.src.startsWith("/");

    if (isStatic) {
      return (
        <Image
          className="mx-auto my-6 rounded-xl"
          src={props.src}
          alt={props.alt || "Image"}
          width={600}
          height={500}
        />
      );
    }

    return <img {...props} className="mx-auto my-6 rounded-lg shadow-md" />;
  },
};
