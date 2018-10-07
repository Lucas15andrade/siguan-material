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
export default {
  data: () => ({
    loading: false,
    login: '',
    senha: ''
  }),

  methods: {
    login () {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/dashboard');
      }, 1000);
    },
    //Método que faz o login através do método http POST no backend
    logar:function(){
      //console.log(this.login);
      //console.log(this.senha);
      this.$http.post('http://ubicomp.eaj.ufrn.br:8080/SIGRU/login',{
        'login': this.login,
        'senha': this.senha
      }).then(response => {
        console.log(response.body);
        console.log(response.headers)
      })
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
