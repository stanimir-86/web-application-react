import { useEffect, useState } from "react"

import { useParams } from "react-router-dom";
import sunglassesAPI from "../../api/sunglasess-api.js";
export default function Details() {

    const [sunglasses, setSunglasses] = useState({});
    const { sunglassesId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await sunglassesAPI.getOne(sunglassesId);
            setSunglasses(result);
        })();
    }, []);
    return (
        <section id="details">
            <div id="details-wrapper">
                <div>
                    <img id="details-img" src={sunglasses.images} alt="example1" />
                    <p id="details-title">{sunglasses.brand}</p>
                </div>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p className="details-price">Price: €{sunglasses.price}</p>
                        <p className="details-availability">{sunglasses.description}</p>
                        <p className="type">Type: {sunglasses.brand}</p>
                        <p id="item-description">
                            {sunglasses.description}
                        </p>
                    </div>
                    {/* Edit and Delete are only for creator */}
                    <div id="action-buttons">
                        <a href="" id="edit-btn">Edit</a>
                        <a href="" id="delete-btn">Delete</a>
                    </div>
                </div>
            </div>
        </section>
    )
}