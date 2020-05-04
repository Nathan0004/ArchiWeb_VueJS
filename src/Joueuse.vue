<template>
  <div id="joueuse">
    <h3>{{joueuse.firstname}} {{joueuse.lastname}}</h3>
    <button v-on:click="showinput = ! showinput">Modifier</button>
    <div v-if="showinput">
    <input type="text" v-model='joueuse.firstname'>
    <input type="text" v-model='joueuse.lastname'>
    <button v-on:click='UpdateJoueuse(joueuse)'>Valider</button>
    </div>
    <button v-on:click="deletejoueuse(joueuse)">Supprimer</button>
  </div>
</template>
<script>

export default {
  name: "Joueuse",
  props: ['joueuse'],
  data() {
    return { showinput : false,
    };
  },

  methods: {
      UpdateJoueuse(joueuse) {
          this.$emit( "event_updatejoueuse",joueuse)
      },
      deletejoueuse(joueuse) {
        this.$emit("event_deletejoueuse", joueuse)
      }
  },
};
</script>


<style>
#joueuse {
  background-color: lightgrey;
  width: 300px;
  margin : 5px auto;
  padding : 5px;
}

</style>