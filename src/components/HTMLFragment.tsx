import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const axios = require("axios").default;


interface HTMLFragmentProps {
    src: string;
}

const HTMLFragment: React.FC<HTMLFragmentProps> = ({ src }) => {
    // handle the state for loading HTML fragments
    const [content, setContent] = useState<string>('Loading...');
    const lang = useSelector((state: RootState) => state.language.lang);

    // go for the HTML fragment
    useEffect(() => axios.get(`/fragment/${src}.${lang}.html`).then((res: any) => setContent(res.data)), [src, lang]);

    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );
}

export default HTMLFragment;