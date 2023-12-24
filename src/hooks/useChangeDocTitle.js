import { useEffect, useState } from "react";

export const useChangeDocTitle = () => {
    const [title, setTitle] = useState("title");

    useEffect(() => {
        document.title = title
    }, [title]);

    return { title, setTitle };
};