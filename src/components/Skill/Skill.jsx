import {
    DiBootstrap,
    DiCss3,
    DiGit,
    DiHtml5,
    DiJava,
    DiJavascript1,
    DiMsqlServer,
    DiMysql,
    DiPython,
    DiReact
} from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import Toolstack from "./ToolStacks";

const skills = [
    { icon: <DiJavascript1 />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <DiReact />, name: "React", color: "text-blue-400" },
    { icon: <DiHtml5 />, name: "HTML5", color: "text-orange-500" },
    { icon: <DiCss3 />, name: "CSS3", color: "text-blue-600" },
    { icon: <DiPython />, name: "Python", color: "text-white" },
    { icon: <DiMsqlServer />, name: "MS SQL Server", color: "text-yellow-500" },
    { icon: <DiMysql />, name: "MySQL", color: "text-yellow-500" },
    { icon: <DiJava />, name: "Java", color: "text-red-500" },
    { icon: <SiDotnet />, name: ".NET", color: "text-purple-700" }, // 👉 Thêm dòng này
    { icon: <DiBootstrap></DiBootstrap>, name: "Boostrap", color: "text-red-500" },
    { icon: <DiGit />, name: "Git", color: "text-red-500" },

];

export const SkillSets = () => {
    return (
        <section id="skills">
            <div className="container mx-auto py-10 space-y-14">
                <h2 className="text-3xl font-bold text-center mb-8">Professional Skillsets</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center border-2 border-gray-300 rounded-2xl p-4 transition-transform duration-300 hover:scale-110 hover:bg-gray-100 shadow-md`}
                        >
                            <div className={`${skill.color} text-6xl mb-2`}>{skill.icon}</div>
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
                <Toolstack />


            </div>

        </section>
    );

};