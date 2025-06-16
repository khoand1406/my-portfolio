import { SiGithub } from "react-icons/si";

const ProjectCard = ({ title, description, image, tags, demoUrl, githubUrl }) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
      <div className="h-105 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <SiGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;