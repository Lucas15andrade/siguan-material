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
                <img :src="props.item.avatar" :alt="props.item.username" />
              </v-avatar>
            </td>
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.deadline }}</td>
            <td class="text-xs-left"><v-progress-linear :value="props.item.progress" height="5" :color="props.item.color"></v-progress-linear> </td>
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
        <v-btn
          @click="avancarCadastroInsumo()"
          color="red"
          dark
          fab
          fixed
          bottom
          right>
        <v-icon>add</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <!-- -->        
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import { Insumos } from '@/api/insumos';
export default {
  created() {
        this.$http.post('http://ubicomp.eaj.ufrn.br:8080/SIGRU/login',{
          'login': 'admin',
          'senha': 'adminsigru'
        }).then(response => {

          this.usuario = response.body;
          console.log(this.usuario);

          /*
          this.insumos = response.body;
          alert(response.body);
          console.log(response.body);
          */
        })
      },
  data () {
    return {
      usuario: '',
      insumos: [],
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
      return Insumos;
    }
  },
  methods: {
    avancarCadastroInsumo(){
      //Direcionar para insumoCreate.vue
      alert("Clicou no botão de cadastro de insumo");
    }
  }
};
</script>
