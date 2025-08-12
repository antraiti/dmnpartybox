import { Link } from "react-router"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { HomeIcon } from "lucide-react"

export function Rules() {
    return(
        <div className="flex flex-col">
            <Link className="p-1 absolute" to={"/"}><Button className="w-12 -rotate-2"><HomeIcon/></Button></Link>
            <div className="flex flex-col items-center pt-12 pb-12">
                <Card className="-rotate-4 w-72 bg-blue-200">
                    <h1 className="self-center text-6xl p-0">Rulings</h1>
                </Card>
                <div className="pt-12 flex flex-col gap-12">
                    <Card className="w-72 p-5">
                        <p>Rules can be decided at the table but if you cant agree or want to see what we decided here are ones that have come up.</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}