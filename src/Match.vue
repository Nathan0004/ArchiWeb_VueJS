<template>
  <div id="match">
    <div id="MatchModule">
      <div class="infomatch">
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
      </div>
      <div class="composition">
        <div class="Attaque">{{match.AG}} {{match.BU}} {{match.AD}}</div>
        <div class="Milieu">{{match.MG}} {{match.MC}} {{match.MD}}</div>
        <div class="Defense">{{match.DG}} {{match.DCG}} {{match.DCD}} {{match.DD}}</div>
        <div class="Gardien">{{match.G}}</div>
      </div>
    </div>

    <button v-on:click="showinput = ! showinput">Modifier</button>
    <div v-if="showinput">
      <input type="text" v-model="match.titre" />
      <input type="date" v-model="match.date" />
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

      <button v-on:click="UpdateMatch(match)">Valider</button>
    </div>

    <button v-on:click="deletematch(match)">Supprimer</button>
  </div>
</template>
<script>
export default {
  name: "Match",
  props: ["match"],
  data() {
    return { showinput: false };
  },

  methods: {
    UpdateMatch(match) {
      this.$emit("event_updatematch", match);
    },
    deletematch(match) {
      this.$emit("event_deletematch", match);
    }
  }
};
</script>


<style>
#match {
    
  background-color: lightgrey;
  width: 800px;
  margin: 5px auto;
  padding: 5px;
}
#MatchModule {
    display: flex;
  background-color: #7f7f7f;
}
.composition {
    background-image: url("./assets/demiterraincopie.jpg");
    width : 400px;
}

.infomatch {
    width : 450px;
}

.attaque {
    margin-bottom : 15px;
}
.milieu {
    margin-bottom : 5px;
}
.defense {
    margin-bottom : 5px;
}
.gardien {
    margin-bottom : 5px;
}
</style>