import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (data_type, data_id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        const res = await axios.get(`/api/v1/${data_type}/${data_id}`);

        setData(res.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return [data, loading];
};
