<template>
  <div id="app">
    <img class="logovs" src="./assets/logovictoriouscopie.png" />
    <h1>{{ msgbienvenue }}</h1>

    <div>
      <router-link to="/effectif">Effectif</router-link>
      <router-link to="/matchs">Matchs</router-link>
      <router-view></router-view>
    </div>
    

    <h2>Pour nous suivre sur les réseaux sociaux, c'est par ici !</h2>
    <a href="https://www.facebook.com/Victorious-Secret-BBFL-2140030759440919/" target="_blank">
      <img class="logoreseaux" src="./assets/logofacecopie.png" />
    </a>
    <a href="https://www.instagram.com/victorioussecretbbfl/" target="_blank">
      <img href class="logoreseaux" src="./assets/logoinstacopie.png" />
    </a>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msgbienvenue: "Bienvenue sur l'application Victorious Secrets"
    }
    
  },
  
  
};
</script >

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(18, 136, 151);
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li{
list-style-type: none; 
}

a {
  color: rgb(10, 76, 85);
}

.logovs {
  height: 300px;
  width: 300px;
}

.logoreseaux {
  height: 50px;
  width: 50px;
}

</style>
