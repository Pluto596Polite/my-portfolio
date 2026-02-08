import Link from "next/link";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import PracticeWidget from "../Components/PracticeWidget";
import GradientWidget from "../Components/GradientWidget";
export default function AboutMe() {
    return (
        <div className="container mx-auto px-5 pb-20">{/*this shows how to add padding to the bottom of the page*/}
            <Navbar />
            <h1>About Me</h1>
            <h2>Something that I can&apos;t live without is ice cream</h2>
            <Image
                src="/Images/jakub-klucky-LUTud0h2-S0-unsplash.jpg"
                alt="Pro Athlete"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto mb-8 rounded-lg shadow-lg"
            />
            <div className="flex flex-col md:flex-row gap-8 mb-8 " >
                <div className="md:w-1/3 border-r border-black">
                    <h3 className="text-xl font-bold mb-4 font-serif">My Projects</h3>
                    <ul className="space-y-2">
                        <li><a href="https://oom-gerhard-surprise.web.app" className="hover:underline">Oom Gerhard Surprise App</a></li>
                        <li><a href="#" className="hover:underline">Project 2</a></li>
                        <li><a href="#" className="hover:underline">Project 3</a></li>
                    </ul>
                </div>
                <div className="md:w-2/3">
                    <p className="columns-2 gap-8" >
                        Driven by a relentless curiosity and a passion for clean architecture, I specialize in building scalable web applications that prioritize both performance and accessibility. My approach combines technical rigor with a keen eye for detail, ensuring that every line of code serves a purpose in delivering a seamless user journey. From the initial spark of an idea to the final deployment, I am committed to excellence and the continuous pursuit of mastery in my craft.

                        When I&apos;m not immersed in code, you can find me exploring the latest design trends, contributing to open-source projects, or finding inspiration in the quiet moments of everyday life. I believe that the best products are built at the intersection of empathy and innovation, and I strive to bring that philosophy to every project I undertake. Let&apos;s build something extraordinary together.
                    </p>
                </div>
            </div>
            <div className="flex justify-center gap-4">{/*this is the button container*/}
                <button className="bg-white text-black px-5 py-2 rounded-full border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                    Download my CV
                </button>{/*this is the left button*/}
                <Link href="/" className="bg-white text-black px-5 py-2 rounded-full border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"> Home Screen</Link>{/**This is the button to the home screen */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                <PracticeWidget
                    title="Practice Tracker"
                    description="Tracking my daily practice"
                    currentFocus="Distributed Systems"
                    dailyStreak={24}

                    tag="Focus"
                />
                <PracticeWidget
                    title="Gerhard van Staden Surprise"
                    description="A surprise app"
                    currentFocus="Information Systems"
                    dailyStreak={10}

                    tag="Project"
                />
                <PracticeWidget
                    title="Empty Widget"
                    description="Placeholder"
                    currentFocus="None"
                    dailyStreak={0}

                    tag="Empty"
                />
            </div>
            <GradientWidget />
        </div>
    );
}