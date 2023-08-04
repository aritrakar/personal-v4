import React from "react"

export default function Skills() {
    const skillMap = [
        { skill: 'C/C++', image: '/cpp.png' },
        { skill: 'Python', image: '/python.png' },
        { skill: 'JavaScript', image: '/js.png' },
        { skill: 'TypeScript', image: '/ts.png' },
        { skill: 'Java', image: '/java.png' },
        { skill: 'Golang', image: '/gopher.png' },
        { skill: 'Bash', image: '/bash.png' },
        { skill: 'HTML5', image: '/html5.png' },
        { skill: 'CSS3', image: '/css3.png' },
        { skill: 'R', image: '/r.png' },
        { skill: 'React', image: '/react.png' },
        { skill: 'Node.js', image: '/node.png' },
        { skill: 'Material UI', image: '/mui.svg' },
        { skill: 'Firebase', image: '/firebase.svg' },
        { skill: 'PostgreSQL', image: '/pgsql.png' },
        { skill: 'MongoDB', image: '/mongodb.png' },
        { skill: 'Tensorflow', image: '/tf.png' },
        { skill: 'PyTorch', image: '/pytorch.png' },
        { skill: 'Scikit-learn', image: '/sklearn.png' },
        { skill: 'Git', image: '/git.png' },
        { skill: 'Gitlab', image: '/gitlab.png' },
        { skill: 'Docker', image: '/docker.webp' },
        { skill: 'Agile', image: '/jira.svg' },
        { skill: 'LaTeX', image: '/latex.png' }
    ];          

    return (
        <div id="skills" className="h-auto py-2 flex flex-col content-center items-center white z-[100]">
            <h1 className="text-gray-100 text-4xl m-5">🔧Skills</h1>
            <div className="flex flex-wrap justify-center w-[70%]">
                {skillMap.map((skill, key) => (
                    <div className="m-2 hover:scale-[1.03]"
                        key={key}
                    >
                        <div className="bg-slate-100 hover:bg-slate-200 p-3 px-[0.9rem] inline-block rounded-[5rem]">
                            <img src={`./images/skills/${skill["image"]}`} title={skill["skill"]} alt={skill["skill"]} className="w-auto max-h-[2rem]" />
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}
