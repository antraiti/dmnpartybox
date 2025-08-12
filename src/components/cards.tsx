import { Link } from "react-router"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { HomeIcon } from "lucide-react"

export function Cards() {
    return(
        <div className="flex flex-col">
            <Link className="p-1 absolute" to={"/"}><Button className="w-12 -rotate-2"><HomeIcon/></Button></Link>
            <div className="flex flex-col items-center pt-12 pb-12">
                <Card className="rotate-6 w-72">
                    <h1 className="self-center text-6xl p-0">Cards</h1>
                </Card>
                <div className="pt-12 flex flex-col gap-12">
                    <Card className="w-72 p-5">
                        <p>Come back later to see included cards!</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}