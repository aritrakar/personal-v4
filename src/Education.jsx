import React from "react";
import EducationCard from "./components/EducationCard"

export default function Education() {
    return (
        <div id="educationContent" className="py-2">
            <h1 className="text-gray-100 text-4xl m-5">🎓Education</h1>
            <EducationCard 
                company="University of Waterloo"
                link="https://uwaterloo.ca/"
                position="Bachelor of Computer Science (AI Specialization; Minor in Statistics)"
                time="September 2020 - April 2025"
                roles={[
                        "Relevant Coursework: A.I., OSs, Object-Oriented Software Development, Algorithms, Data Structures, Databases, Compilers",
                        "Term Distinction: All academic terms (Fall '20, Winter '21, Fall '21, Winter '22, Fall '22, Spring '23)",
                        "Organisations: Entrepreneurship Society, Wat Street, The Zero Experience, CS Club, Poker Studies Club",
                        "Awards: President’s Scholarship of Distinction ($2k); Mathematics International Experience Scholarship ($5k); Certificate of Distinction in Euclid Mathematics Contest (Top 25% worldwide)"
                    ]}
                format={true}
            />
            <EducationCard 
                company="South City International School"
                link="https://www.scis.co.in/"
                position="Indian School Certificate"
                time="April 2009 - April 2020"
                roles={[
                        "Subjects: Mathematics, Computer Science, Physics, Chemistry, English",
                        "Activities & Societies: House Captain; Quiz Club (Preisdent & Co-founder); MUN Club (President); Morpheus '19 (School fest Treasurer)",
                      ]}
                format={true}
            />
        </div>);
}
