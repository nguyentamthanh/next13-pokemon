import MainScreen from "../components/MainScreen";
import {useState, useEffect} from "react";
import InteractScreen from "../components/InteractScreen";
import {shuffled} from "../utils/array"

export default function Home({}) {
    const [totalOfBlocks, setTotalOfBlocks] = useState(0);
    const [statusMatch, setStatusMatch] = useState("default");
    const [startedAt, setStartedAt] = useState(null);
    const [cardsContext, setCardsContext] = useState([]);
    useEffect(() => {
        const firstCards = Array.from(
            {length: totalOfBlocks / 2},
            (_, i) => i + 1
        );
        const secondCards = [...firstCards];
        const cards = [...firstCards, ...secondCards];
        const x = shuffled(shuffled(shuffled(shuffled(cards))))
        setCardsContext(x)
    }, [totalOfBlocks]);


    return (
        <div>
            {
                statusMatch === "default" &&
                <MainScreen setTotalOfBlocks={setTotalOfBlocks} setStatusMatch={setStatusMatch}/>
            }
            {
                statusMatch === "match" && <InteractScreen/>
            }
        </div>
    );
}
