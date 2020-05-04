<template>
  <div id="listecoachs">
    
    <h2>Liste des Coachs</h2>
    <li v-for="coach in listecoachs" :key="coach.id">
      
      {{coach.firstname}}
      {{coach.lastname}}
    </li>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "listecoachs",

  data() {
    return {
      listecoachs: [],
      uri1: "http://localhost:8000/api/effectif",
    };
  },

  methods: {
    getlisteeffectif: function(){
axios.get(this.uri1).then(response => {
      this.listecoachs = response.data.listecoachs;
    })
    },   
  },
  mounted() {
    this.getlisteeffectif();
    
  }
};
</script>


<style>
#listecoachs {
  background-color: #7f7f7f;
}
</style>