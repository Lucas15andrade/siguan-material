<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="/static/m.png" alt="SIGUAN" width="120" height="120">
                  <h1 class="flex my-4 primary--text">SIGUAN</h1>
                </div>                
                <v-form>
                  <v-text-field append-icon="person" name="login" label="Login" type="text" v-model="login"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Senha" id="password" type="password" v-model="senha"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <!--
                <v-btn icon>
                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fa fa-google fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                </v-btn> -->
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="logar" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import api from '../auth/vue-axios/instance';
import axios from 'axios';


export default {
  data: () => ({
    loading: false,
    ativo: false,
    login: 'admin',
    senha: 'adminsigru',
    self: this,
  }),

  methods: {

    
    logar:function(){
      //Fazendo o login através do método POST
      axios.post('http://ubicomp.eaj.ufrn.br:8080/SIGRU/login', {
        login : "admin",
        senha: "adminsigru"
      }).then(function(response){
        //Obtendo a resposta
        //console.log(response.data);
        console.log("Resposta");
        console.log(response.data);
        //console.log(response.headers.token);]
        //console.log(response.headers.autenticator);
        //localStorage.setItem("token",response.headers.autenticator);
        document.cookie = response.headers.autenticator;
        localStorage.setItem("token", response.headers.autenticator);
        console.log(localStorage.getItem("token"));
      });

    axios.get('http://ubicomp.eaj.ufrn.br:8080/SIGRU/insumos/listar',{

    }).then(function(response){

    });

      /*
    login () {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/dashboard');
      }, 1000);
    },
      */

      /*
      axios.get('http://ubicomp.eaj.ufrn.br:8080/SIGRU/login',{
        token: document.cookie
      }).then(function(response){
        console.log(response.data);
      });
      */
      /*
      console.log("TOKEN É ISSO: ");
      console.log(localStorage.getItem("token"));
      */
      /*
      axios.get('/insumo/listar', localStorage.token).then(function(response){
        console.log(response.data);
      });
      */
      /* 
        axios.get('http://ubicomp.eaj.ufrn.br:8080/SIGRU/insumo/listar', config).then(function(response){
          console.log(response.data)
        });
        */
      /*
      axios({
        method:'get',
        url:'http://ubicomp.eaj.ufrn.br:8080/SIGRU/insumo/listar',
        responseType:'stream',
        headers: config
      })
      .then(function (response) {
        //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        console.log(response.data)
      });
      */

      /*
      this.$http.post('http://ubicomp.eaj.ufrn.br:8080/SIGRU/login',{
        'login': this.login,
        'senha': this.senha
      }).then(response => {
        
        let token = response.headers.map.Autenticator;
        console.log(token);

        //localStorage.setItem("token","token");
        
        //this.$router.push({name: "insumo/cadastrar"});
        //console.log("Body");
        //console.log(response.body);
        console.log("Autenticador");
        console.log(response.headers.map.Autenticator);

        //authUser.data = response.body;
        //authUser.token = response.headers.map.Autenticador;
        window.localStorage.setItem('token', token);

        if(authUser.body.tipo == 'NUTRICIONISTA'){
          this.$router.push({name: "insumo/cadastrar"});
        }

      });
      */

    }
  }

};
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
