<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Insumos</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="retornarInsumos"
          hide-actions
          class="elevation-0">
          <template slot="items" slot-scope="props">
            <td>
              <v-avatar size="36px">
                <!--
                <img :src="props.item.avatar" :alt="props.item.username" />
                -->
              </v-avatar>
            </td>
            {{props.item.nome}}
            <td>{{ props.item.nome }}</td>
            
            <td class="text-xs-left">{{ props.item.descrição }}</td>
            <!--
            <td class="text-xs-left"><v-progress-linear :value="props.item.progress" height="5" :color="props.item.color"></v-progress-linear> </td>
            -->
            <td class="text-xs-right">
              <v-btn flat icon color="grey">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn flat icon color="grey">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
        <!-- Float Action Button -->
        <!-- <v-spacer></v-spacer> -->
        <v-btn
          @click="avancarCadastroInsumo"
          color="red"
          dark
          fab
          fixed
          bottom
          right>
        <v-icon>add</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn block color="primary" @click="teste">Login</v-btn>
      <!-- -->        
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
//import { Insumos } from '@/api/insumos';
import axios from 'axios';
import instance from '../../../auth/vue-axios/instance';
import testeInsumoList from '../../../auth/vue-axios/api';

// "../" volta um nível na hierarquia
 
export default {
  data () {
    return {
      usuario: '',
      insumos: [],
      self: this,
      headers: [
        {
          text: '',
          align: 'center',
          sortable: false,
          value: 'avatar'
        },
        {
          text: 'Insumo',
          align: 'left',
          value: 'name'
        },
        { text: 'Descrição', value: 'deadline' },
        { text: 'Unidade base', value: 'progress' },
        { text: 'Ações', value: 'action', align: 'right' },

      ],
      
    };
  },
  computed: {
    retornarInsumos () {
      console.log("Retornar insumo");

      instance.get('/insumo').then(function(response){
        //this.insumos = response.data;
        console.log("Dentro do get");
        return response.data;
        //console.log(insumos);
      });
      console.log("Retornando insumos");
      ///console.log(insumos);
      //return insumos;
    },

  },
  methods: {
    avancarCadastroInsumo() {
      //Direcionar para insumoCreate.vue
      //alert("Clicou no botão de cadastro de insumo");
      
      setTimeout(() => {
        this.$router.push({name: "insumo/cadastrar"});
      }, 1000);
      
    },

    teste(){
      this.axios.get("/insumo/5").then(function(response){
        console.log(response.data);
      });
    }
    
  }
};
</script>
