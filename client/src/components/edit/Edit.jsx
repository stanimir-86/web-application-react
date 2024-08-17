
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm.js"
import { useGetOneSunglasses } from "../../hooks/use-sunglasses.js";
import sunglassesAPI from "../../api/sunglasess-api.js";



export default function Edit() {
    const navigate = useNavigate();
    const { sunglassesId } = useParams();
    const [sunglasses] = useGetOneSunglasses(sunglassesId);

    const {
        changeHnadler,
        submitHandler,
        values,
    } = useForm(sunglasses, async (values) => {
        const isConfirmed = confirm('Are you sure  you want to update?');
        if (isConfirmed) {
            await sunglassesAPI.update(sunglassesId, values);
            navigate(`/sunglasses/${sunglassesId}/details`);

        }
    }, { reinitializaForm: false });



    return (
        <section id="edit">
            <div className="form form-item">
                <h2>Edit Sunglasses</h2>
                <form className="edit-form" onSubmit={submitHandler}>
                    <input onChange={changeHnadler} value={values.brand} type="text" name="brand" id="item" placeholder="brand" />
                    <input onChange={changeHnadler} value={values.images} type="text" name="images" id="item-image" placeholder="Your sunglasses Image URL" />
                    <input onChange={changeHnadler} value={values.price} type="text" name="price" id="price" placeholder="Price in Euro" />
                    <input onChange={changeHnadler} value={values.color} type="text" name="color" id="availability" placeholder="color" />
                    <input onChange={changeHnadler} value={values.model} type="text" name="model" id="type" placeholder="Model Type" />
                    <textarea onChange={changeHnadler} value={values.description} id="description" name="description" placeholder="More About The Sunglasses" rows="10" cols="50"></textarea>
                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    )
}