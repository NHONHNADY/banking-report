import { Statistics } from "./statistic";
// import pilot from "pilot.png";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container py-6 md:py-24 lg:py-32 px-0">
      <div className="py-0 px-0">
        <div className="px-6 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <Image
            src={"/RTR-LOGO-04.png"}
            alt=""
            className="w-[300px] object-contain rounded-lg"
            width={100}
            height={100}
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Us
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
