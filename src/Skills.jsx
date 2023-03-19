import React, {useState} from "react"

export default function Skills() {
    const skills = ["C/C++", "JavaScript", "Python", "Java", "Golang", "Bash", "HTML5", "CSS3", "R", "React", "Node.js", "Firebase", "PostgreSQL", "MongoDB", "Tensorflow", "Scikit-learn", "Git", "Gitlab", "Docker", "Agile", "LaTeX"];
    const skillsPictures = 
        ["/cpp.png", "/js.png", "/python.png", "/java.png", "/gopher.png","/bash.png", "/html5.png", "/css3.png", "/r.png", "/react.png", "/node.png", "/firebase.svg", "/pgsql.png", "/mongodb.png", "/tf.png","/sklearn.png",
        "/git.png", "/gitlab.png", "/docker.webp", "/jira.svg", "/latex.png"]
    
    const [isHovering, setIsHovering] = useState(Array(skills.length).fill(false));

    const toggleValue = (index, val) => {
        setIsHovering(prevValues => {
          const newValues = [...prevValues];
          newValues[index] = val; // !newValues[index];
          return newValues;
        });
      };

    return (
        // <div id="skills" className="top-[324vh] w-[100vw] h-auto px-6 pb-8 flex flex-col content-center items-center bg-gradient-to-b from-blue-900 to-slate-900 absolute white z-10">
        <div id="skills" className="h-auto py-2 flex flex-col content-center items-center white z-[100]">
            <h1 className="text-gray-100 text-4xl m-5">Skills</h1>
            <div className="flex flex-wrap justify-center w-[70%]">
                {skills.map((item, key) => (
                
                // <div key={key} className="bg-slate-100 text-gray-800 w-auto m-2 p-2 rounded-lg hover:scale-[1.03]">
                //     {item}
                // </div>

                <div className="m-2"
                    key={key}
                    onMouseEnter={() => {console.log(`enter, ${key}`); toggleValue(key, true);}}
                    onMouseLeave={() => {console.log(`leave, ${key}`); toggleValue(key, false);}}
                >
                    <div className="bg-slate-100 p-3 px-[0.9rem] inline-block rounded-[5rem]">
                        <img src={skillsPictures[key]} title={item} alt={item} className="w-auto max-h-[2rem]" />
                    </div>
                    {/* {
                    !isHovering[key] ?
                    <div className="bg-slate-200 p-3 px-[0.9rem] inline-block rounded-[5rem]">
                        <img src={skillsPictures[key]} className="w-auto max-h-[2rem]" />
                    </div>
                    :
                    <div
                        key={key}
                        className="bg-slate-100 text-gray-800 inline-block py-4 px-[0.9rem] justify-center items-center rounded-[5rem] transition ease-in-out duration-[3000]"
                    >
                        {item}
                    </div>
                    } */}
                </div>
                
                ))
                }
            </div>
        </div>
    );
}
