import React from "react"

function getCertificationCard({key, name, img, link}) {
    return (
        <div className="w-[14rem] flex flex-col justify-center text-center items-center m-2" key={key}>
            <div><img src={img} className="w-[5rem] pb-4 object-cover" alt={name}/></div>
            <a href={link} rel="noopener noreferrer"><h5 className="text-slate-200 hover:text-white text-xl">{name}</h5></a>
        </div>
    )
}


export default function Certifications() {
    const certifications = [
        {name:"AWS ML Foundations", img: "/udacity.png", link:"https://graduation.udacity.com/confirm/MLGDDXV7"},
        {name:"The Complete SQL Bootcamp", img: "/udemy.png", link:"https://www.udemy.com/certificate/UC-97bb781f-7c4b-47b6-a4ac-f8c58c10cd34/"},
        {name:"Go: The Complete Developer's Guide", img: "/udemy.png", link:"https://www.udemy.com/certificate/UC-7832517a-d907-45b1-bd24-d0ed7e33eaa7/"},
        {name:"Hackerrank C++ Gold", img: "/hackerrank_cpp.png", link:"https://www.hackerrank.com/akar28?hr_r=1"},
        {name:"Software Engineering Virtual Experience", img: "/forage.png", link:"https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan%20Chase_eLFGEmEGGCddkc8aF_completion_certificate.pdf"},
        {name:"Agile Fundamentals", img: "/udemy.png", link:"https://www.udemy.com/certificate/UC-840c45a1-49de-4a23-9dbe-0791845da9fb/"},
        {name:"Intermediate Machine Learning", img: "/kaggle.png", link:"https://www.kaggle.com/learn/certification/aritrakar/intermediate-machine-learning"},
        {name:"Intro to Machine Learning", img: "/kaggle.png", link:"https://www.kaggle.com/learn/certification/aritrakar/intro-to-machine-learning"},
        {name:"Data Visualization", img: "/kaggle.png", link:"https://www.kaggle.com/learn/certification/aritrakar/data-visualization"},
        {name:"Python", img: "/kaggle.png", link:"https://www.kaggle.com/learn/certification/aritrakar/python"}
    ]

    return (
        <div id="certifications" className="w-[100vw] h-auto py-2 flex flex-col content-center items-center white">
            <h1 className="text-gray-100 text-4xl m-5">Certifications & Badges</h1>
            <div className="flex flex-wrap justify-center w-[70%]">
                {certifications.map((cert, key) => getCertificationCard({key, ...cert}))
                }
            </div>
        </div>
    );
}
