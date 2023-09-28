import Parte from './parte';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";


import  {useEffect, useState} from 'react';

function Partes(){


    const [partes, setPartes] = useState([]);

    useEffect(() => {
        const URL =
          "https://raw.githubusercontent.com/miguelangel1021/parcial1/master/datos.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setPartes(data);
          });
      }, []);

    return(<div className='container'>

        <Row>
            {partes.map(parte => <Col><Parte parte = {parte} key = {parte.partName}/></Col>)}
        </Row>
    </div>)

}

export default Partes;
