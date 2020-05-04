<template>
  <div id="listejoueuses">
    <h2>Liste des Joueuses</h2>
    <li v-for="joueuse in listejoueuses" :key="joueuse.id">
      
      {{joueuse.firstname}}
      {{joueuse.lastname}}
    </li>
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "listejoueuses",

  data() {
    return {
      listejoueuses: [],
      uri1: "http://localhost:8000/api/effectifj",
    };
  },

  methods: {
    getlisteeffectifj: function(){
axios.get(this.uri1).then(response => {
      this.listejoueuses = response.data.listejoueuses;
    })
    },
    
  },
  mounted() {
    this.getlisteeffectifj();
  }
};
</script>


<style>
#listejoueuses {
  background-color: #7f7f7f;
}
fieldset {
  background-color: #a8c6fa;
  opacity: 0.7;
  border-radius: 10px;
  margin-bottom: 5px;
  text-align: center;
  margin-left: 370px;
  margin-right: 370px;
}
</style>