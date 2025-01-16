"use client";
import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import { ReactTyped } from "react-typed";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen flex flex-col items-start justify-start p-6">
        <div className="text-2xl">
          <h1 className="text-yellow-600 font-bold text-5xl">
            Hii...<br />
            <span className="text-yellow-300 font-bold text-4xl">I am KASTRO</span>
          </h1>
          <div className="text-yellow-100">
            <ReactTyped
              strings={[
                "AI Data Engineer and WEB Developer..!",
                "Specialized in LLMs, RAG techniques, and FastAPI",
                "Mastering FastAPI for seamless integrations ",
                "Enhancing AI with Retrieval-Augmented Generation (RAG)",
                "Scalable, containerized deployments with Docker",
                "Innovating at the intersection of AI and Web Development",
                "passionate my carrer in web dev journey",
                "Solving challenges with intelligent workflows",
                "Let's create something amazing future together...",
              ]}
              typeSpeed={50}
              backSpeed={20}
              backDelay={1500}
              loop
            />
          </div>
        </div>
        <Navigation />
        <div className="flex justify-center items-center w-full h-full">
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </div>
    </main>
  );
}

