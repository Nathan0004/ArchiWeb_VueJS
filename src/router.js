import  Vue from 'vue'
import VueRouter from 'vue-router'


import Effectif from "./effectif"
import Matchs from "./matchs"

Vue.use(VueRouter)

export default new VueRouter ({ 
routes : [
    //Routes principales
    
    { path : "/effectif", component : Effectif },
    { path : "/matchs", component : Matchs},

    
]})
