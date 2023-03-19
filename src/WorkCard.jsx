import React from "react"

export default function WorkCard(props) {
    return (
        <div className="flex justify-center text-left py-4 px-8">
            <div className="flex min-w-[70%] min-h-[40vh] max-w-[90%] md:flex-row rounded-lg bg-white shadow-lg">
                <div className="p-6 flex flex-col justify-start bg-slate-200">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{props.company}</h5>
                    <p className="text-gray-600 text-sm mb-2">{props.position} | {props.time}</p>
                    <ul className="text-gray-700 text-base mb-4 list-disc ml-4">
                        {props.roles?.map((item, key) => <li key={key}>{item}</li>)}
                    </ul>
                    <p className="text-gray-600 text-xs">{props.footer}</p>
                </div>
                <img className="min-w-[10vw] h-fit p-5 md:h-auto object-contain md:w-[25vw] rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.image} alt="" />
            </div>
        </div>
    );
}