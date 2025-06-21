import { CheckBadgeIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function OdooSolutions() {
  return (
    <div>
      <div className="container text-white text-center mx-auto px-20 py-20 rounded">
        <div className='pb-10'>
          <GlobeAmericasIcon className="mx-auto w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl mb-3">Unlock the Power of Odoo & Odoo.sh for Your Business</h1>
        <div className="container mx-auto">
          <p className="py-3 text-2xl">
            Streamline your operations, boost productivity, and scale your business with Odoo — the all-in-one business management software. Whether on-premise or in the cloud with Odoo.sh, we implement and customize Odoo to fit your unique needs.
          </p>
          <p className="py-3 text-2xl">
            Our implementation approach is structured, proven, and aligned with best practices to ensure your Odoo instance supports your business from Day 1.
          </p>
        </div>
        <div className='text-justify mt-20'>
          <ul>
            <li className='my-5 text-slate-800 bg-white rounded py-5 px-10'>
              <h2 className='text-3xl mb-3'>Odoo Standard Implementation Process</h2>
              <p className='text-2xl'>
                We follow the official Odoo implementation methodology: <strong>Analyze → Develop → Deploy → Support</strong>. This includes business process analysis, configuration, customization, data migration, training, and post-launch support — ensuring a smooth transition from your current system.
              </p>
            </li>
            <li className='my-5 text-slate-800 bg-white rounded py-5 px-10'>
              <h2 className='text-3xl mb-3'>Odoo.sh Deployment & DevOps</h2>
              <p className='text-2xl'>
                Odoo.sh enables seamless cloud hosting with built-in Git integration, automated staging environments, and backup management. We help you launch, manage, and maintain your Odoo system with CI/CD pipelines and DevOps best practices.
              </p>
            </li>
            <li className='my-5 text-slate-800 bg-white rounded py-5 px-10'>
              <h2 className='text-3xl mb-3'>Modular Apps & Custom Development</h2>
              <p className='text-2xl'>
                From CRM and Accounting to Inventory and eLearning, Odoo apps work together to form a unified solution. We configure out-of-the-box modules and develop custom features to match your operations, ensuring scalability and ROI.
              </p>
            </li>
            <li className='my-5 text-slate-800 bg-white rounded py-5 px-10'>
              <h2 className='text-3xl mb-3'>Training & Ongoing Support</h2>
              <p className='text-2xl'>
                Empower your team with tailored training for administrators and users. Our post-implementation support includes performance tuning, error resolution, and system enhancements to help you make the most of your Odoo investment.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
