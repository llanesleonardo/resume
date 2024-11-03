import { CheckBadgeIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function SocialMedia() {
  return (
    <div>
      <div className="container text-white text-center mx-auto px-20 py-20  rounded ">
        <div className='pb-10 '>
          <GlobeAmericasIcon className=" mx-auto w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl mb-3">Unlock the Power of Social Media for Your Business</h1>
        <div className="container mx-auto">
          <p className="py-3 text-2xl">
          In Today’s digital age, your brand’s success is tied to how well it connects with audiences online. We make sure your social media isn’t just a presence but a powerful extension of your brand, dynamic space where customers feel valued and motivated to interact.
          </p>
          <p className="py-3 text-2xl">
          We take care of the full social media journey, attractive, and effective content that resonates with your target audience.
          </p>
        </div>
        <div className='text-justify mt-20'>
            <ul>
                <li className='my-5 text-slate-800 bg-white rounded py-5 px-10'>
                    <h2 className='text-3xl mb-3'>Social Media Creation & Setup</h2>
                    <p className='text-2xl'>Whether you’re starting fresh or looking to revamp your existing accounts, we set up and configure your social media profiles on Facebook, Instagram, and LinkedIn for maximum reach, discoverability, and appeal. Our experts make sure your accounts are optimized to attract the right audience from the get-go.</p>
                </li>
                <li className='my-5 text-slate-800 bg-white rounded py-5 px-10'>
                    <h2 className='text-3xl mb-3'>Content Management & Strategy</h2>
                    <p className='text-2xl'>We do more than just post; we build a content strategy tailored to your brand’s unique goals. Our team handles everything from posting schedules to community engagement, keeping your audience connected and your brand top of mind.</p>
                </li>
                <li className='my-5 text-slate-800 bg-white rounded py-5 px-10'>
                    <h2 className='text-3xl mb-3'>Graphic Design</h2>
                    <p className='text-2xl'>Visuals make the first impression, and we make sure it’s an outstanding one. Our designers create stunning graphics that capture attention, reinforce your brand identity, and get people talking.
                    </p>
                </li>
                <li className='my-5 text-slate-800 bg-white rounded py-5 px-10'>
                    <h2 className='text-3xl mb-3'>Professional Photography                    </h2>
                    <p className='text-2xl'>
                    High-quality images elevate any social media profile. Our photography services ensure your products, team, and events are captured with a professional eye, showing your business in the best possible light.
                    </p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}








