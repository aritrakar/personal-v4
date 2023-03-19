import React from "react";
import ProjectBoxNew from "./ProjectBoxNew";

export default function Projects() {
    return (
        <div id="projectContent" className="w-[100vw] h-auto py-2 white z-10">
            <h1 className="text-gray-100 text-4xl m-5">Featured Projects</h1>
            <h3 className="text-gray-300 text-xl m-5">Click on each project to learn more!</h3>
            <div className="flex flex-wrap justify-center">
                <ProjectBoxNew 
                    title="Traffic Sign Detection"
                    text={["Utilized CNNs and image preprocessing algorithms to recognise 43 different traffic signs, achieving 94.78\% validation accuracy on the GTSRB dataset.",
                    "Optimized performance using the Adam optimizer in model training, and using image preprocessing algorithms on the 50k+ image dataset.",
                    "Visualized model training and validation accuracies and losses across epochs with Matplotlib."
                ]}
                    coverImage="traffic.png"
                    media_type="image"
                    modalMedia={["traffic_predictions.png", "traffic_graph.png"]}
                    footer="Python, Tensorflow, Keras, Scikit-learn, Matplotlib, Pandas, NumPy"
                    demo=""
                    github="https://github.com/aritrakar/TrafficSignDetection"
                />
                <ProjectBoxNew 
                    title="WLP4 compiler"
                    text={["Created a compiler for WLP4, a subset of C, which outputs a relocatable, executable MIPS binary file.",
                           "Compiler design incorporated (simplified) Maximal Munch scanning algorithm, LR(1) parser, parse tree generator, syntax and semantic analysis, MIPS code generator, assembler, and linker."]}
                    coverImage="compiler.png"
                    media_type="image"
                    modalMedia={["compiler.png"]}
                    footer="C++"
                    demo=""
                    github="https://github.com/aritrakar/WLP4-compiler"
                />
                <ProjectBoxNew 
                    title="Chess"
                    text={["Built a chess application with 3 modes (human vs computer, human vs human, computer vs computer), 3 levels of computer difficulty, GUI, CLI, and extra features such as undo move, custom game setup mode, move history, threat map, and hints.",
                           "Designed the application according to OOP principles (RAII, encapsulation, inheritance, etc.), including design patterns and MVC architecture."]}
                    coverImage="knight.png"
                    media_type="image"
                    modalMedia={[]}
                    footer="C++, X11 libraries"
                    demo=""
                    github=""
                />
                <ProjectBoxNew
                    title="Pathfinding Visualizer"
                    text={["A simple tool for visualizing common pathfinding algorithms, featuring Dijkstra's, A* search, DFS, and BFS algorithms."]}
                    coverImage="path.gif"
                    modalMedia={["pathviz_demo.mp4"]}
                    footer="React.js, JavaScript, HTML5, CSS3"
                    demo="https://aritrakar.github.io/pathfinding_visualizer/"
                    github="https://github.com/aritrakar/pathfinding_visualizer"/>
                <ProjectBoxNew
                    title="J.A.R.V.I.S."
                    text={["A personal voice assistant that uses deep learning to classify and respond to various commands and perform 6 unique actions: search Google, get events from Google Calendar, play songs on Spotify, etc."]}
                    coverImage="brain.png"
                    modalMedia={[]}
                    footer="Python, Tensorflow"
                    demo=""
                    github="https://github.com/aritrakar/Python-Projects/tree/master/Chatbot/Speech%20To%20Text"/>
                <ProjectBoxNew
                    title="Spacetagram"
                    text={[
                        "Image-sharing from the final frontier. My submission for Shopify Front End Developer Challenge 2022.",
                        "Features light/dark mode, infinite scrolling, a modal for each post, post sharing, skeletons, a like system, and more!",
                        "The original challenge was to query NASA's APOD API and display the images in a visually pleasing manner. Future improvements to this project include persistence, caching, and a date picker."
                    ]}
                    coverImage="spacetagram.png"
                    modalMedia={["spacetagram_demo.mp4"]}
                    footer="React.js, React Router, Headless UI React, JavaScript, Tailwind CSS, HTML5"
                    demo="https://aritrakar.github.io/spacetagram/"
                    github="https://github.com/aritrakar/spacetagram"/>
            </div>

            <h1 className="text-gray-100 text-xl m-5">For my other projects, check out my <a href="https://github.com/aritrakar" target="_blank" rel="noopener noreferrer" className="p-0 m-0 no-underline hover:underline">GitHub</a>!</h1>
        </div>
    );
}
