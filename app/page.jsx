import { Photo } from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import { Stats } from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">MERN stack Developer</span>
            <h1 className="h1">
              Hello I am <br /> <span className="text-green-600">Joy Dhar</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a Full stack developer with 1 year of personal experience in web development. I have a passion for learning and sharing my knowledge with others as a public speaker and technical blogger. I am always looking for new opportunities to learn and grow. I always try to learn new things and implement them in my projects. I am a quick learner and always ready to learn new things. I am a team player and always ready to help my team members. I am a good communicator and always ready to communicate with my team members. I am a good problem solver and always ready to solve problems. I am a good listener and always ready to listen to my team members. I am a good leader and always ready to lead.
            </p>
            {/* social icons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/resume/joydhar.pdf"
                download="joydhar.pdf"
                className="bg-gray-800 uppercase flex items-center gap-2 text-green-300 hover:text-white border border-blue-500 rounded-md p-2 hover:border-blue-700"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl ml-2" />
              </a>
              <div className="flex items-center gap-6">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div>
        <Stats />
      </div>
    </section>
  );
}