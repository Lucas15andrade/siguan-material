import Vue from 'vue';
import VueAxios from 'vue-axios';

import instance from './instance';

Vue.use(VueAxios, instance);

export default instance;
