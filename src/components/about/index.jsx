import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am a highly skilled Web Developerand AI Data Engineer with a passion forcreating innovative, cutting-edge
          solutions. My expertise lies in craftingdynamic, scalable web applicationsand building intelligent AI-driven
          systems that solve real world problemsCurrently, I am working on an exciting project called "TalkieTalk AI", where I am integrating AI-powered technologies to enhance interactive communication experiences. Over the years, I have successfully completed numerous web development projects, demonstrating my ability to deliver robust and elegant solutions tailored to diverse user needs.
          With a strong foundation in modern web technologies, data engineering pipelines, and machine learning modelsve. Explore my portfolio to see how I bring ideas to life!
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            15+{" "}
            <sub className="font-semibold text-base">monthsof experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="
https://github-readme-stats.vercel.app/api/top-langs/?username=kastro-star&&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="
https://github-readme-stats.vercel.app/api?username=kastro-star&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=aws,bootstrap,cloudflare,css,d3,docker,figma,firebase,git,github,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vscode,"
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        
      
        <ItemLayout className={"col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=iqlipse-abhi&theme=dark&type=png&background=EB545400&ring=FFEF20&border=FFF60C00"
            alt="iqlipse-abhi streak"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=kastro-star&repo=ragproject&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&text_bold=false&description_lines_count=2&icon_color=FEFE5B"
            alt="iqlipse-abhi repo"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
