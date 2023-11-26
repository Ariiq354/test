import { ChevronRight, User } from "lucide-react";
import { Button } from "./ui/button";

export default function Testimony() {
  return (
    <div className="min-h-screen bg-[#C6D7E8]">
      <div className="container py-12 flex flex-col gap-12">
        <div className="flex flex-col">
          <div className="text-[#326BA4] font-bold text-6xl">Testimonials</div>
          <div className="flex justify-between">
            <div className="flex-1 text-xl">
              SEE WHAT OUR CUSTOMERS <br /> THINK ABOUT US
            </div>
            <div className="flex-1 text-right text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              provident optio quibusdam quisquam quas distinctio pariatur
              maiores dignissimos, et a odit recusandae fugiat reprehenderit,
              accusamus at asperiores? Corporis, aperiam tenetur?
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col bg-[#DFE6EC] rounded-md p-8 gap-4 border-b-8 border-[#326BA4] shadow-2xl ">
            <div className="text-[#326BA4] text-2xl font-bold">
              &quot;LOREM UPSUM SI AMET&quot;
            </div>
            <div className="text-justify text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis ab nostrum minus repudiandae, libero, voluptates
              dicta ullam magni atque laborum consequuntur dolorem voluptatibus
              cumque enim totam porro inventore numquam architecto!
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-white p-2">
                <User />
              </div>
              <div className="flex items-center">Kaede Nakamura</div>
            </div>
          </div>
          <div className="flex flex-col bg-[#DFE6EC] rounded-md p-8 gap-4 border-b-8 border-[#326BA4] shadow-2xl">
            <div className="text-[#326BA4] text-2xl font-bold">
              &quot;LOREM UPSUM SI AMET&quot;
            </div>
            <div className="text-justify text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis ab nostrum minus repudiandae, libero, voluptates
              dicta ullam magni atque laborum consequuntur dolorem voluptatibus
              cumque enim totam porro inventore numquam architecto!
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-white p-2">
                <User />
              </div>
              <div className="flex items-center">Kaede Nakamura</div>
            </div>
          </div>
          <div className="flex flex-col bg-[#DFE6EC] rounded-md p-8 gap-4 border-b-8 border-[#326BA4] shadow-2xl">
            <div className="text-[#326BA4] text-2xl font-bold">
              &quot;LOREM UPSUM SI AMET&quot;
            </div>
            <div className="text-justify text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis ab nostrum minus repudiandae, libero, voluptates
              dicta ullam magni atque laborum consequuntur dolorem voluptatibus
              cumque enim totam porro inventore numquam architecto!
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-white p-2">
                <User />
              </div>
              <div className="flex items-center">Kaede Nakamura</div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Button className="bg-[#326BA4] hover:bg-[#326BA4]/50 flex justify-between">
            <div>Read More</div>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
