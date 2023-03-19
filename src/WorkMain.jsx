import React from "react";
import WorkCardNew from "./WorkCardNew"

export default function WorkMain() {
    return (
        <div id="workContent" className="py-2">
            <h1 className="text-gray-100 text-4xl m-5">Work Experience</h1>
            
            <WorkCardNew 
                company="Sportiqo"
                link="https://www.sportiqo.com/"
                position="Software Developer"
                time="February 2023 - Present"
                roles={[
                        "Working on data visualization using JavaScript and football rewards model research and development at a Web3 sports-trading exchange startup.",
                    ]}
                footer="JavaScript, Chart.js, Wordpress, HTML/CSS"/>

            <WorkCardNew 
                company="BlackBerry Limited"
                link="https://www.blackberry.com/us/en/products/cylance-endpoint-security/cylance-gateway"
                position="Application Software Developer - Product Engineering (CylanceGATEWAY & BBMe)"
                time="January 2023 - Present"
                roles={[
                        "Create a data ingestion and processing system to capture non-Gateway-tunnel network traffic, integrated with a ML model to predict C2 beacon traffic with high precision and recall; ongoing work to improve the model's performance.",
                        "Implement new features and resolve issues with OIDC and 2FA authentication flows for multiple environments in Gateway's internal testing tool, resulting in a 50\% increase in efficiency.",
                        "Enforce adherence to RFC standards and develop highly resilient code for core libraries utilized extensively across multiple BlackBerry projects.",
                        "Strengthen software products by reviewing code and executing rigorous unit and integration testing, achieving high reliability and performance standards."]}
                footer="C++, Python, Scikit-learn, Bash, Jenkins, GitLab, Agile"/>

            <WorkCardNew 
            company="BlackBerry Limited"
            link="https://www.blackberry.com/us/en/products/automotive/blackberry-ivy"
            position="Software Developer - IVY"
            time="May 2022 - August 2022"
            roles={[
                    "Created tools with Python, AWS Lambda, and S3 to automate uploading and downloading release packages to and from AWS S3 and Nexus Repository.",
                    "Designed and implemented a JSON configuration file semantic validator in C++ from scratch and integrated it into BlackBerry IVY Intelligent Vehicle Development Platform.",
                    "Collaborated on a team of 4 to improve client interaction with the Camera service by implementing the Permission service callback feature. Created and published Bash scripts to automate building, uploading, and testing.",
                    "Conducted extensive UX research on IVY and code reviews on code written by teammates. Led documentation effort to improve code readability, productivity, and future intern onboarding experiences."]}
            footer="C++, Python, Bash, Docker, AWS (Lambda, S3, CloudWatch, IAM), GitLab, Agile"/>

            <WorkCardNew
                company="MindKraft Education Inc."
                link="https://www.mindkraft.ca/"
                position="Software Developer & Coding Instructor"
                time="May 2021 - September 2021"
                roles={[
                        "Developed curricula and lesson plans for teaching coding to kids through 6 Java, JavaScript & Python courses engagingly through exercises and games (Minecraft).",
                        "Conducted online classes and summer camps for 10+ students aged 7-12 and prepared visual aids to illustrate concepts.",
                        "Reviewed the existing UI of the company's two websites and suggested improvements and new features which, when implemented, would significantly improve website loading times, UX, and traffic."]}
                footer="JavaScript, Java, Python"/>
        </div>);
}
