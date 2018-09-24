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
                    <v-subheader>Tipo do insumo</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      :items="itensInsumo"
                      label="Tipo de insumo"
                      item-text="tipo"
                      item-value="valor"
                      class="input-group--focused"
                    ></v-select>
                    <p>Item do insumo 0: {{this.itensInsumo[0]}}</p>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6>
                    <v-subheader>Unidade base do insumo</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      :items="itensInsumo"
                      label="Tipo de insumo"
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
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Proteínas</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de proteínas"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Carboidratos</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de carboidratos"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Lipídeos</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de liídeos"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Tamanho da amostra</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Tamanho da amostra"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Umidade</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Umidade"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Energia KCAL</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Valor da energia KCAL"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Colesterol</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de colesterol"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Energia KJ</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Energia KJ"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Fibra alimentar</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de fibra alimentar"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Cinzas</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de cinzas"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Cálcio</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de cálcio"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Magnésio</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de magnésio"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Fósforo</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de fósforo"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Ferro</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de ferro"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Sódio</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de sódio"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Potásio</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de potásio"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Manganês</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de Manganês"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Cobre</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de cobre"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                
                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Zinco</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de zinco"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Retinol</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de retinol"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>RE</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de RE"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>RAE</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de RAE"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Tiamina</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de tiamina"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Riboflavina</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de riboflavina"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>    

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Piridoxina</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de piridoxina"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Niacina</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de niacina"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>  

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Vitamina C</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de vitamina c"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Saturados</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de saturados"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>  

                <v-layout row>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Monoinsaturado</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de monoinsaturado"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <!-- Título a esquerda com campo -->
                    <v-subheader>Poliinsaturado</v-subheader>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      label="Quantidade de poliinsaturado"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs2>
                    <v-btn color="info">Salvar</v-btn>
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
    
      //itensInsumo: [],
      itensInsumo: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
    /*
    preencher: function(){
      items = JSON.parse(tipoInsumo);
      return items[1];
    }  
    */
  },
  created(){
    setTimeout(() => this.itensInsumo = selectValues, 1000)
  }
};
</script>