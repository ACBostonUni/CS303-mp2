import TrainStops from "./components/TrainStops.tsx";
import type {Stop} from "./interfaces/Stop.ts";
import {useEffect, useState} from "react";




export default function App() {


    const [data, setData] = useState<Stop[]>([]);


    useEffect(() => {
        async function fetchData(): Promise<void> {

            const rawDt = await fetch("https://api-v3.mbta.com/stops?filter[route]=Green-B,Green-C,Green-D,Green-E");
            const {data: res}: {data: Stop[]} = await rawDt.json();
            setData(res);


        }

        fetchData()
            .then(() => console.log("Success"))
            .catch((e: Error) => console.log("Oh no, there was an error: " + e));
        console.log(data)
    }, [data.length]);

    return (
                <TrainStops data={data}/>

    )


}

