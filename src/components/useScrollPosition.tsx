import { useEffect, useState } from "react";

const useScrollPosition = () => {
    // create a State to store position
    const [pos, setPos] = useState<number>(0);

    // listen to window event
    useEffect(() => {
        // creaze the handler
        const updateHandler = () => setPos(window.scrollY)

        // add event handler
        window.addEventListener('scroll', updateHandler);

        // run the handler once on init
        updateHandler();

        // return the remove function
        return () => window.removeEventListener('scroll', updateHandler);
    }, []);

    // return current position
    return pos;
}

export default useScrollPosition;