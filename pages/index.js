import MainScreen from "../components/MainScreen";
import {useState} from "react";

export default function Home({}) {
    const [totalOfBlocks, setTotalOfBlocks] = useState(0);
    const [statusMatch, setStatusMatch] = useState("default");

    return (
        <div>
            <div className="h-screen">
                <div>
                    <MainScreen setTotalOfBlocks={setTotalOfBlocks}/>
                </div>
            </div>
        </div>
    );
}
