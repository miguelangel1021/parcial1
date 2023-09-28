import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function Parte(props){

    return(
        <Card style = {{width: '18rem', height: '24rem'}} className = "mb-3">
            <Card.Img style = {{height: '14rem'}} variant="top" src={props.parte.image} alt= {props.parte.description} />
            <Card.Body>
                <Card.Title>
                    <Link to={"/parts/" + props.parte.partName} >
                        {props.parte.partName}
                    </Link>
                </Card.Title>
                <Card.Subtitle>{props.parte.carMaker}</Card.Subtitle>
                <Card.Text>{props.parte.price + ' - ' + props.parte.carYear }</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Parte;