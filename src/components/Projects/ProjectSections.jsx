import { ArrowRight } from 'lucide-react'
import ProjectCard from './ProjectCards'
import { projects } from './projects'
export const ProjectSection=()=>{
    return <section id='projects' className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl font-bold md:text-4xl mb-4 text-center'>Projects</h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
        </p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
        {projects.map((project)=> (
            <ProjectCard key={project.id} {...project}/>
        ))};
    </div>
    <div className="text-center mt-12">
          <a
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium 
         transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]
         hover:scale-105 active:scale-95 w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/khoand1406/"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
    </div>
    </section>
    
}