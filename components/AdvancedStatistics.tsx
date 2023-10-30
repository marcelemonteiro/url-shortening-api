import Image from "next/image";

import IconBrandRecognition from "../public/images/icon-brand-recognition.svg";
import IconDetailedRecords from "../public/images/icon-detailed-records.svg";
import IconFullyCustomizable from "../public/images/icon-fully-customizable.svg";

export default function AdvancedStatistics() {
  return (
    <section className="bg-light-gray text-center pt-20 pb-28">
      <div className="max-w-5xl m-auto">
        <h2 className="text-2xl lg:text-3xl font-bold">Advanced Statistics</h2>

        <p className="text-grayish-violet mt-6 mb-16 lg:w-1/2 mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="lg:flex lg:text-left">
          <div className="bg-white mx-4 lg:mx-0 p-4 rounded-sm">
            <div className="-translate-y-1/2 bg-dark-violet rounded-full w-20 h-20 flex items-center justify-center m-auto lg:mx-0 -mb-4">
              <Image src={IconBrandRecognition} alt="Icon Brand Recognition" />
            </div>
            <h3 className="text-xl font-bold">Brand Recognition</h3>
            <p className="text-grayish-violet py-4">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <span className="block bg-cyan w-2 lg:w-36 h-16 lg:h-2 m-auto"></span>

          <div className="bg-white mx-4 lg:mx-0 p-4 rounded-sm lg:translate-y-[15%]">
            <div className="-translate-y-1/2 bg-dark-violet rounded-full w-20 h-20 flex items-center justify-center m-auto lg:mx-0 -mb-4">
              <Image src={IconDetailedRecords} alt="Icon Detailed Records" />
            </div>
            <h3 className="text-xl font-bold">Detailed Records</h3>
            <p className="text-grayish-violet py-4">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <span className="block bg-cyan w-2 lg:w-36 h-16 lg:h-2 m-auto"></span>

          <div className="bg-white mx-4 lg:mx-0 p-4 rounded-sm lg:translate-y-[30%]">
            <div className="-translate-y-1/2 bg-dark-violet rounded-full w-20 h-20 flex items-center justify-center m-auto lg:mx-0 -mb-4">
              <Image
                src={IconFullyCustomizable}
                alt="Icon Fully Customizable"
              />
            </div>
            <h3 className="text-xl font-bold">Fully Customizable</h3>
            <p className="text-grayish-violet py-4">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}