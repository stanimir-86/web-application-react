import { useState } from "react"
import { useParams } from "react-router-dom";

import commentsApi from "../../api/comments-api.js";
import { useGetOneSunglasses } from "../../hooks/use-sunglasses.js";

export default function Details() {
    const { sunglassesId } = useParams();
    const [sunglasses, setSunglasses] = useGetOneSunglasses(sunglassesId);

    const [username, setUsername] = useState('');
    const [newComment, setNewComment] = useState('');



    const commentSubmithandler = async (e) => {
        e.preventDefault();

        const resultComment = await commentsApi.create(sunglassesId, username, newComment)

        setSunglasses(oldState => ({
            ...prevState,
            newComment: {
                ...prevState.newComment,
                [resultComment._id]: resultComment,
            }
        }));

        setUsername('');
        setNewComment('');

    }
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

                <div className="item">
                    <h2>Comments:</h2>
                    <ul  >
                        {Object.keys(sunglasses.newComment || {}).length > 0
                            ? Object.values(sunglasses.newComment).map(x => (
                                <li key={newComment._id} >
                                    <p id="item-description">{newComment.username}:{x.text}</p>
                                </li>
                            ))
                            : <p id="item-description" >No comments.</p>
                        }
                    </ul>
                </div>
                <article className="item">
                    <label className="item-info" >Add new comment</label>
                    <form className="item-info" onSubmit={commentSubmithandler} >
                        <input className="details-availability"
                            type="text"
                            placeholder="Name"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <textarea className="details-availability"
                            name="comment"
                            placeholder="Commnet..."
                            onChange={(e) => setNewComment(e.target.value)}
                            value={newComment}

                        ></textarea>
                        <input className="details-btn" type="submit" value='Add Comment' />
                    </form>
                </article>
            </div>
        </section >
    )
}