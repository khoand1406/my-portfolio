import { AboutSection } from "../components/About"
import { StarsBackground } from "../components/Background"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { ProjectSection } from "../components/Projects/ProjectSections"
import { SkillSets } from "../components/Skill/Skill"
import { ThemeToggle } from "../components/ThemeToggle"
export const Home= ()=> {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme toggle*/}
        <ThemeToggle></ThemeToggle>
        {/*Background effects */}
        <StarsBackground></StarsBackground>
        {/*Navbar */}
        <NavBar></NavBar>
        {/*Main Content */}
        <HeroSection />
        <AboutSection></AboutSection>
        <SkillSets></SkillSets>
        <ProjectSection/>
        {/*Footer */}

    </div>
}