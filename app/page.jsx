import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import ViewCV from "@/components/ViewCV";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full flex flex-col px-4">
      <div className="container mx-auto bg-slate-100 dark:bg-slate-800 rounded-2xl ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:px-10">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Junior full-stack developer</span>
            <h1 className="h1 my-6">
              Hello, I'm <br />
              <span className="">Derrick Munkhbat</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-primary dark:text-white/80">
              I'm looking to expand my skills and experience in full-stack
              development, taking on new challenges and staying up-to-date with
              the latest technologies and trends. I'm excited to explore
              opportunities that will help me grow as a developer and deliver
              high-quality solutions.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <ViewCV/>
              {/* <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button> */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-black dark:bg-white/80 rounded-full flex justify-center items-center text-black text-base hover:bg-slate-200 hover:text-primary hover:transition-all duration-500 dark:hover:bg-slate-400"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none my-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
