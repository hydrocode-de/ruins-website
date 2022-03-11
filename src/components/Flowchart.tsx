import { IonButton, IonCard, IonCardContent, IonCardHeader, IonItem, IonLabel, IonTitle } from "@ionic/react";
import ReactFlow from 'react-flow-renderer';


interface StreamlitCardProps {
    title: string;
    link: string;
}
const StreamlitCard: React.FC<StreamlitCardProps> = ({ title, link }) => (
    // <IonCard>
    //     <IonCardHeader>
    //         <IonTitle>{title}</IonTitle>
    //     </IonCardHeader>
    //     <IonCardContent>
    //         <IonButton routerLink={link} routerDirection="forward" color="primary">GO TO APP</IonButton>
    //     </IonCardContent>
    // </IonCard>
    <IonItem routerLink={link} routerDirection="forward">
        <IonLabel>
            <h2>{title}</h2>
            <p>Short description</p>
        </IonLabel>
    </IonItem>
)

const Flowchart: React.FC = () => {
    // build the elements
    const elements = [
        {id: '1', type: 'input', data: {label: 'Climate model data'}, position: {x: 100, y: 150}},
        {id: '2', type: 'input', data: {label: 'Historic Observations'}, position: {x: 300, y: 150}},
        {id: '10', data: {'label': <StreamlitCard title="Weather Explorer" link="/weather" />}, position: {x:200, y: 300}, style: {width: '250px'}},
        {id: 'e1-10', source: '1', target: '10', label: 'Load and analyze', animated: true},
        {id: 'e1-10', source: '2', target: '10', label: 'Learn from', animated: true},
    ];
    
    return (
        <div style={{height: 500, width: '100%'}}>
            <ReactFlow elements={elements} />
        </div>
    );
}

export default Flowchart;