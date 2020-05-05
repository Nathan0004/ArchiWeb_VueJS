<template>
  <div id="listematchs">
    <h2>Liste des Matchs</h2>
    <input type="text" v-model="match.titre" />
    <input type="text" v-model="match.date" />
    <input type="time" v-model="match.heure" />
    <input type="text" v-model="match.adresse" />
    <input type="text" v-model="match.matchcoach" />
    <input type="text" v-model="match.AG" />
    <input type="text" v-model="match.BU" />
    <input type="text" v-model="match.AD" />
    <input type="text" v-model="match.MG" />
    <input type="text" v-model="match.MC" />
    <input type="text" v-model="match.MD" />
    <input type="text" v-model="match.DCG" />
    <input type="text" v-model="match.DG" />
    <input type="text" v-model="match.DCD" />
    <input type="text" v-model="match.DD" />
    <input type="text" v-model="match.G" />
    <button v-on:click="addmatch">Ajouter un Match</button>
    <li v-for="(match) in listematchs" :key="match.id">
      <Match v-bind:match="match" @event_updatematch="UpdateM" @event_deletematch="deletematch"></Match>
    </li>
    
  </div>
</template>
<script>
import axios from "axios";
import Match from "./Match";
export default {
  name: "listematchs",
  components: { Match },
  data() {
    return {
      match: {
        id: 0,
        titre: "titre",
        date: "date",
        heure: "00:00",
        adresse: "adresse",
        matchcoach: "matchcoach",
        AG : "AG",
        BU : "BU",
        AD : "AD",
        MG : "MG",
        MC : "MC",
        MD : "MD",
        DG : "DG",
        DCG : "DCG",
        DCD : "DCD",
        DD : "DD",
        G : "G",

      },
      listematchs: [],
      uri: "http://localhost:8000/api/matchs/"
    };
  },

  methods: {
    getlistematch: function() {
      axios.get(this.uri).then(response => {
        this.listematchs = response.data.listematchs;
      });
    },
    addmatch: function() {
      axios.post(this.uri, this.match).then(response => {
        console.log(response.data);
        this.getlistematch();
      });
    },
    UpdateM: function(match) {
      axios.put(this.uri + match.id, match).then(response => {
        console.log(reponse.data);
      });
    },

    deletematch: function(match) {
      axios.delete(this.uri + match.id).then(response => {
        console.log(response.data);
        this.getlistematch();
      });
    }
  },

  mounted() {
    this.getlistematch();
  }
};
</script>


<style>
#listematchs {
  background-color: #7f7f7f;
}
</style>