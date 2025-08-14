import { Link } from "react-router"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { HomeIcon } from "lucide-react"

export function About() {
    return(
        <div className="flex flex-col">
            <Link className="p-1 absolute" to={"/"}><Button className="w-12 -rotate-2"><HomeIcon/></Button></Link>
            <div className="h-1/12"/>
            <div className="flex flex-col items-center pt-12 pb-2">
                <Card className="rotate-6 w-72 bg-amber-100">
                    <h1 className="self-center text-6xl p-0">About</h1>
                </Card>
                <div className="pt-8 flex flex-col gap-6">
                    <Card className="w-72 p-5 -rotate-2 ml-2">
                        <p>Party Box. Is a multiplayer magic format where all players share the same deck and graveyard.</p>
                    </Card>
                    <Card className="w-72 p-5 rotate-2 mr-2">
                        <p>Players take turns and have 20 life as normal, however any card may be played face down as a land. When a card is played face down as a Land that Land has all Land types.</p>
                    </Card>
                    <Card className="w-72 p-5 -rotate-2 mr-2">
                        <p>There is no searching or shuffling the deck. In some cases, a card will have you search for a Land and put it onto the battlefield, for those cases you can just manifest the top card of the library as a Land of all Land types.</p>
                    </Card>
                    <Card className="w-72 p-5 rotate-2 ml-2">
                        <p>Cards that are the back of their respective game can be played as any card that the player can name from that game which has not been played yet this game.</p>
                    </Card>
                    <Card className="w-72 p-5 -rotate-2 mr-2">
                        <p>You will encounter some modified magic cards as well as some other surprises.</p>
                    </Card>
                    <Card className="w-72 p-5 rotate-2">
                        <p>Rules are pretty subjective in some of these cases so youll have to leave it up to the table, but we also are tracking some rulings in case you want to see what we think here.</p>
                        <Link to={"/rules"} className="self-end"><Button className="w-24 p-0 -rotate-6">Rules</Button></Link>
                    </Card>
                </div>
            </div>
        </div>
    )
}