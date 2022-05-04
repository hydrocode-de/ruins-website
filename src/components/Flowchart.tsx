import { IonButton, IonCard, IonCardContent, IonCardHeader, IonItem, IonLabel, IonTitle } from "@ionic/react";
import ReactFlow from 'react-flow-renderer';


interface StreamlitCardProps {
    title: string;
    link?: string;
    description?: string;
}
const StreamlitCard: React.FC<StreamlitCardProps> = ({ title, link, description }) => (
    <IonItem routerLink={link ? link : '#'} routerDirection="forward">
        <IonLabel className="ion-text-wrap">
            <h2>{title}</h2>
            {description ? <p>{description}</p> : <p></p> }
        </IonLabel>
    </IonItem>
)

const Flowchart: React.FC = () => {
    // build the elements
    const elements = [
        {id: '1', type: 'input', data: {label: 'Historic Observations'}, position: {x: 200, y: 50}},
        {id: '2', type: 'input', data: {label: 'Climate model data'}, position: {x: 500, y: 50}},
        {id: '10', data: {'label': <StreamlitCard title="Weather Explorer" link="/weather" description="Explore the North Sea weather" />}, position: {x: 200, y: 200}, style: {width: '250px'}},
        {id: '20', data: {'label': <StreamlitCard title="Climate Explorer" link="/climate" description="Learn about climate projections" />}, position: {x: 500, y: 200}, style: {width: '250px'}},
        {id: '30', data: {'label': <StreamlitCard title="Uncertainty" link="/uncertainty" description="Explore core concepts of Uncertainty" />}, position: {x: 850, y: 200}, style: {width: '250px'} },
        {id: '40', data: {'label': <StreamlitCard title="TOPIC: Agriculture" description="Learn about Agriculture" />}, position: {x: 250, y: 400}, style: {width: '350px'}},
        {id: 'e1-10', source: '1', target: '10', label: 'Load and analyze', animated: true},
        {id: 'e2-20', source: '2', target: '20', label: 'Inspect and learn', animated: true},
        {id: 'e10-40', source: '10', target: '40', label: 'Load data', animated: true},
        {id: 'e20-40', source: '20', target: '40', label: 'Load RCPs', animated: true},
        {id: 'e30-40', source: '30', target: '40', label: 'process information', animated: true},
    ];
    
    return (
        <div style={{height: '100%', minHeight: 600, width: '100%'}}>
            <ReactFlow elements={elements} minZoom={1} maxZoom={1} preventScrolling={false} nodesDraggable={false} />
        </div>
    );
}

export default Flowchart;