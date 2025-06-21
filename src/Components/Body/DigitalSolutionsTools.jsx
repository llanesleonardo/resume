import { WindowIcon } from "@heroicons/react/16/solid";
import React from "react";
import aspnetrazorimg from "../../assets/aspnet-featured.png";
// Placeholder logos — replace with your own assets or CDN links
const techLogos1 = [
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Razor Pages", src: "https://resumev1sa.blob.core.windows.net/treseledata/treseleweb/img/logos/aspnet-featured.png" },
    { name: "Yii", src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/yii-php-framework-icon.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Microsoft 365", src: "https://worldvectorlogo.com/logos/office-365-1.svg" },
];

const techLogos2 = [

  { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
{ name: "Zoho", src: "https://resumetresele.blob.core.windows.net/resumetresele/tools/cm11.png" },
  { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Mac", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
  { name: "Windows", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
    // Jupyter Notebook
  { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png" }, // SVG Repo[9]
  // Node.js
  { name: "Node.js", src: "https://nodejs.org/static/logos/nodejsStackedDark.svg" }, // SVG Repo
  // LocalWP (PNG fallback, as SVG is not available for hotlinking)
  { name: "LocalWP", src: "https://local.getflywheel.com/wp-content/themes/flywheel-local-theme/images/meta_share_image.png" },
  { name:"Stripe", src:"https://images.stripeassets.com/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg?q=80&w=1082"},
];

const techLogos3= [

    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "SCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "C#", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
{ name: "Power BI", src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/power-bi-icon.svg" }

,
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Zoom", src: "https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo.png" }
];


// Array 1: Programming Languages & Core Frameworks
const techLogos4 = [

  { name: "Webpack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
  { name: "ViteJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
    { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
{ name: "Tailwind", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" }
, { name: "OpenAI", src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },

    { name: "Twilio", src: "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg" },
      { name: "Jest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
        { name: "Replicate AI", src: "https://avatars.githubusercontent.com/u/69038599?s=200&v=4" }
];

// Array 2: Cloud, DevOps, and Backend Tools
const techLogos5 = [
{ name: "Expo.dev", src: "https://cdn.simpleicons.org/expo/000000" },
  { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

{ name: "3CX", src: "https://www.itophub.io/wiki/media?cache=&w=474&h=206&tok=a5037b&media=extensions:telephony-integration-3cx-logo.png" },

  { name: "Streamlit", src: "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.svg" },
  { name: "Chanlit", src: "https://avatars.githubusercontent.com/u/128686189?s=48&v=4" },
  { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Swagger", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

// Array 3: Frontend, AI, Testing, and Mobile
const techLogos6 = [

];


export default function DigitalSolutions() {
  return (
    <div>
      {/* Technology Logos */}
      <div className="py-10 px-10">
        <h2 className="text-slate-800  text-3xl mb-6 text-center">Solutions Powered By</h2>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {techLogos1.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.src} alt={tech.name} className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300" />
              <span className="text-white text-sm mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
               <div className="flex justify-center items-center gap-10 flex-wrap">
          {techLogos2.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.src} alt={tech.name} className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300" />
              <span className="text-white text-sm mt-2">{tech.name}</span>
            </div>
          ))}
        </div>

                       <div className="flex justify-center items-center gap-10 flex-wrap">
          {techLogos3.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.src} alt={tech.name} className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300" />
              <span className="text-white text-sm mt-2">{tech.name}</span>
            </div>
          ))}
        </div>

                               <div className="flex justify-center items-center gap-10 flex-wrap">
          {techLogos4.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.src} alt={tech.name} className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300" />
              <span className="text-white text-sm mt-2">{tech.name}</span>
            </div>
          ))}
        </div>

                               <div className="flex justify-center items-center gap-10 flex-wrap">
          {techLogos5.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.src} alt={tech.name} className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300" />
              <span className="text-white text-sm mt-2">{tech.name}</span>
            </div>
          ))}
        </div>


                               <div className="flex justify-center items-center gap-10 flex-wrap">
          {techLogos6.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.src} alt={tech.name} className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300" />
              <span className="text-white text-sm mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
