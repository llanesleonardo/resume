import { AtSymbolIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function EmailServices() {
  return (
    <div className="bg-white">
      <div className="container text-slate-800 text-center mx-auto px-5 md:px-20 py-20  rounded ">
      <div className="pb-10 "><AtSymbolIcon className="mx-auto w-8 h-8 text-slate-800" /></div>

        <h1 className="text-2xl md:text-4xl mb-3">
          Supercharge Your Email Outreach with Our Comprehensive Mass Email
          Service!
        </h1>
        <div className="comntainer mx-auto">
          <p className="py-3 text-xl md:text-2xl">
            Are you looking to connect with your customers and leads more
            effectively? Our Mass Email Service offers a seamless, high-quality
            approach to ensure that your email campaigns reach the right
            audience every time.
          </p>
          <p className="py-3 text-xl md:text-2xl">
            From organizing and cleaning your email lists to validating
            addresses and sending personalized messages, we handle it all with
            cutting-edge tools—including powerful OSINT technology.
          </p>
          <p className="py-3 text-xl md:text-2xl">
            Our service is built on top-tier tools, including OSINT (Open Source
            Intelligence), which enables us to gather critical, legally sourced
            insights on contacts and leads. This approach allows for smarter
            segmentation and more targeted outreach, helping you reach the right
            people with the right message at the right time.
          </p>
        </div>
      </div>
    </div>
  );
}
