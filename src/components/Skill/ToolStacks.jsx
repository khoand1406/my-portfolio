
import {
    SiJirasoftware,
    SiMacos,
    SiPostman,
    SiSlack,
    SiVercel,
    SiVsco,
} from "react-icons/si";

const tools = [
  { icon: <SiJirasoftware />, name: "Jira" },
  { icon: <SiVsco />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiVercel />, name: "Vercel" },
];

export default function Toolstack() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow hover:shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="text-5xl text-gray-700 dark:text-gray-200 mb-2">
              {tool.icon}
            </div>
            <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
