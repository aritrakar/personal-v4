import React from "react"

export default function ProjectBox(props) {
    // return (
    //     <div className="flex justify-center text-left p-4">
    //         <div className="flex min-w-[35vw] min-h-[30vh] md:flex-row md:max-w-md rounded-lg bg-white shadow-lg">
    //         <img className="w-24 h-24 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.image} alt="" />
    //         <div className="p-6 flex flex-col justify-start bg-slate-200">
    //             <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
    //             <p className="text-gray-700 text-base mb-3">
    //                 {props.text}
    //             </p>
    //             <div className="w-[7vw] h-[4vh] flex flex-row justify-between">
    //                 {(props.demo != "") && (
    //                     <a href={props.demo} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-base m-0 mr-2 mb-4 p-0 no-underline hover:underline">Demo</a>
    //                 )}
    //                 {(props.github != "") && (
    //                     <a href={props.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-base m-0 mb-4 p-0 no-underline hover:underline">GitHub</a>
    //                 )}
    //             </div>
    //             <p className="text-gray-600 text-xs">{props.footer}</p>
    //         </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className="flex flex-col justify-center items-center text-center p-4 w-[15vw] h-auto">
            <img className="w-24 h-24 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.image} alt="" />
            <div className="p-6 flex flex-col justify-start bg-slate-200">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
                <p className="text-gray-700 text-base mb-3">
                    {props.text}
                </p>
                <div className="w-[7vw] h-[4vh] flex flex-row justify-between">
                    {(props.demo != "") && (
                        <a href={props.demo} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-base m-0 mr-2 mb-4 p-0 no-underline hover:underline">Demo</a>
                    )}
                    {(props.github != "") && (
                        <a href={props.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-base m-0 mb-4 p-0 no-underline hover:underline">GitHub</a>
                    )}
                </div>
                <p className="text-gray-600 text-xs">{props.footer}</p>
            </div>
        </div>
    );
}
