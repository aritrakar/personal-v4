import React from "react"

export default function Skills() {
    const skills = ["C/C++", "JavaScript", "Python", "Java", "Golang", "Bash", "HTML5", "CSS3", "R", "React", "Node.js", "Firebase", "PostgreSQL", "MongoDB", "Tensorflow", "Scikit-learn", "Git", "Gitlab", "Docker", "Agile", "LaTeX"];
    const skillsPictures = 
        ["/cpp.png", "/js.png", "/python.png", "/java.png", "/gopher.png","/bash.png", "/html5.png", "/css3.png", "/r.png", "/react.png", "/node.png", "/firebase.svg", "/pgsql.png", "/mongodb.png", "/tf.png","/sklearn.png",
        "/git.png", "/gitlab.png", "/docker.webp", "/jira.svg", "/latex.png"]

    return (
        <div id="skills" className="h-auto py-2 flex flex-col content-center items-center white z-[100]">
            <h1 className="text-gray-100 text-4xl m-5">Skills</h1>
            <div className="flex flex-wrap justify-center w-[70%]">
                {skills.map((item, key) => (
                    <div className="m-2 hover:scale-[1.03]"
                        key={key}
                    >
                        <div className="bg-slate-100 hover:bg-slate-200 p-3 px-[0.9rem] inline-block rounded-[5rem]">
                            <img src={`./images/skills/${skillsPictures[key]}`} title={item} alt={item} className="w-auto max-h-[2rem]" />
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}
