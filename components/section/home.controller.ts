import Vue from "vue";
import {Component} from "nuxt-property-decorator"

@Component({
  data() {
    return {
      showModal: false,
    }
  }
})
export default class HomeControllerPage extends Vue {
  openModal() {
    this.$data.showModal = !this.$data.showModal
    // this.$data.dataCareer = v;
  }
}
