import { useEffect, useState } from "react";

interface Response{
    loading: boolean;
    data: null | any;
}

const useFetch = (url: string): Response=> {
    const [loading, setLoading ] = useState(false);
    const [data, setData] = useState(null);

    // fungsi asinkron
    const fetcher = async (url: string) => {
        setLoading(true); // set loading to true
        const res = await fetch(url);  // request http ke url yang diberikan, resultnya disimpan di res 
        const data = await res.json(); // res diubah ke json, resultnya disimpan di data
        setData(data);  // update response data to state data
        setLoading(false);
    }  

    // useEffect akan dijalankan ketika url berubah
    useEffect(() => {
        fetcher(url);
    },[url]);
    
    return {loading, data};
};

export default useFetch;