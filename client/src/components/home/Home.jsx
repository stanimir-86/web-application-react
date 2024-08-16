import { useEffect, useState } from "react"
import sunglassesAPI from '../../api/sunglasess-api.js'
import LatestSunglasses from "./latest-sunglasses/LatestSunglasses.jsx";


export default function Home() {
    const [latestSunglasses, setLatestSunglasses] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await sunglassesAPI.getLatest();

            setLatestSunglasses(result)
        })();
    }, []);

    return (
        <section id="hero">

            {latestSunglasses.length > 0
                ? latestSunglasses.map(x => <LatestSunglasses key={x._id}{...x} />)
                : <h3 className="item">No Sunglasses yet!</h3>
            }
            {/* <img src="./images/Home.png" alt="home" /> */}
            <p>Thank you for your interest, we will contact you</p>
        </section>

    )
}




