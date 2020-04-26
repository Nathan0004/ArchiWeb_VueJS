import  Vue from 'vue'
import VueRouter from 'vue-router'

import App from "./App.vue"
import Effectif from "./effectif"
import Matchs from "./matchs"

Vue.use(VueRouter)

export default new VueRouter ({ 
routes : [
    //Routes principales
    { path : "/", component : App},
    { path : "/effectif", component : Effectif },
    { path : "/matchs", component : Matchs},

    // Routes listematchs
    { path : "/api/listematchs", component : Matchs},
    //ajout Match
    { path : '/api/matchs/ajouter/', component : Matchs},
    //suppression Match
    { path : "/api/matchs/supprimer/:id", component : Matchs},
    //Modification Match
    { path : '/api/matchs/update/:matchid', component : Matchs},

    // Routes EFFECTIF
    { path : "/api/listecoachslistejoueuses/", component : Effectif},

    //Routes COACHS
    //ajout Coach
    { path : '/api/effectif/ajouter/', component : Effectif},
    //suppression Coach
    { path : '/api/effectif/supprimer/:id', component : Effectif},
    //Modification Coach
    { path : '/api/effectif/update/:coachid', component : Effectif},
    //Routes JOUEUSES

    //ajout Joueuse
    { path : '/api/effectifj/ajouter/', component : Effectif},
    //suppression Joueuse
    { path : '/api/effectifj/supprimer/:id', component : Effectif},
    //Modification Joueuse
    { path : '/api/effectifj/update/:joueuseid', component : Effectif},
    
]
    })
