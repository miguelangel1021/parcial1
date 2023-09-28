import Container  from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'



export default function Detail(){

    const role = () => {

        return true;
    }

    const params = useParams();
    const [parte, setParte] = useState({});

    useEffect(() => {
        const URL =
          "https://raw.githubusercontent.com/miguelangel1021/parcial1/master/datos.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            const selectedPart = data.find((m) => m.partName == params.partName);
            
            setParte(selectedPart);
          });
      }, {});

    console.log('Hola');
    return (

        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            {role && 
            <Row>
            <Col>
                <img src = {parte.image}></img>
            </Col>
            <Col>
                <h1>{parte.partName}</h1>
                <p>Car Marker: {parte.carMaker}</p>
                <p>Car Model: {parte.carModel}</p>
                <p>Car Year: {parte.carYear}</p>
                <p>Available: {parte.available}</p>
                <p>Price: {parte.price}</p>
                <p>Description: {parte.description}</p>
            </Col>
            </Row>
            }
        </Container>
    );

}
