import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center md:mx-20">
      <Image
        src={"/blob-haikei.png"}
        width={750}
        height={500}
        alt="blob"
        className="flex-shrink-0"
      />
      <div className="flex flex-col">
        <div className="font-bold text-4xl">About Us</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          augue velit. Vestibulum rutrum bibendum nulla, et aliquet est iaculis
          sed. Mauris facilisis leo sed ornare placerat. Quisque ut magna nec
          justo imperdiet pulvinar. Aenean scelerisque sem quis odio malesuada,
          non imperdiet nibh malesuada. Fusce elementum accumsan tincidunt.
          Praesent ultrices fringilla tortor, ut porta tortor tincidunt sed.
          Aliquam semper ante sed elit pulvinar, a interdum orci consequat. In
          pretium cursus odio.
        </div>
      </div>
    </div>
  );
}
