<template>
  <div class="EffectifModule">
    <h1>Effectif</h1>
    <h2>Liste des Coachs</h2>
    <li v-for="coach in listecoachs" :key="coach.id">
        <a  href='http://localhost:8000/api/effectif/supprimer/:id'>[✘]</a>
        {{ coach.firstname}} 
        {{coach.lastname}}

    </li>
    <form class="formaddcoach" action="http://localhost:8000/api/effectif/ajouter/" method="post">
      <fieldset>
        <legend>
          <strong>Ajouter un Coach :</strong>
        </legend>Prénom:
        <input type="text" name="firstname" id="coachfn" autofocus />
        Nom:
        <input type="text" name="lastname" id="coachln" autofocus />

        <input class="boutonsubmit" type="submit" value="Ajouter Coach" />
      </fieldset>
    </form>
    <h2>Liste des Joueuses</h2>
    <li v-for="joueuse in listejoueuses" :key="joueuse.id">
        <a href='http://localhost:8000/api/effectifj/supprimer/:id'>[✘]</a>
      {{ joueuse.firstname}}
      {{joueuse.lastname}}
    </li>
    <form class="formaddcoach" action="http://localhost:8000/api/effectifj/ajouter/" method="post">
      <fieldset>
        <legend>
          <strong>Ajouter une Joueuse :</strong>
        </legend>Prénom:
        <input type="text" name="firstname" id="coachfn" autofocus />
        Nom:
        <input type="text" name="lastname" id="coachln" autofocus />

        <input class="boutonsubmit" type="submit" value="Ajouter Joueuse" />
      </fieldset>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "effectif",
  data() {
    return {
      listecoachs: [],
      listejoueuses: [],
      uri1: "http://localhost:8000/api/listecoachslistejoueuses/"
    };
  },
  created() {
    axios.get(this.uri1).then(response => {
      this.listecoachs = response.data.listecoachs;
      this.listejoueuses = response.data.listejoueuses;
    });
  }
};
</script>


<style>
.EffectifModule {
  background-color: #7f7f7f;
}
fieldset {
  background-color: #a8c6fa;
  opacity: 0.7;
  border-radius: 10px;
  margin-bottom: 5px;
  text-align: center;
  margin-left : 370px;
  margin-right : 370px;
}
</style>