import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-first text-white">
      <div className="container flex items-center justify-between py-12">
        <div className="flex gap-4">
          <Image src={"/logo 1.png"} width={53} height={53} alt="logo" />
          <div>
            PT. Anugrah Teknologi <br />
            Kecerdasan Buatan
          </div>
        </div>
        <div className="flex gap-4">
          <div>About</div>
          <div>Service</div>
          <div>Project</div>
          <div>Testimonies</div>
          <div>Contact</div>
        </div>
        <div className="flex gap-4">
          <Facebook />
          <Instagram />
          <Twitter />
          <Linkedin />
        </div>
      </div>
    </div>
  );
}
