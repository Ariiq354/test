import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

export default function Carousel() {
  return (
    <div className="min-h-screen flex items-center bg-second">
      <MaxWidthWrapper className="flex flex-col gap-12">
        <div className="flex flex-col">
          <div className="text-first text-xl">Services</div>
          <div className="font-bold text-4xl">Provided Services</div>
        </div>
        <div className="grid grid-cols-3 gap-14">
          <div className="bg-white flex flex-col gap-4 px-8 py-16 rounded-2xl items-center">
            <div className="bg-second rounded-full w-20 h-20" />
            <div className="text-first text-2xl font-bold text-center">
              Web Development
            </div>
            <div className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              augue velit.
            </div>
          </div>
          <div className="bg-white flex flex-col gap-4 px-8 py-16 rounded-3xl items-center">
            <div className="bg-second rounded-full w-20 h-20" />
            <div className="text-first text-2xl font-bold text-center">
              IT Courses
            </div>
            <div className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              augue velit.
            </div>
          </div>
          <div className="bg-white flex flex-col gap-4 px-8 py-16 rounded-3xl items-center">
            <div className="bg-second rounded-full w-20 h-20" />
            <div className="text-first text-2xl font-bold text-center">
              Research
            </div>
            <div className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              augue velit.
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button className="bg-first hover:bg-first/50 rounded-full px-12">
            More Details
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
