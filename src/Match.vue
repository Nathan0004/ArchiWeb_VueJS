<template>
  <div id="match">
    <div id="MatchModule">
      <div class="infomatch">
        <h2>{{ match.titre}}</h2>
        <p>
          <em>
            <strong>Horaire:</strong>
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
        <div class="Attaque">{{match.AG}} &nbsp; &#160;{{match.BU}} &nbsp; &#160;{{match.AD}}</div>
        <div class="Milieu">{{match.MG}} &nbsp; &#160;{{match.MC}} &nbsp; &#160;{{match.MD}}</div>
        <div class="Defense">{{match.DG}}&nbsp; &#160;{{match.DCG}}&nbsp; &#160;{{match.DCD}} &nbsp; &#160;{{match.DD}}</div>
        <div class="Gardien">{{match.G}}</div>
      </div>
    </div>
<button v-on:click="deletematch(match)">Supprimer</button>
    <button v-on:click="showinput = ! showinput">Modifier</button>
    <div v-if="showinput">
      <fieldset>
        <legend><strong>Modification Match :</strong> </legend> 
        <div class="infomatchupdate">
      Titre: <input type="text" v-model="match.titre" /> <br>
      _________________________________ <br>

      Date: <input type="date" v-model="match.date" /> <br>
      Heure: <input type="time" v-model="match.heure" /> <br>
      Adresse: <input type="text" v-model="match.adresse" /> <br>
      Coach du jour: <input type="text" v-model="match.matchcoach" /> <br>
        </div>
        <div class="compoupdate">
          <div class="attaqueupdate">
      <input size='12' type="text" v-model="match.AG" />
      <input size='12' type="text" v-model="match.BU" />
      <input size='12' type="text" v-model="match.AD" /> 
      </div>
      <div class="milieuupdate">
      <input size='12' type="text" v-model="match.MG" />
      <input size='12' type="text" v-model="match.MC" />
      <input size='12' type="text" v-model="match.MD" /> 
      </div>
      <div class='defenseupdate'>
      <input size='12' type="text" v-model="match.DG" />
      <input size='12' type="text" v-model="match.DCG" />
      <input size='12' type="text" v-model="match.DCD" />
      <input size='12' type="text" v-model="match.DD" /> 
      </div>
      <div class="gardienupdate">
      <input size='12' type="text" v-model="match.G" /> 
      </div>
      </div>
      <button class="updatebutton" v-on:click="UpdateMatch(match)">Valider</button>
      </fieldset>
    </div>

    
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
  background-color : #a8c6fa;
  width: 900px;
  margin: 15px auto;
  padding: 5px;
  border: solid;
  
}
p {
    text-align: left;
}
#MatchModule {
    display: flex;
  background-color : #a8c6fa;
  height: 250px;
  
}
.composition {
    background-image: url("./assets/demiterraincopie.jpg");
    background-size : 420px 250px;
    width : 500px;
}
.infomatch {
    width : 550px;
}
.Attaque {
    margin-top : 35px;
    margin-bottom: 30px;
}
.Milieu {
    margin-bottom: 30px;
}
.Defense {
     margin-bottom: 40px;  


    
   
}

input {
  border : solid 0.1px;
  border-radius : 1px;
}

fieldset {
  display: flex;
  width : 870px;
  height: 200px;
  background-color : #a8adfa;
  border-radius : 3px;
  
}

.infomatchupdate {
  text-align : left;
  margin-right: 30px;
}

.updatebutton {
  height : 30px;
  margin : auto auto;
}

.infomatch {
    width : 550px;
}
.attaqueupdate {
    margin-bottom: 20px;
    margin-top : 10px;
}
.milieuupdate {
    margin-bottom: 20px;
}
.defenseupdate {
     margin-bottom: 30px;  
}

.compoupdate {
  background-image: url("./assets/demiterraincopie.jpg");
    background-size : 370px 180px;
}

</style>