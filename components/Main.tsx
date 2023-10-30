import Image from "next/image";

import IllustrationWorking from "../public/images/illustration-working.svg";

export default function Main() {
  return (
    <main className="max-w-5xl m-auto md:flex py-4 lg:py-20">
      <div className="lg:order-2">
        <Image src={IllustrationWorking} alt="Illustration Working" />
      </div>

      <div className="text-center lg:text-left p-4">
        <h2 className="text-4xl lg:text-6xl font-bold text-very-dark-blue">
          More than just shorter links
        </h2>

        <p className="text-grayish-violet mt-4 mb-6">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <a
          href="/"
          className="bg-cyan text-white block w-44 px-4 py-2 mx-auto lg:mx-0 rounded-full text-center font-bold hover:opacity-60"
        >
          Get Started
        </a>
      </div>
    </main>
  );
}
