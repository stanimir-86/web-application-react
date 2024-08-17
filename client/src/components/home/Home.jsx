import { useEffect, useState } from "react"
import sunglassesAPI from '../../api/sunglasess-api.js'
import LatestSunglasses from "./latest-sunglasses/LatestSunglasses.jsx";


export default function Home() {
    const [latestSunglasses, setLatestSunglasses] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await sunglassesAPI.getAll();
            setLatestSunglasses(result.reverse().slice(0,3));


        })();
    }, []);

    return (
        <section id="hero">
            <h1>Latest Sunglasses</h1>
            {latestSunglasses.length > 0
                ? latestSunglasses.map(sunglasses => <LatestSunglasses key={sunglasses._id}{...sunglasses} />)
                : <h3 className="item">No Sunglasses yet!</h3>
            }

            <p>Thank you for your interest, we will contact you</p>
        </section>

    )
}




