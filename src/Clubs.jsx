import React from "react";
import EducationCard from "./components/EducationCard"

export default function Club() {
    return (
        <div id="clubContent" className="py-2">
            <h1 className="text-gray-100 text-4xl m-5">👀Clubs</h1>
            <EducationCard
                company="UW Entrepreneurship Society"
                link="https://entsoc.ca/"
                position="Junior Full Stack Developer"
                time="September 2023 - Present"
                roles={[
                    "Contributed to the enhancement of the Janus platform at the Entrepreneurship Society by developing new front-end features, focusing on improving connections between start-ups and students.",
                    "Specialized in designing and implementing reusable React components, significantly elevating the platform's user interface and usability.",
                    "This development facilitated a more streamlined and scalable approach to feature integration, supporting the dynamic needs of the start-up ecosystem."
                ]}
                footer="Java, Golang, Python, Microsoft Azure, Terraform, Jenkins, Git"/>

            <EducationCard
                company="Wat Street"
                link="https://ca.linkedin.com/company/wat-street"
                position="Quantitative Developer"
                time="September 2023 - Present"
                roles={["TBD."]}
                footer="Python, LangChain, Apify, JavaScript, Chart.js, Wordpress"/>
        </div>);
}
