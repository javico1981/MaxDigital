import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Aboute from "../views/About";
import Registro from "../views/Registro";
import Principal from "../views/Principal";
import Ini2 from "../views/Ini2";
import MediosDigitales from "../views/MediosDigitales";
import Facebook from "../views/Facebook";
import Twitter from "../views/Twitter";
import Instagram from "../views/Instagram";


Vue.use(VueRouter);

const routes = [
 
  {
    path: "/Principal",
    name: "Principal",
    component: Principal,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: Aboute,
  },
  {
    path: "/Registro",
    name: "Registro",
    component: Registro,
  },
  {
    path: "/Ini2",
    name: "Ini2",
    component: Ini2,
  },
  {
    path: "/MediosDigitales",
    name: "MediosDigitales",
    component: MediosDigitales,
  },
  {
    path: "/Facebook",
    name: "Facebook",
    component: Facebook,
  },
  
  {
    path: "/Twitter",
    name: "Twitter",
    component: Twitter,
  },
  {
    path: "/Instagram",
    name: "Instagram",
    component: Instagram,
  },
 

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
