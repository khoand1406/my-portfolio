import { ThemeToggle } from "../components/ThemeToggle"
import {StarsBackground} from "../components/Background"
export const Home= ()=> {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme toggle*/}
        <ThemeToggle></ThemeToggle>
        {/*Background effects */}
        <StarsBackground></StarsBackground>
        {/*Navbar */}

        {/*Main Content */}

        {/*Footer */}

    </div>
}