<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <!-- Aqui começa o card de cadastro de insumos -->
          <v-widget title="Cadastro de insumos">
            <div slot="widget-content">
              <v-container>
                <v-layout row>
                  <v-flex xs4>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Nome do insumo</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      label="Nome do insumo"
                      v-model="email"
                      :rules="[rules.required]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>                
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Descrição do insumo</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-2"
                      label="Descrição do insumo"
                      multi-line
                      :rules="[rules.required]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6>
                    <v-subheader>Standard</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      :items="items"
                      label="Tipo de insumo"
                      
                      class="input-group--focused"
                    ></v-select>
                    {{preencher}}
                  </v-flex>
                </v-layout>
                                                    
              </v-container>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
//Importando compoente de card do Material Design
import VWidget from '@/components/VWidget';
import tipoInsumo from '@/api/tipoInsumo';
import Countries  from '@/api/country';
export default {
  components: {
    VWidget
  },
  data () {
    return {


      items: [],
      insumos: tipoInsumo,
      valor: '',
      countries: Countries,
      email: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        }    
      },
    };
  },
  computed: {
    /*
    preencher: function(){
      items = JSON.parse(tipoInsumo);
    }*/
  },  
  methods: {
  
    preencher: function(){
      items = JSON.parse(tipoInsumo);
      return items[1];
    }  
  }
  
};
</script>