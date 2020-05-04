<template>
  <div id="coach">
    <h3>{{coach.firstname}} {{coach.lastname}}</h3>
    <button v-on:click="showinput = ! showinput">Modifier</button>
    <div v-if="showinput">
    <input type="text" v-model='coach.firstname'>
    <input type="text" v-model='coach.lastname'>
    <button v-on:click='UpdateCoach(coach)'>Valider</button>
    </div>
    
    <button v-on:click="deletecoach(coach)">Supprimer</button>
    
  </div>
</template>
<script>

export default {
  name: "Coach",
  props: ['coach'],
  data() {
    return { showinput :false,
    };
  },

  methods: {
      UpdateCoach(coach) {
          this.$emit( "event_updatecoach",coach)
      },
      deletecoach(coach) {
        this.$emit("event_deletecoach", coach)
      }
  },
};
</script>


<style>
#coach {
  background-color: lightgrey;
  width: 300px;
  margin : 5px auto;
  padding : 5px;
}

</style>