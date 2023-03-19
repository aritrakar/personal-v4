import React from "react";
import WorkCard from "./WorkCard"

export default function Work() {
    return (
        // <div id="workContent" className="top-[100vh] w-[100vw] h-[110vh] px-6 pb-8 bg-gradient-to-b from-cyan-500 to-blue-500 absolute"> mt-[100vh]
        <div id="workContent" className="py-8">
            <h1 className="text-gray-100 text-4xl m-5">Work Experience</h1>
            <WorkCard 
                company="BlackBerry Limited"
                position="Software Development Student"
                time="May 2022 - August 2022"
                roles={[
                        "Created tools with Python, AWS Lambda, and S3 to automate uploading and downloading release packages to and from AWS S3 and Nexus Repository.",
                        "Designed and implemented a JSON configuration file semantic validator in C++ from scratch and integrated it into BlackBerry IVY Intelligent Vehicle Development Platform.",
                        "Collaborated on a team of 4 to improve client interaction with the Camera service by implementing the Permission service callback feature. Created and published Bash scripts to automate building, uploading, and testing.",
                        "Conducted extensive UX research on IVY and code reviews on code written by teammates. Led documentation effort to improve code readability, productivity, and future intern onboarding experiences."]}
                image="blackberry.svg"
                footer="C++, Python, Bash, Docker, AWS S3, AWS Lambda, Gitlab, Agile"/>
            <WorkCard 
                company="MindKraft Education Inc."
                position="Software Developer & Coding Instructor"
                time="May 2021 - September 2021"
                roles={[
                        "Developed curricula and lesson plans for teaching coding to kids through 6 Java, JavaScript & Python courses engagingly through exercises and games (Minecraft).",
                        "Conducted online classes and summer camps for 10+ students aged 7-12 and prepared visual aids to illustrate concepts.",
                        "Reviewed the existing UI of the company's two websites and suggested improvements and new features which, when implemented, would significantly improve website loading times, UX, and traffic."]}
                image="mindkraft.png"
                footer="JavaScript, Java, Python"/>
        </div>);
}
