import { useEffect, useState } from 'react'
import * as sunglassesAPI from '../../api/sunglasess-api.js'
import SunglassesItem from './sunglasses-list-items/SunglassesListItem.jsx';


export default function Dashboard() {

    const [sunglasses, setSunglasses] = useState([]);

    useEffect(() => {
        sunglassesAPI.getAll()
            .then(result => setSunglasses(result));
    }, [])
    return (

        <section id="dashboard">
            {sunglasses.length > 0
                ? sunglasses.map(x => <SunglassesItem key={x._id} {...x} />)
                : <h3 className="item">No Sunglasses yet!</h3>
            }
        </section>

    )
}