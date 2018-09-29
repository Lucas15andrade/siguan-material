<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <!-- Aqui começa o card de cadastro de insumos -->
          <v-widget title="Cadastro de insumos">
            <div slot="widget-content">
              <v-container grid-list-xl text-xs-center fluid>
                <v-layout row>
                  <v-flex xs6>
                    <v-text-field
                      label="Nome do insumo"
                      v-model="email"
                      prepend-icon="place"
                      :rules="[rules.required]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>                
                <v-layout row>
                  <v-flex xs6>
                    <v-textarea
                    label="Descrição do insumo"
                    prepend-icon="place"
                    :rules="[rules.required]">
                    </v-textarea>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6>
                    <v-select
                      :items="itensInsumo"
                      label="Tipo de insumo"
                      prepend-icon="place"
                      item-text="tipo"
                      item-value="valor"
                      class="input-group--focused"
                    ></v-select>
                    <p>Item do insumo 0: {{this.itensInsumo[0]}}</p>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6>
                    <v-select
                      :items="itensInsumo"
                      label="Tipo de insumo"
                      prepend-icon="place"
                      item-text="tipo"
                      item-value="valor"
                      class="input-group--focused"
                    ></v-select>
                    <p>Item do insumo 0: {{this.itensInsumo[0]}}</p>
                  </v-flex>
                </v-layout>              
              </v-container>
            </div>
          </v-widget>
          <v-widget title="Análise química">
            <div slot="widget-content">
              <v-container>
                <v-layout row>
                  <v-flex xs5>
                    <v-text-field
                      prepend-icon="place"
                      label="Quantidade de proteínas"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs5>
                    <v-text-field
                      prepend-icon="place"
                      label="Quantidade de carboidratos"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de lipídeos"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
              
                  <v-flex xs5>
                    <v-text-field
                      label="Tamanho da amostra"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
              
                  <v-flex xs5>
                    <v-text-field
                      label="Umidade"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Valor da energia KCAL"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de colesterol"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
        
                  <v-flex xs5>
                    <v-text-field
                      label="Energia KJ"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de fibra alimentar"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de cinzas"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de cálcio"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de magnésio"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de fósforo"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de ferro"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de sódio"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de potásio"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de Manganês"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de cobre"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                
                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de zinco"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de retinol"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de RE"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de RAE"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de tiamina"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de riboflavina"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>    

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de piridoxina"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de niacina"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>  

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de vitamina c"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de saturados"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>  

                <v-layout row>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de monoinsaturado"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  
                  <v-flex xs5>
                    <v-text-field
                      label="Quantidade de poliinsaturado"
                      prepend-icon="place"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs8>
                    <v-btn color="info" bottom="true" right="true">Salvar</v-btn>
                  </v-flex>
                  
                </v-layout>
    
              </v-container>
            </div>
          
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
    <!--
    <v-btn small fab dark falt fixed bottom="bottom" right="right" class="setting-fab" color="red" @click="cadastrarInsumo">
      <v-icon>settings</v-icon>
    </v-btn>
    -->
  </div>
</template>

<script>
//Importando compoente de card do Material Design
import VWidget from "@/components/VWidget";
import tipoInsumo from "@/api/tipoInsumo";
import Countries from "@/api/country";
export default {
  components: {
    VWidget
  },
  data() {
    return {
      itensInsumo: [],
      insumos: tipoInsumo,
      valor: "",
      countries: Countries,
      email: "",
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {
    cadastrarInsumo() {}
  },
  computed: {
    insumos() {
      return tipoInsumo;
    }
  },
  created: {}
};
</script>