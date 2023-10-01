import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import {FormattedMessage} from 'react-intl'
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';


function Login(props){


    const {intl} = props;

    const [login, setLogin] = useState({email: '', password: '', role: true});
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
      };
    
    const validatePassword = (password) => {
        return password.length >= 6;
      };


    const actualizarEmail = (e) =>{
        setLogin({...login, email: e.target.value})

        if (!validateEmail(login.email)) {
            setEmailError('The email does not have a valid format');
          } else {
            setEmailError('');
          }
    };

    const actualizarPassword = (e) =>{
        setLogin({...login, password: e.target.value})

        if (!validatePassword(login.password)) {
            setPasswordError('The password must be at least 6 characters long');
          } else {
            setPasswordError('');
          }
    };

    async function handlePost(){
        if (validateEmail(login.email) && validatePassword(login.password)) {
        console.log(login);
        }
    } 

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Col >
            <Form>
                <h1><FormattedMessage id="Login"/></h1>
                <h3><FormattedMessage id="Use your uniandes account"/></h3>
                <Form.Group className='mb-6' controlId='formBasicEmail'>
                    <Form.Label><FormattedMessage id="User name or Email"/></Form.Label>
                    <Form.Control type='email' placeholder={intl.formatMessage({id: "Enter email"})} onChange={actualizarEmail}/>
                    {emailError && <Form.Text className='text-danger'><FormattedMessage id={emailError}/></Form.Text>}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label><FormattedMessage id="Password"/></Form.Label>
                    <Form.Control type='password' placeholder={intl.formatMessage({id: "Password"})} onChange={actualizarPassword}/>
                    {passwordError && <Form.Text className='text-danger'><FormattedMessage id={passwordError}/></Form.Text>}
                </Form.Group>
                <Button variant='primary' onClick={handlePost}><Link style={{color: 'white'}} to={"/parts"} ><FormattedMessage id="Next"/></Link></Button>
            </Form>
            </Col>
        </Container>
    )


}

export default injectIntl(Login);