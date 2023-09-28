import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'


function Login(){


    

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
            setEmailError('El email no tiene un formato válido');
          } else {
            setEmailError('');
          }
    };

    const actualizarPassword = (e) =>{
        setLogin({...login, password: e.target.value})

        if (!validatePassword(login.password)) {
            setPasswordError('La contraseña debe tener al menos 6 caracteres');
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
            <Col>
            <Form>
                <h1>Acceder</h1>
                <h3>Usa tu cuenta uniandes</h3>
                <Form.Group className='mb-6' controlId='formBasicEmail'>
                    <Form.Label>Users name or Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' onChange={actualizarEmail}/>
                    {emailError && <Form.Text className='text-danger'>{emailError}</Form.Text>}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' onChange={actualizarPassword}/>
                    {passwordError && <Form.Text className='text-danger'>{passwordError}</Form.Text>}
                </Form.Group>
                <Button variant='primary' onClick={handlePost}>Sing in</Button>
            </Form>
            </Col>
        </Container>
    )


}

export default Login;