import { Link } from 'react-router-dom'

export default function LatestSunglasses({
    _id,
    images,
    price,
    description,
    model,
    brand,
    color,
}) {


    return (

        <div className="item">

            <img src={images} alt="sunglassesImage" />

            <h3 className="model">{model}</h3>
            <div className="item-info">
                <p className="price">Price: €{price}</p>
                <p className="price">Color: {color}</p>
                <p className="availability">
                    {description}
                </p>
                <p className="type">Type: {brand}</p>
            </div>
            <Link className="details-btn" to={`/sunglasses/${_id}/details`}>
                Uncover More
            </Link>
        </div>
    )
}