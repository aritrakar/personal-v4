import React from "react"

function format(str) {
    let split = str.split(":");
    return (
        <div>
            <b className="text-[rgb(247,95,110)]">{split[0]}:</b>{split[1]}
        </div>
    )
}

export default function EducationCard(props) {
    return (
        <div className="flex justify-center text-left px-8">
            {/* Bullet point */}
            <div id="circle" className="w-[23px] h-[20px] rounded-xl bg-lime-400 relative left-[0.75rem]"></div>

            <div className="flex w-[40vw] md:flex-row border-l-4 border-yellow-400">
                <div className="p-6 pt-0 flex flex-col justify-start "> {/** bg-[rgb(239,230,215)] */}
                    <h5 className="text-[rgb(249,95,78)] hover:text-[rgb(252,44,19)] text-2xl font-bold mb-2 flex">
                        <a href={props.link} rel="noopener noreferrer">{props.company}</a>
                    </h5>
                    <p className="text-[rgb(252,156,132)] text-base mb-2"><b>{props.position} | {props.time}</b></p>
                    <ul className="text-red-200 text-lg mb-4 list-disc ml-4">
                        {props.roles?.map((item, key) => <li key={key}>{format(item)}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}