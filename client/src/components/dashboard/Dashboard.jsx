import { useGetAllSunglasses } from '../../hooks/use-sunglasses.js';
import SunglassesItem from './sunglasses-list-items/SunglassesListItem.jsx';



export default function Dashboard() {
    const [sunglasses] = useGetAllSunglasses()
    return (

        <section id="dashboard">
            {sunglasses.length > 0
                ? sunglasses.map(x => <SunglassesItem key={x._id} {...x} />)
                : <h3 className="item">No Sunglasses yet!</h3>
            }
        </section>

    )
}