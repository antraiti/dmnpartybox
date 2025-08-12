import { Link } from "react-router"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { HomeIcon } from "lucide-react"

export function Cards() {
    return(
        <div className="flex flex-col">
            <Link className="p-1" to={"/"}><Button className="w-12 -rotate-2"><HomeIcon/></Button></Link>
            <div className="flex flex-col items-center pt-12 pb-12">
                <Card className="rotate-6 w-72">
                    <h1 className="self-center text-6xl p-0">Cards</h1>
                </Card>
                <div className="pt-12 flex flex-col gap-12">
                    <Card className="w-72 p-5">
                        <p>Party Deck (or box). Is a multiplayer magic format where all players draw from the same deck.</p>
                    </Card>
                    <Card className="w-72 p-5">
                        <p>Players take turns and have 20 life as normal, however any card may be played as a land. When done so it is played face down and counts as all basic land types.</p>
                    </Card>
                    <Card className="w-72 p-5">
                        <p>You will encounter some modified magic cards as well as some other surprises. Cards that are the back of their respective game can be played as any card that the player can name from that product that has not been named this game.</p>
                    </Card>
                    <Card className="w-72 p-5">
                        <p>You will encounter some modified magic cards as well as some other surprises. Cards that are the back of their respective game can be played as any card that the player can name from that product that has not been named this game.</p>
                    </Card>
                    <Card className="w-72 p-5">
                        <p>Rules are pretty subjective in some of these cases so youll have to leave it up to the table, but we also are tracking some rulings in case you want to see what we think here.</p>
                        <Link to={"/rules"} className="self-end"><Button className="w-24 p-0 -rotate-6">Rules</Button></Link>
                    </Card>
                </div>
            </div>
        </div>
    )
}