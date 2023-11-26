import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="h-screen flex flex-row">
      <div className="flex-[65] bg-first px-12 py-20">
        <div className="flex flex-col gap-4">
          <div className="text-7xl text-white">Our Projects</div>
          <div className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            excepturi distinctio repellendus velit veritatis hic quasi nobis
            iure quia a accusamus, voluptate natus omnis necessitatibus nostrum
            obcaecati maiores temporibus consectetur. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Quo deleniti alias tempora
            assumenda accusamus modi voluptatum obcaecati, illum culpa maxime
            corrupti quibusdam distinctio aliquid maiores, similique nihil vel
            libero minima.
          </div>
          <div>
            <Button className="bg-second hover:bg-second/50 text-first flex justify-between">
              <div>Read More</div>
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-[127]">
        <div className="px-32  h-full">
          <div className="flex-col flex gap-8 justify-center h-full ">
            <div className="flex gap-4">
              <div className="bg-first px-8 py-6 rounded-md text-xl text-white text-center h-fit">
                01 <br /> Aug
              </div>
              <div className="flex-shrink-0 rounded-md">
                <Image
                  src={"/project1.jpeg"}
                  alt="project1"
                  width={125}
                  height={500}
                  className="rounded-md "
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-first text-2xl font-semibold">
                  LOREM IPSUM SI AMET
                </div>
                <div className="flex flex-1 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima repellat, perspiciatis similique ipsam illo ipsum eum
                  quam at, id provident aspernatur eaque numquam quidem sunt
                  veniam soluta hic. Autem, minima?
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-first px-8 py-6 rounded-md text-xl text-white text-center h-fit">
                01 <br /> Aug
              </div>
              <div className="flex-shrink-0 rounded-md">
                <Image
                  src={"/project2.jpeg"}
                  alt="project1"
                  width={125}
                  height={500}
                  className="rounded-md "
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-first text-2xl font-semibold">
                  LOREM IPSUM SI AMET
                </div>
                <div className="flex flex-1 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima repellat, perspiciatis similique ipsam illo ipsum eum
                  quam at, id provident aspernatur eaque numquam quidem sunt
                  veniam soluta hic. Autem, minima?
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-first px-8 py-6 rounded-md text-xl text-white text-center h-fit">
                01 <br /> Aug
              </div>
              <div className="flex-shrink-0 rounded-md">
                <Image
                  src={"/project3.jpeg"}
                  alt="project1"
                  width={125}
                  height={500}
                  className="rounded-md "
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-first text-2xl font-semibold">
                  LOREM IPSUM SI AMET
                </div>
                <div className="flex flex-1 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima repellat, perspiciatis similique ipsam illo ipsum eum
                  quam at, id provident aspernatur eaque numquam quidem sunt
                  veniam soluta hic. Autem, minima?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
