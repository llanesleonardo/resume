import React from "react";
import { ArrowTrendingUpIcon, BriefcaseIcon, ChatBubbleLeftEllipsisIcon, CubeIcon, HomeIcon, PuzzlePieceIcon, RectangleGroupIcon, RocketLaunchIcon, SparklesIcon, UserCircleIcon } from '@heroicons/react/24/outline';


export default function ConsultingServices() {
  return (

    <div className=" h-auto">
      <div className="text-white py-20 ">
      <div className="pb-10 ">
          <BriefcaseIcon className=" mx-auto w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl text-center mb-10">Consulting services</h1>
        <p className="text-2xl text-center bg-white text-slate-800 rounded mb-10 py-5 px-5 container mx-auto">
          What is your goal today?
        </p>
        <div className="flex flex-col md:flex-row justify-evenly items-center h-auto w-screen px-20">
          <div className="text-2xl  py-1 px-1  md:py-5 md:px-5rounded  ">
            <ul >
              <li className="my-3 flex flex-row justify-start items-center gap-5">
              <CubeIcon className="w-8 h-8 text-white" /> 
                Strategy
                </li>
              <li className="my-3 flex flex-row justify-start items-center gap-5"> <RectangleGroupIcon className="w-8 h-8 text-white" /> Operations</li>
              <li className="my-3 flex flex-row justify-start items-center gap-5"> <ChatBubbleLeftEllipsisIcon className="w-8 h-8 text-white" /> Marketing</li>
              <li className="my-3 flex flex-row justify-start items-center gap-5"> <ArrowTrendingUpIcon className="w-8 h-8 text-white" /> Sales</li>
            </ul>
          </div>
          <div className="text-2xl  py-1 px-1  md:py-5 md:px-5  rounded"> 
            <ul>
            <li className="my-3 flex flex-row justify-start items-center gap-5"> <PuzzlePieceIcon className="w-8 h-8 text-white" /> Service design</li>
              <li className="my-3 flex flex-row justify-start items-center gap-5"> <RocketLaunchIcon className="w-8 h-8 text-white" /> Technology</li>
              <li className="my-3 flex flex-row justify-start items-center gap-5"> <UserCircleIcon className="w-8 h-8 text-white" /> Human resources</li>

              <li className="my-3 flex flex-row justify-start items-center gap-5"> <SparklesIcon className="w-8 h-8 text-white" /> Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
