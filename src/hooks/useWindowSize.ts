import { useEffect, useState } from "react";

interface Size {
    width: number;
    height: number;
}

const useWindowSize = (): Size => {
    // state for storing the current size
    const [size, setSize] = useState<Size>({width: -1, height: -1});

    // useEffect to handle size changes
    useEffect(() => {
        // define a function to handle the change
        const handler = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        // add the event listener
        window.addEventListener("resize", handler);

        // call it directly on init
        handler();

        // return a function to remove the listener
        return () => window.removeEventListener("resize", handler);
    }, [])

    return size;
}

export default useWindowSize;