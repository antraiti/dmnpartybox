import { Link } from "react-router"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { HomeIcon } from "lucide-react"
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

export function Cards() {
    const [cards, setCards] = useState<Array<any>>([]);
    const [selectedCard, setSelectedCard] = useState<string>("");
    const [searchVal, setSearchVal] = useState<string>("");

    useEffect(() => {
        fetch('cards.json')
        .then(response => response.json())
        .then(json => {
            setCards(json);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    const CardCard = (card: any) => {

        const unBlur = () => {
            setCards(prev => prev.map(c => {
                if (c.name === card.name) {
                    return {...c, blurred: false}
                }
                return c
            }))
        }

        return ( <div className="flex flex-col gap-2 align-middle justify-center">
            <Card className="relative p-2 pt-2 w-72 cursor-pointer hover:rotate-2 bg-blue-200" onClick={_ => selectedCard === card.name ? setSelectedCard("") : setSelectedCard(card.name)}>
                <div className={`flex -left-2 gap-3 h-6 absolute -top-10`}>
                    <Card className={`h-6 justify-center py-5 px-2 ${(Math.random() > 0.5) ? 'rotate-4' : '-rotate-4'} bg-fuchsia-200`}>{card.name}</Card>
                </div>
                {card.blurred && <p className="text-white absolute top-1/2 z-10 text-center w-full -rotate-45 text-2xl">click to spoil!</p>}
                <img className={`object-contain ${card.blurred ? "blur-xl" : ""}`} src={card.image} onClick={_ => unBlur()} />
            </Card>
            {
                selectedCard === card.name && 
                (card.rulings.length > 0 ?
                card.rulings.map((r: any) => {
                    return <Card className={`w-72 ${(Math.random() > 0.5) ? 'rotate-1' : '-rotate-1'} bg-amber-100`} key={r}>
                        <p>{r.text}</p>
                    </Card>
                })
                :
                <Card className={`w-72 ${(Math.random() > 0.5) ? 'rotate-1' : '-rotate-1'} bg-amber-100`}>
                    <p>No current rulings for this card!</p>
                </Card>)
            }
        </div>
        )
    }
    
    return(
        <div className="flex flex-col">
            <Link className="p-1 absolute" to={"/"}><Button className="w-12 -rotate-2"><HomeIcon/></Button></Link>
            <div className="flex flex-col items-center pt-12 pb-12">
                <Card className="rotate-6 w-72 bg-emerald-200">
                    <h1 className="self-center text-6xl p-0">Cards</h1>
                </Card>
                <div className="pt-2 flex flex-col gap-12">
                    <Card className="w-72 p-5">
                        <p>Cards will be added as we go! Click on a card to spoil and see its rulings.</p>
                    </Card>
                </div>
                <Input
                    className="w-72 mt-6"
                    placeholder="search" 
                    value={searchVal} 
                    onChange={e => setSearchVal(e.target.value)}
                />
                <div className="pt-16 flex flex-col gap-16">
                    {cards.filter(c => searchVal.length === 0 || c.name.toLocaleLowerCase().indexOf(searchVal.toLocaleLowerCase()) >= 0).map(c => CardCard(c))}
                </div>
            </div>
        </div>
    )
}