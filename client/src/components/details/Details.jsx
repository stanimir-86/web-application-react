import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOneSunglasses } from "../../hooks/use-sunglasses.js";
import { useForm } from "../../hooks/useForm.js";

import { useCreateComments, useGetAllCommnets } from "../../hooks/useComments.js";
import { useAuthContext } from "../../contexts/AuthContext.jsx";
import sunglassesAPI from "../../api/sunglasess-api.js";

const initialValues = {
    comment: '',
}
export default function Details() {
    const navigate = useNavigate();
    const { sunglassesId } = useParams();
    const [comments, setcomments] = useGetAllCommnets(sunglassesId);
    const createComment = useCreateComments();
    const { userId } = useAuthContext();
    const [sunglasses] = useGetOneSunglasses(sunglassesId);
    const { isAuthenticated } = useAuthContext();
    const {
        changeHnadler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(sunglassesId, comment)
            setcomments(oldComments => [...oldComments, newComment]);
        } catch (error) {
            console.log(error.message);

        }
    });
    const sunglassesDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete? ${sunglasses.brand}`)
        if (!isConfirmed) {
            return;
        }
        try {
            await sunglassesAPI.remove(sunglassesId)
            navigate('/');
        } catch (error) {
            console.log(error.message);

        }
    }
    const isOwner = userId === sunglasses._ownerId;
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
                        <p className="details-availability">{sunglasses.color}</p>
                        <p className="type">Type: {sunglasses.model}</p>
                        <p id="item-description">
                            {sunglasses.description}
                        </p>
                    </div>
                    {isOwner && (
                        <div id="action-buttons">
                            <Link to={`/sunglasses/${sunglassesId}/edit`} id="edit-btn">Edit</Link>
                            <a href="" onClick={sunglassesDeleteHandler} id="delete-btn">Delete</a>
                        </div>
                    )}
                </div>

                <div className="item">
                    <h2>Comments:</h2>
                    <ul  >
                        {comments.map(comment => (
                            < li key={comment._id} >
                                <p id="item-description">{comment.author.email}: {comment.text}</p>
                            </li>
                        ))
                        }
                    </ul>

                    {comments.length === 0 && < p style={{ fontSize: '20px', color: 'red', textAlign: "center" }} >No comments.</p>}
                </div>
                {isAuthenticated && (
                    <article className="item">
                        <label className="item-info" >Add new comment</label>
                        <form className="item-info" onSubmit={submitHandler} >

                            <textarea className="details-availability"
                                name="comment"
                                placeholder="Commnet..."
                                onChange={changeHnadler}
                                value={values.comment}

                            ></textarea>
                            <input className="details-btn" type="submit" value='Add Comment' />
                        </form>
                    </article>
                )}
            </div>
        </section >
    )
}