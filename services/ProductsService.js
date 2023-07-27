import axios from 'axios';
import { useEffect, useState } from 'react'

const ProductsService = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                axios.get(url)
                    .then((json) => setData(json.data.products))
                    .finally(() => setLoading(false));
            } catch (error) {
                setError(true);
            }
        };
        fetchData();
    }, [url])
}

export default ProductsService