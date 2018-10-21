import instance from './instance'
import jwt from 'jsonwebtoken'

function login(user, password){
    instance.post('/login', {
        login: user,
        senha: password
    }).then(function(response){
        const token = response.headers.autenticator;
        instance.defaults.headers.common['Authorization'] = 'bearer ' + token;
        localStorage.setItem("token", token);
        console.log(localStorage.getItem('token'));
        console.log('JSON convertido');
        let teste = jwt.decode(token, {json: true});
        console.log(teste);
    });
}

export default login