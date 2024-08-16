import { useEffect, useState } from "react";
import comentsAPI from "../api/comments-api.js";

export function useCreateComments() {
    const createHandler = (sunglassesId, comment) => comentsAPI.create(sunglassesId, comment)

    return createHandler;
}

export function useGetAllCommnets(sunglassesId) {
    const [comments, setComments] = useState([]);
    (async () => {
        const result = await comentsAPI.getAll(sunglassesId);
        console.log(result);

        setComments(result);
    })();
    useEffect(() => {

    }, [sunglassesId]);
    return [comments, setComments];
}