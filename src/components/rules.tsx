import { Link } from "react-router"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { HomeIcon } from "lucide-react"
import type { Ruling } from "@/models/ruling"
import { useEffect, useState } from "react"

export function Rules() {
    const [rules, setRules] = useState<Array<Ruling>>([]);
    const [filterOptions, setFilterOptions] = useState<Array<string>>([]);
    const [filter, setFilter] = useState<string>("");
    const numbers = Array.from({ length: Math.ceil(filterOptions.length / 3) }, (_, i) => i);

    useEffect(() => {
        fetch('rulings.json')
        .then(response => response.json())
        .then(json => {
            setRules(json);
            let distinctFilters: Array<string> = [];
            json.forEach((r: Ruling) => {
                if (!distinctFilters.some( d => d === r.game))
                    distinctFilters.push(r.game)
            })
            setFilterOptions(distinctFilters);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const RuleCard = (rule: Ruling, upDown: boolean) => {
        return <Card className={`w-72 p-5 relative ${upDown ? 'rotate-2' : '-rotate-2'}`} key={rule.title}>
            <div className={`flex -left-2 gap-3 h-6 absolute -top-10`}>
                <Card className={`h-6 justify-center px-5 ${!upDown ? 'rotate-4' : '-rotate-4'} bg-blue-200`}>{rule.title}</Card>
                <Card className={`h-6 justify-center py-5 px-2 ${(Math.random() > 0.5) ? 'rotate-4' : '-rotate-4'} bg-green-200`}>{rule.game}</Card>
            </div>
            <div className={`flex gap-2 absolute top-1 ${!upDown ? 'rotate-4' : '-rotate-4'}`}>
                {rule.tags.map((r) => <Card key={r} className={`h-2 p-3 text-sm justify-center ${(Math.random() > 0.5) ? 'rotate-4' : '-rotate-4'} bg-amber-100`}>{r}</Card>)}
            </div>
            <p className="pt-6">{rule.text}</p>
        </Card>
    }

    return(
        <div className="flex flex-col">
            <Link className="p-1 absolute" to={"/"}><Button className="w-12 -rotate-2"><HomeIcon/></Button></Link>
            <div className="flex flex-col items-center pt-12 pb-12">
                <Card className="-rotate-4 w-72 bg-blue-200">
                    <h1 className="self-center text-6xl p-0">Rulings</h1>
                </Card>
                <Card className="w-72 p-5">
                    <p>Rules can be decided at the table but if you cant agree or want to see what we decided here are ones that have come up.</p>
                </Card>
                <div className="my-5"/>
                <div className="grid grid-flow-col grid-rows-2 content-center gap-5 justify-center">
                    {numbers.map(n => 
                    <div className="flex gap-5">
                        {filterOptions.slice(n * 3, ((n * 3) + 3) > filterOptions.length ? filterOptions.length : ((n * 3) + 3)).map(fo =>
                            <Button 
                                className={`${(Math.random() > 0.5) ? 'rotate-4' : '-rotate-4'} ${filter=== fo ? "bg-green-200" : ""}`}
                                onClick={_ => filter === fo ? setFilter("") : setFilter(fo)}
                            >
                                {fo}
                            </Button>
                        )}
                        </div>
                    )}
                </div>
                <div className="pt-16 flex flex-col gap-16">
                    {
                        rules.filter(r => 
                            filter === ""
                            || filter === r.game)
                        .map((r, index) => RuleCard(r, index % 2 === 0))}
                </div>
            </div>
        </div>
    )
}