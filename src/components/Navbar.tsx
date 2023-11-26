import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Navbar() {
  return (
    <div className="h-20 bg-third z-30 shadow-lg w-full fixed">
      <MaxWidthWrapper className="h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex justify-center items-center">
            <Image src={"/Logo.png"} width={53} height={53} alt="logo" />
          </div>
          <div className="flex gap-8">
            <div>About</div>
            <div>Service</div>
            <div>Project</div>
            <div>Testimonies</div>
            <div>Contact</div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
