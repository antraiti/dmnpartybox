import { Link } from "react-router"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

export function Home() {
    return(
        <div className="flex flex-col h-screen">
            <div className="h-1/5"/>
            <div className="flex flex-col items-center">
                <Card className="rotate-6 w-72">
                    <h1 className="self-center text-6xl p-0 -rotate-6">DMN</h1>
                    <h1 className="self-center text-6xl">Party</h1>
                    <h1 className="self-center text-6xl -rotate-6">Deck</h1>
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