import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-8 py-12 bg-[url('/indo.jpeg')] bg-cover text-white">
      <div className="text-4xl font-bold">Contact Us</div>
      <Input
        placeholder="Name"
        className={cn(
          "max-w-lg bg-transparent border-t-0 border-x-0 rounded-none border-b-2 border-white placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
        )}
      />
      <Input
        placeholder="Email"
        className="max-w-lg bg-transparent border-t-0 border-x-0 rounded-none border-b-2 border-white placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Textarea
        placeholder="Message"
        rows={5}
        className="max-w-lg bg-transparent rounded-none border-2 border-white placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
}
