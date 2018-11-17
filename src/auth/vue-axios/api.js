import instance from './instance'
import jwt from 'jsonwebtoken'

let tokenJson;

export function login(user, password){
    instance.post('/login', {
        login: user,
        senha: password
    }).then(function(response){
        const token = response.headers.autenticator;
        instance.defaults.headers.common['Authorization'] = 'bearer ' + token;
        localStorage.setItem("token", token);
        //console.log(localStorage.getItem('token'));
        //console.log('JSON convertido');
        tokenJson = jwt.decode(token);
        //console.log(tokenJson);
    });
};

export function verificaToken(token){
    /*
    console.log("TOKEN JSON É");
    console.log(tokenJson);
    */


};

export function testeInsumoList(){
    console.log("Entrou no teste de insumo");
    /*
    instance.get('/insumo/1',{
    }).then(function(response){
        console.log(response);
    });
    */
   instance.get('/insumo').then(function(response){
       //console.log("teste");
       //console.log(response.data);
       return response.data;
   });
}

//export default login