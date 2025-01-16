import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Let’s Connect and Build Something Amazing!
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Whether you’re a customer, a college peer, or a friend, I’d love to hear from you! I believe that great ideas come from collaboration
          Don’t hesitate to reach out—whether it’s for a collaboration, a question, or just to say hi. I’m always here to chat and explore new opportunities!
          Contact Me Today and let’s make something extraordinary happen
          </p>
          <h2>contact us:
          email :Ktro761@gmail.com</h2>
        </div>
        <Form />
      </article>
    </>
  );
}
