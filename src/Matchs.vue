<template>
  <div id="MatchsModule">
    <h1>Matchs</h1>

    <li v-for="match in listematchs" :key="match.id">
      <div class="matchlayout">
        <h2>{{ match.titre}}</h2>
        <p>
          <em>
            <strong>Date et heure:</strong>
          </em>
          Le {{match.date}} à {{match.heure}}
        </p>
        <p>
          <em>
            <strong>Adresse</strong>
          </em>
          : {{match.adresse}}
        </p>
        <p>
          <em>
            <strong>Coach du jour</strong>
          </em>
          : {{match.matchcoach}}
        </p>

        <div class="composition">
          <div class="Attaque">{{match.AG}} {{match.BU}} {{match.AD}}</div>
          <div class="Milieu">{{match.MG}} {{match.MC}} {{match.MD}}</div>
          <div class="Defense">{{match.DG}} {{match.DCG}} {{match.DCD}} {{match.DD}}</div>
          <div class="Gardien">{{match.G}}</div>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "matchs",
  data() {
    return {
      listematchs: [],
      uri: "http://localhost:8000/api/matchs/"
    };
  },
  methods: {
    getlistematchs : function() {
      axios.get(this.uri).then(response => {
      this.listematchs = response.data.listematchs;
    });
    },
  },
  mounted() {
      this.getlistematchs()
    },
};
</script>

<style>
#MatchsModule {
  background-color: #7f7f7f;
}
</style>