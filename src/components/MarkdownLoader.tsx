import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { useEffect, useState } from "react";
import ReactMarkdown  from 'react-markdown';
import { useSelector } from "react-redux";
import { RootState } from "../store";

const axios = require('axios').default;


interface MarkdownLoaderProps {
    src: string;
}

const MarkdownLoader: React.FC<MarkdownLoaderProps> = ({ src }) => {
    // create a state for the page
    const [content, setContent] = useState<string>('Loading...');
    const lang = useSelector((state: RootState) => state.language.lang);
    
    // update content when source changes
    useEffect(() => axios.get(`/md/${src}.${lang}.md`).then((res: any) => setContent(res.data)), [src, lang]);

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="12" sizeLg="8" sizeMd="6" offset="0" offsetLg="0" offsetMd="0">
                    <ReactMarkdown children={content} />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default MarkdownLoader;