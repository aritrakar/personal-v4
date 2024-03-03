import React from "react";
import EducationCard from "./components/EducationCard"

export default function Volunteering() {
    return (
        <div id="clubContent" className="py-2">
            <h1 className="text-gray-100 text-4xl m-5">❤️Volunteering</h1>
            <EducationCard
                company="Latexify Py"
                link="https://github.com/google/latexify_py"
                position="Open source contributor"
                time="November 2023 - Present"
                roles={[
                    "Added support for converting 7 NumPy NDArray single function expressions to LaTeX and helped fix GitHub CI issues."
                ]}
            />
            <EducationCard
                company="UW Entrepreneurship Society"
                link="https://entsoc.ca/"
                position="Senior Full Stack Developer"
                time="September 2023 - Present"
                roles={[
                    "Contributed to the enhancement of the Janus platform by developing new front-end features, focusing on improving connections between start-ups and students.",
                    "Specialized in designing and implementing reusable React components, significantly elevating the platform's UI/UX.",
                    // "This development facilitated a more streamlined and scalable approach to feature integration, supporting the dynamic needs of the start-up ecosystem."
                ]}
            />

            <EducationCard
                company="Waterloo Aerial Robotics Group"
                link="https://www.uwarg.com/"
                position="Autonomy Developer"
                time="February 2024 - Present"
                roles={["👀Computational vision models for drones."]}
            />

            <EducationCard
                company="Wat Street"
                link="https://ca.linkedin.com/company/wat-street"
                position="Quantitative Developer"
                time="September 2023 - Present"
                roles={["📈ML models for portfolio optimization."]}
            />
        </div>);
}
