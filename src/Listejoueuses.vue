<template>
  <div id="listejoueuses">
    <h2>Liste des Joueuses</h2>
    <input type="text" v-model="joueuse.firstname" />
    <input type="text" v-model="joueuse.lastname" />
    <button v-on:click="addjoueuse">Ajouter une Joueuse</button>
    <li v-for="(joueuse) in listejoueuses" :key="joueuse.id">
      <Joueuse v-bind:joueuse="joueuse" @event_updatejoueuse="UpdateJ" @event_deletejoueuse="deletejoueuse"></Joueuse>
    </li>
    
  </div>
</template>
<script>
import axios from "axios";
import Joueuse from "./Joueuse";
export default {
  name: "listejoueuses",
  components: { Joueuse },
  data() {
    return {
      joueuse: {
        id: 0,
        firstname: "Prénom",
        lastname: "Nom"
      },
      listejoueuses: [],
      uri: "http://localhost:8000/api/effectifj/"
    };
  },

  methods: {
    getlisteeffectifj: function() {
      axios.get(this.uri).then(response => {
        this.listejoueuses = response.data.listejoueuses;
      });
    },
    addjoueuse: function() {
      axios.post(this.uri, this.joueuse).then(response => {
        console.log(response.data);
        this.getlisteeffectifj();
      });
    },
    UpdateJ: function(joueuse) {
      axios.put(this.uri + joueuse.id, joueuse).then(response => {
        console.log(reponse.data);
      });
    },
  
  deletejoueuse: function(joueuse) {
      axios.delete(this.uri + joueuse.id).then(response => {
        console.log(response.data);
        this.getlisteeffectifj();
      });
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
</style>