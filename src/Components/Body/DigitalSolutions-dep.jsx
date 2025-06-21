import { WindowIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function DigitalSolutions() {
  return (
    <div className=" h-auto">
      <div className="text-black">
        <div className=" pt-20 pb-10 ">
          <WindowIcon className=" mx-auto w-8 h-8 text-white" />
        </div>
        <h1 className="bg-slate-800 text-white text-4xl text-center pb-20 px-10">
          {" "}
          Web solutions
        </h1>
        <div className="bg-white flex flex-col justify-evenly items-center h-auto w-screen py-20 px-20">
          <div className=" container text-2xl  py-10 px-10 rounded flex flex-row justify-start items-center h-auto ">
            <div className="mr-20">
              <img
                className="rounded w-[65rem]"
                src="https://resumev1sa.blob.core.windows.net/treseledata/treseleweb/img/servicios/ecommerce-cooling.png"
              />
            </div>
            <div>
              <h1 className="text-3xl mb-5 bold">Ecommerce</h1>
              <p className="text-justify">
                We support you in developing a digital commerce environment that
                is user-friendly, attractive, and customizable. We use
                innovative and secure technologies that allow business owners to
                focus on what matters most—expanding their market. This
                ECOMMERCE solution includes setting up an online store and
                comprehensive support in sales and digital marketing.
              </p>
            </div>
          </div>
          <div className=" container text-2xl  py-10 px-10 rounded flex flex-row justify-start items-center h-auto ">
            <div className="mr-20">
              <img
                className="rounded w-[60rem]"
                src="https://resumev1sa.blob.core.windows.net/treseledata/treseleweb/img/servicios/we-cooling.png"
              />
            </div>
            <div>
              <h1 className="text-3xl mb-5 bold">Enterprise website</h1>
              <p className="text-justify">
                We support you in developing a B2B and B2C digital web
                environment that is user-friendly, attractive, and customizable.
                We use innovative and secure technologies to create a digital
                sales tool for your business. This BUSINESS WEB solution
                includes setting up a web system and comprehensive support in
                sales and digital marketing.{" "}
              </p>
            </div>
          </div>
          <div className="container text-2xl  py-10 px-10 rounded flex flex-row justify-start items-center h-auto ">
            <div className="mr-20">
              <img
                className="rounded w-[65rem]"
                src="https://resumev1sa.blob.core.windows.net/treseledata/treseleweb/img/servicios/landing-cooling.png"
              />
            </div>
            <div>
              <h1 className="text-3xl mb-5 bold">Landing page</h1>
              <p className="text-justify ">
                We support you in developing an easy-to-use, attractive digital
                marketing tool. We use effective and innovative design
                techniques to increase the likelihood of capturing leads for
                your business. This LANDING PAGE WEB solution includes the
                development of one or more lead-capturing pages, along with
                comprehensive support in sales and digital marketing.{" "}
              </p>
            </div>
          </div>
          <div className="container text-2xl  py-10 px-10 rounded flex flex-row justify-start items-center h-auto ">
            <div className="mr-20">
              <img
                className="rounded w-[67rem]"
                src="https://resumev1sa.blob.core.windows.net/treseledata/treseleweb/img/servicios/blog-cooling.png"
              />
            </div>
            <div>
              <h1 className="text-3xl mb-5">Marketing Blog</h1>
              <p className="text-justify">
                We support you in developing a digital marketing environment. We
                use innovative, user-friendly, and secure technologies that
                allow your marketing team to focus their efforts on generating
                content and capturing leads. This MARKETING BLOG solution
                includes setting up a content management system, along with
                comprehensive support in sales and digital marketing.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
