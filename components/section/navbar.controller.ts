import Vue from "vue";
import {Component} from "nuxt-property-decorator";

@Component({
data() {
  return{
    showMenu: false
  }
}
})
export default class Navbar extends Vue {
  toggleNavbar(){
  this.$data.showMenu = !this.$data.showMenu;
}
}
