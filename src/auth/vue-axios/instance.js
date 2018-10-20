/* global localStorage */

import axios from 'axios'

const API_URL = process.env.API_URL || 'http://ubicomp.eaj.ufrn.br:8080/SIGRU'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
});
 /*
export default {
  api
}
*/