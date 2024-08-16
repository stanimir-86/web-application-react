import { useEffect, useState } from 'react'
import * as sunglassesAPI from '../api/sunglasess-api.js'
export function useGetAllSunglasses() {

    const [sunglasses, setSunglasses] = useState([]);

    useEffect(() => {
        sunglassesAPI.getAll()
            .then(result => setSunglasses(result));
    }, []);

    return [sunglasses, setSunglasses];
}

export function useGetOneSunglasses(sunglassesId) {
    const [sunglasses, setSunglasses] = useState({});

    useEffect(() => {
        (async () => {
            const result = await sunglassesAPI.getOne(sunglassesId);
            setSunglasses(result);
        })();
    }, [sunglassesId]);
    return [sunglasses, setSunglasses];

}

export function useCreateSunglasses() {

    const sunglassesCreateHandler = (sunglassesData) => sunglassesAPI.createSunglasses(sunglassesData);

    return sunglassesCreateHandler;
}

