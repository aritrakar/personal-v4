import React from "react"

export default function WordCard(props) {
    return (
        <div className="flex justify-center text-left px-8">
            {/* Bullet point */}
            <div id="circle" className="w-[20px] h-[20px] rounded-xl bg-yellow-400 relative left-[0.8rem]"></div>

            <div className="flex w-[50vw] pb-5 md:flex-row border-l-4 border-lime-400">
                <div className="p-6 pt-0 flex flex-col justify-start "> {/** bg-[rgb(239,230,215)] */}
                    <h5 className="text-[rgb(249,95,78)] hover:text-[rgb(252,44,19)] text-2xl font-bold mb-2 flex">
                        <a href={props.link} rel="noopener noreferrer">{props.company}</a>
                    </h5>
                    <p className="text-[rgb(252,156,132)] text-base mb-2"><b>{props.position} | {props.time}</b></p>
                    <ul className="text-red-200 text-lg mb-4 list-disc ml-4">
                        {props.roles?.map((item, key) => <li key={key}>{item}</li>)}
                    </ul>
                    <p className="text-[rgb(247,95,110)] text-base"><b>Utilized:</b> {props.footer}</p>
                </div>
            </div>
        </div>
    );
}