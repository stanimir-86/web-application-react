import { useNavigate } from 'react-router-dom'
import { useCreateSunglasses } from "../../hooks/use-sunglasses.js"
import { useForm } from "../../hooks/useForm.js"
import { useState } from 'react'
const initialValues = {
    brand: '',
    images: '',
    price: '',
    color: '',
    model: '',
    description: '',
}

export default function Create() {
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const createSunglasses = useCreateSunglasses();

    const createHandler = async (values) => {

        if (!values.brand || !values.images || !values.price || !values.color ||
            !values.color || !values.model || !values.description
        ) {
            return setError('Please fill form data!');
        }

        try {
            const { _id: sunglassesId } = await createSunglasses(values);
            navigate(`/sunglasses/${sunglassesId}/details`);

        } catch (err) {
            setError(err.message);


        }

    }


    const { values, changeHnadler, submitHandler } = useForm(initialValues, createHandler)
    return (
        <section id="create">
            <div className="form form-item">
                <h2>Share Your item</h2>
                <form className="create-form" onSubmit={submitHandler}>
                    <label htmlFor="brand"></label>
                    <input type="text" name="brand" id="item" value={values.brand} onChange={changeHnadler} placeholder="Brand" />
                    <input type="text" name="images" id="item-image" value={values.images} onChange={changeHnadler} placeholder="Your sunglasses images" />
                    <input type="text" name="price" id="price" value={values.price} onChange={changeHnadler} placeholder="Price in Euro" />
                    <input type="text" name="color" id="availability" value={values.color} onChange={changeHnadler} placeholder="Color Information" />
                    <input type="text" name="model" id="type" value={values.model} onChange={changeHnadler} placeholder="Sunglasses model" />
                    <textarea id="description" name="description" value={values.description} onChange={changeHnadler} placeholder="More About The Item" rows="10" cols="50"></textarea>
                    {error && (
                        <p>
                            <span style={{ fontSize: '20px', color: 'red', textAlign: "center" }}>{error}</span>
                        </p>
                    )}
                    <button type="submit">Add</button>
                </form>
            </div>
        </section>
    )
}