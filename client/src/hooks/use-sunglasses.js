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