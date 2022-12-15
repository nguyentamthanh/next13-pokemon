import Test from "../components/Test";

export default function Home({}) {
    function hello() {
        const x = "du lieu tu index"
        return x
    }

    return (
        <div>
            <div className="bg-green-500 h-screen">
                <div>
                    <Test test={hello}/>
                </div>
            </div>
        </div>
    )
}
