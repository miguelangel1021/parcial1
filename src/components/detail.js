import Container  from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';



function Detail(props){


    const {intl} = props;

    const role1 = () => {

        const aleatorio = Math.random();
        console.log(aleatorio);
        if (aleatorio == 1)
            {return true;}
        else return false;
    }

    const params = useParams();
    const [parte, setParte] = useState({});
    const[role, setRole] = useState(true);

    useEffect(() => {
        const URL =
          "https://raw.githubusercontent.com/miguelangel1021/parcial1/master/datos.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            const selectedPart = data.find((m) => m.partName == params.partName);
            
            setParte(selectedPart);
          });

        const aleatorio = Math.round(Math.random());
        console.log(aleatorio);
        if (aleatorio == 1)
            { setRole(true)}
        else setRole(false);
      }, []);

    return (

        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            {role && 
            <Row>
            <Col>
                <img src = {parte.image}></img>
            </Col>
            <Col>
                <h1>{parte.partName}</h1>
                <p><FormattedMessage id="Car Marker"/>: {parte.carMaker}</p>
                <p><FormattedMessage id="Car Model"/>: {parte.carModel}</p>
                <p><FormattedMessage id="Car Year"/>: {parte.carYear}</p>
                <p><FormattedMessage id="Available"/>: {parte.available && <FormattedMessage id="Yes"/>} {!parte.available && <FormattedMessage id="No"/>}</p>
                <p><FormattedMessage id="Price"/>: {parte.price}</p>
                <p><FormattedMessage id="Description"/>: {parte.description}</p>
            </Col>
            </Row>
            }
            {!role && 
            <Row>
            <Col>
                <img src = {parte.image}></img>
            </Col>
            <Col>
                <h1>{parte.partName}</h1>
                <Row><input type="text"  value={intl.formatMessage({id: "Car Marker"})+": "+parte.carMaker }></input></Row>
                <Row><input type="text"  value={intl.formatMessage({id: "Car Model"})+": "+parte.carModel }></input></Row>
                <Row><input type="text"  value={intl.formatMessage({id: "Car Year"})+": "+parte.carYear }></input></Row>
                <Row><input type="text"  value={intl.formatMessage({id: "Available"})+": "+parte.available }></input></Row>
                <Row><input type="text"  value={intl.formatMessage({id: "Price"})+": "+parte.price }></input></Row>
                <Row><input type="text"   style={{width : '500px', heigth : '500px'}} value={intl.formatMessage({id: "Description"})+": "+parte.description }></input></Row>
            </Col>
            </Row>
            }
        </Container>
    );

}

export default injectIntl(Detail);