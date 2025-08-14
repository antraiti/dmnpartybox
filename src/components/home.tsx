import { Link } from "react-router"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

export function Home() {
    return(
        <div className="flex flex-col h-screen">
            <div className="h-12 md:h-1/5"/>
            <div className="flex flex-col items-center">
                <Card className="rotate-6 w-72 z-20 ml-12 bg-amber-100">
                    <h1 className="self-center text-6xl p-0">DMN</h1>
                </Card>
                <Card className="-rotate-6 w-72 z-10 mr-16 bg-blue-200">
                    <h1 className="self-center text-6xl">Party</h1>
                </Card>
                <Card className="rotate-2 w-72 ml-4 bg-emerald-200">
                    <h1 className="self-center text-6xl">Box</h1>
                </Card>
                <div className="pt-12 w-56 flex flex-col gap-6">
                    <div className="flex justify-between">
                        <Link to={"/about"}><Button className="-rotate-6">About</Button></Link>
                        <Link to={"/rules"}><Button className="rotate-6">Rulings</Button></Link>
                    </div>
                    <div className="flex justify-center">
                        <Link to={"/cards"}><Button className="-rotate-2">Cards</Button></Link>
                        {/* <Link to={"/about"}><Button className="-rotate-4">About</Button></Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}