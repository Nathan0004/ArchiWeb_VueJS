<template>
  <div id="EffectifModule">
    <h1>Effectif</h1>
    <listecoachs></listecoachs>
    <listejoueuses></listejoueuses>
    
  </div>
</template>
<script>
import axios from "axios";
import listecoachs from "./Listecoachs";
import listejoueuses from "./Listejoueuses";
export default {
  name: "effectif",
components: {listecoachs, 
listejoueuses}, 


  data() {
    return {
    };
  },

  methods: {
  },
};
</script>


<style>
#EffectifModule {
  background-color: #7f7f7f;
}

</style>