import Vue from "vue";
import {Component} from "nuxt-property-decorator"

@Component({
  data() {
    return {
      showModal: false,
      dataCareer: {},
      careers: [
        {
          name: 'Intership',
          description: 'PT Perkebunan Nusantara IX, abbreviated PTPN 9, is a state-owned Indonesian agricultural company for the cultivation and processing of sugar cane, rubber, tea and coffee with its own plantations and factories at locations in Central Java.',
          job: ['Installing and configuring computer hardware, software, systems, networks, printers, and scanners.', 'Testing new technology.', 'Help some, to make app view with xml.'],
          image: 'ptpn.png'
        },
        {
          name:'Contract',
          description: 'EVERMOS/ PT. SETIAP HARI DIPAKAI Evermos is Indonesia muslim market e-commerce platform, aiming as the everyday wear for every moslem, not a fashion, but the way of life. Evermos is the next big thing in muslim fashion e-commerce startup in Bandung, "startup" and "Bandung" themselves are already great perks!',
          job:['Developed Everpro website in Frontend side', 'Make some features in Everpro website', 'Fix bugs'],
          image: 'evermos.png'
        }
      ]
    }
  }
})

export default class CertifPage extends Vue {
  openModal(v: any) {
    this.$data.showModal = !this.$data.showModal
    this.$data.dataCareer = v;
  }
}
