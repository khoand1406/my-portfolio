import GitHubCalendar from "react-github-calendar";
export const GitHub= ()=>{
    return <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Coding</h2>
        <GitHubCalendar username="khoand1406" blockSize={15} blockMargin={5} colorScheme="light" fontSize={16}/>
    </div>
}