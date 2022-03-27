import { IonCol, IonGrid, IonLabel, IonRow, IonSegment, IonSegmentButton } from "@ionic/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";


const INFO_DE = {
    intro: (
        <p>
            RUINS steht für "Risk, Uncertainty and Insurance under Climate Change. Coastal Land Management on the German North Sea" -- a BMBF/FONA funded research project on uncertainty of climate change adaptation at the German coast of the North Sea.   
            We seek to investigate how different perceptions about uncertainty relate to data and projections about climate change. Furthermore, we extend the data analysis with model projections of exemplary management options in different sectors. These examples are intended to unveil different aspects of uncertainty, which are inherent to the topic of future projections and present decisions.
        </p>
    ),
    weather: (
        <p>
            In this chapter we provide visualisations to explore changes in observed weather data. As classic starting point, the local implication of global warming can be explored. We provide further topics like weather indices and drought indices to investigate how climate change manifests itself in different variables, at different stations and with different temporal aggregation.
            As a brief outlook into future projections based on climate models (see next chapter), we also include an aggregated version for the respective weather variables and indices.
        </p>
    ),
    climate: (null),
    uncertainty: (null),
    management: (null)
}

const INFO_EN = {
    intro: (
        <p>
            RUINS stands for "Risk, Uncertainty and Insurance under Climate Change. Coastal Land Management on the German North Sea" -- a BMBF/FONA funded research project on uncertainty of climate change adaptation at the German coast of the North Sea.   
            We seek to investigate how different perceptions about uncertainty relate to data and projections about climate change. Furthermore, we extend the data analysis with model projections of exemplary management options in different sectors. These examples are intended to unveil different aspects of uncertainty, which are inherent to the topic of future projections and present decisions.
        </p>
    ),
    weather: (
        <p>
            In this chapter we provide visualisations to explore changes in observed weather data. As classic starting point, the local implication of global warming can be explored. We provide further topics like weather indices and drought indices to investigate how climate change manifests itself in different variables, at different stations and with different temporal aggregation.
            As a brief outlook into future projections based on climate models (see next chapter), we also include an aggregated version for the respective weather variables and indices.
        </p>

    ),
    climate: (null),
    uncertainty: (null),
    management: (null)
}

const InfoSegment: React.FC = () => {
    // get the language settings
    const lang = useSelector((state: RootState) => state.language.lang);
    const [active, setActive] = useState<'intro' | 'weather'>('intro');
    const [info, setInfo] = useState<any>(null);

    // create the loader
    useEffect(() => {
        if (lang === 'en') {
            setInfo(INFO_EN[active]);
        } else if (lang === 'de') {
            setInfo(INFO_DE[active]);
        }
    }, [lang, active])
    
    return (
        <IonGrid>
            <IonRow>
                <IonCol size="12" sizeMd="4">
                    <IonSegment onIonChange={e => setActive(e.detail.value as any)} style={{flexDirection: 'column'}}>
                        <IonSegmentButton value="intro" color={active === 'intro' ? 'success' : 'default'}>
                            <IonLabel>{lang === 'en' ? 'About Ruins' : 'Mehr Info'}</IonLabel>
                            </IonSegmentButton>
                        <IonSegmentButton value="weather">
                            <IonLabel>{lang === 'en' ? 'Data exploration' : 'Datenexploration'}</IonLabel>
                            </IonSegmentButton>
                    </IonSegment>
                </IonCol>
                <IonCol size="12" sizeMd="8">
                    { info }
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default InfoSegment;