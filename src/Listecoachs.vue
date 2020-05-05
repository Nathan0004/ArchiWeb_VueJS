<template>
  <div id="modulecoachs">
    <h2>Liste des Coachs</h2>
    <div class="listecoachs">
    <li v-for="(coach) in listecoachs" :key="coach.id">
      <Coach v-bind:coach="coach" @event_updatecoach="UpdateC" @event_deletecoach="deletecoach"></Coach>
    </li>
    </div>
    <input type="text" v-model="coach.firstname" />
    <input type="text" v-model="coach.lastname" />
    <button v-on:click="addcoach">Ajouter un Coach</button>
  </div>
</template>
<script>
import axios from "axios";
import Coach from "./Coach";
export default {
  name: "listecoachs",
  components: { Coach },
  data() {
    return {
      coach: {
        id: 0,
        firstname: "Prénom",
        lastname: "Nom"
      },
      listecoachs: [],
      uri: "http://localhost:8000/api/effectif/"
    };
  },

  methods: {
    getlisteeffectif: function() {
      axios.get(this.uri).then(response => {
        this.listecoachs = response.data.listecoachs;
      });
    },
    addcoach: function() {
      axios.post(this.uri, this.coach).then(response => {
        console.log(response.data);
        this.getlisteeffectif();
      });
    },
    UpdateC: function(coach) {
      axios.put(this.uri + coach.id, coach).then(response => {
        console.log(reponse.data);
      });
    },

    deletecoach: function(coach) {
      axios.delete(this.uri + coach.id).then(response => {
        console.log(response.data);
        this.getlisteeffectif();
      });
    }
  },

  mounted() {
    this.getlisteeffectif();
  }
};
</script>


<style>
#modulecoachs {
  background-color: #7f7f7f;
}

.listecoachs {
  display : flex;
  justify-content: space-evenly;
  flex-wrap : wrap;
}
</style>