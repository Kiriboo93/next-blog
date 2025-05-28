import { getComments } from "@/services/services";
import { useEffect, useState } from "react";


// Custom hook to get comments.
export const useFetchComments = (postSlug) => {
    // Variable to store comments.
    const [comments, setComments] = useState([]);
    // Variable to show loading.
    const [isLoading, setLoading] = useState<boolean>(true);

    // Hook to get comments, store them and hide loading.
    useEffect(() => {
        getComments(postSlug).then((data) => {
            setComments(data);
            setLoading(false);
        });
    }, []);

    return { comments, isLoading }
}