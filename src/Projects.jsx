import React from "react";
import ProjectBoxNew from "./components/ProjectBoxNew";

export default function Projects() {
    return (
        <div id="projectContent" className="w-[100vw] h-auto py-2 white z-10">
            <h1 className="text-gray-100 text-4xl m-5">🌟Featured Projects</h1>
            <h3 className="text-gray-300 text-xl m-5">Click on each project to learn more!</h3>
            <div className="flex flex-wrap justify-center">
                <ProjectBoxNew 
                    title="A.I. Projects"
                    text={[
                        "A collection of experiments using A.I. in different fields. See GitHub repository for more details.",
                        "Projects include: PDF-GPT, N.A.R.V.I.S. (chatbot), lane detection, traffic sign detection, sarcasm detection, and more.",
                        "Learning about image diffusion models."
                    ]}
                    coverImage="/brain.png"
                    footer="Python, PyTorch, Tensorflow, Keras, Scikit-learn, Pandas, NumPy, Matplotlib"
                    github="https://github.com/aritrakar/ai-projects"
                />
                <ProjectBoxNew 
                    title="Genetic Algorithm Neural Network Car Simulation"
                    text={[
                        "Created neural networks from scratch in C++ to enable agents to learn to navigate the simulation environment created with SFML (Simple and Fast Multimedia Library).",
                        "Integrated genetic algorithms to enhance neural network evolution, achieving progressive improvements in autonomous car decision-making and adaptability."
                        ]}
                    coverImage="/driving.svg"
                    footer="C++, SFML"
                    github="https://github.com/aritrakar/genetic-driving"
                />
                <ProjectBoxNew 
                    title="StarCraft II Agent"
                    text={[
                        "Exploring reinforcement learning techniques by building agents that learn to play StarCraft II.",
                        ]}
                    coverImage="/sc2.svg"
                    footer="Python, PyTorch, Stable Baselines3, PySC2"
                    github="https://github.com/aritrakar/starcraft2"
                />
                <ProjectBoxNew 
                    title="DOOM Agent"
                    text={[
                        "Exploring reinforcement learning techniques by building agents that learn to play through custom DOOM 1993 levels.",
                        ]}
                    coverImage="/doom.svg"
                    footer="Python, PyTorch, VizDoom, Sample Factory, Stable Baselines3"
                    github="https://github.com/aritrakar/doom"
                />
                <ProjectBoxNew 
                    title="Traffic Sign Detection"
                    text={["Utilized CNNs and image preprocessing algorithms to recognise 43 different traffic signs, achieving 94.78\% validation accuracy on the GTSRB dataset.",
                    "Optimized performance using the Adam optimizer in model training, and using image preprocessing algorithms on the 50k+ image dataset.",
                    "Visualized model training and validation accuracies and losses across epochs with Matplotlib."
                    ]}
                    coverImage="/traffic.png"
                    modalMedia={["/traffic_predictions.png", "/traffic_graph.png"]}
                    footer="Python, Tensorflow, Keras, Scikit-learn, Matplotlib, Pandas, NumPy"
                    github="https://github.com/aritrakar/TrafficSignDetection"
                />
                <ProjectBoxNew
                    title="Music App"
                    text={[
                        "A music app that allows users to search for songs, create playlists, play songs from their playlists, and more.",
                        "Worked on dark mode, sortable track table, album search functionality, and more.",
                        "Built as a group project for a databases class (CS348)."
                    ]}
                    coverImage="/note.svg"
                    modalMedia={["/music_1.png", "/music_2.png", "/music_3.png", "/music_4.png", "/music_5.png", "/music_6.png" ]}
                    footer="TypeScript, React.js, Next.js, PostgreSQL, Material UI, Docker, Google Cloud Platform"
                    demo="https://cs348.espi.dev/"
                    github="https://github.com/Raymo111/cs348"/>
                <ProjectBoxNew 
                    title="WLP4 compiler"
                    text={["Created a compiler for WLP4, a subset of C, which outputs a relocatable, executable MIPS binary file.",
                           "Compiler design incorporated (simplified) Maximal Munch scanning algorithm, LR(1) parser, parse tree generator, syntax and semantic analysis, MIPS code generator, assembler, and linker."]}
                    coverImage="/compiler.png"
                    footer="C++"
                    github="https://github.com/aritrakar/WLP4-compiler"
                />
                <ProjectBoxNew 
                    title="Chess"
                    text={["Built a chess application with 3 modes (human vs computer, human vs human, computer vs computer), 3 levels of computer difficulty, GUI, CLI, and extra features such as undo move, custom game setup mode, move history, threat map, and hints.",
                           "Designed the application according to OOP principles (RAII, encapsulation, inheritance, etc.), including design patterns and MVC architecture."]}
                    coverImage="/knight.svg"
                    footer="C++, X11 libraries"
                    github=""
                />
                <ProjectBoxNew
                    title="Pathfinding Visualizer"
                    text={[
                        "A simple tool for visualizing common pathfinding algorithms, featuring Dijkstra's, A* search, DFS, and BFS algorithms.",
                        "The tool also features 3 visualization speeds (slow, average, fast), ability to generate random walls, and custom placing of start and end cells."
                    ]}
                    coverImage="path.gif"
                    modalMedia={["pathviz_demo.mp4"]}
                    footer="React.js, JavaScript, HTML5, CSS3"
                    demo="https://aritrakar.github.io/pathfinding_visualizer/"
                    github="https://github.com/aritrakar/pathfinding_visualizer"/>
                {/* <ProjectBoxNew
                    title="J.A.R.V.I.S."
                    text={["A personal voice assistant that uses deep learning to classify and respond to various commands and perform 6 unique actions: search Google, get events from Google Calendar, play songs on Spotify, etc."]}
                    coverImage="brain.png"
                    footer="Python, Tensorflow"
                    github="https://github.com/aritrakar/Python-Projects/tree/master/Chatbot/Speech%20To%20Text"/> */}
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
