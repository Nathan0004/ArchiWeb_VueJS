<template>
  <div id="listematchs">
    <h2>Liste des Matchs</h2>
    
    <li v-for="(match) in listematchs" :key="match.id">
      <Match v-bind:match="match" @event_updatematch="UpdateM" @event_deletematch="deletematch"></Match>
    </li>

    <fieldset class="fieldsetadd">
      <legend><strong>Ajouter un Match :</strong> </legend> 
        <div class="infomatchadd">
      Titre: <input type="text" v-model="match.titre" /> <br>
      ____________________________ <br>
      Date: <input type="date" v-model="match.date" /> <br>
      Heure: <input type="time" v-model="match.heure" /> <br>
      Adresse: <input type="text" v-model="match.adresse" /> <br>
      Coach du jour: <input type="text" v-model="match.matchcoach" /> <br>
        </div>
        <div class="compoadd">
          <div class="attaqueadd">
      <input size='12' type="text" v-model="match.AG" />
      <input size='12' type="text" v-model="match.BU" />
      <input size='12' type="text" v-model="match.AD" /> 
      </div>
      <div class="milieuadd">
      <input size='12' type="text" v-model="match.MG" />
      <input size='12' type="text" v-model="match.MC" />
      <input size='12' type="text" v-model="match.MD" /> 
      </div>
      <div class='defenseadd'>
      <input size='12' type="text" v-model="match.DG" />
      <input size='12' type="text" v-model="match.DCG" />
      <input size='12' type="text" v-model="match.DCD" />
      <input size='12' type="text" v-model="match.DD" /> 
      </div>
      <div class="gardienadd">
      <input size='12' type="text" v-model="match.G" /> 
      </div>
      </div>
      <button class="boutonadd" v-on:click="addmatch">Ajouter un Match</button>
      </fieldset>
    
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



.infomatchadd {
  text-align : left;
  margin-right: 30px;
}

.boutonadd {
  height : 30px;
  margin : auto auto;
}

.attaqueadd {
    margin-bottom: 20px;
    margin-top : 10px;
}
.milieuadd {
    margin-bottom: 20px;
}
.defenseadd {
     margin-bottom: 30px;  
}

.compoadd {
  background-image: url("./assets/demiterraincopie.jpg");
    background-size : 370px 180px;
}

.fieldsetadd {
  margin : auto auto;
  background-color : #a8adfa;
}
</style>