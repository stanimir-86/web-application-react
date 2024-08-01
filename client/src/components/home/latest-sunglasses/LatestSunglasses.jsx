import { Link } from 'react-router-dom'

export default function LatestSunglasses({
    _id,
    images,
    price,
    description,
    model,
    brand,
}) {
    const imageUrl = images && images.length > 0 ? images[0].url : '';

    return (

        <div className="item">
            {imageUrl ? (
                <img src={imageUrl} alt="sunglassesImage" />
            ) : (
                <p>No image available</p>
            )}
            <h3 className="model">{model}</h3>
            <div className="item-info">
                <p className="price">Price: €{price}</p>
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