import Vue from "vue";
import {Component} from "nuxt-property-decorator"

@Component({
  data() {
    return {
      showModal: false,
      dataStack: {},
      certifs: [
        {
          no: 1,
          name: 'HTML',
          date: '21-12-2021',
          image: 'niohtml',
          description: 'This certification from Niomic (PT Cerdaskan Generasi Bangsa) course that i have complete to learn and complete all task HTML to get the credential/certification'
        },
        {
          no: 2,
          name: 'Js',
          date: '21-12-2021',
          image: 'niojs',
          description: 'This certification from Niomic (PT Cerdaskan Generasi Bangsa) course that i have complete to learn and complete all task Javascript to get the credential/certification'
        },
        {
          no: 3,
          name: 'JsDOM',
          date: '21-12-2021',
          image: 'niojsdom',
          description: 'This certification from Niomic (PT Cerdaskan Generasi Bangsa) course that i have complete to learn and complete all task Javascript DOM to get the credential/certification'

        },
        {
          no: 4,
          name: 'ReactJs',
          date: '28-12-2021',
          image: 'niorea',
          description: 'This certification from Niomic (PT Cerdaskan Generasi Bangsa) course that i have complete to learn and complete all task React Js to get the credential/certification'

        }
      ],
      noCertifs: [
        {
          no: 5,
          name: 'PHP',
          date: 'on Progress',
        },
        {
          no: 6,
          name: 'Java',
          date: 'on Progress',
        },
        {
          no: 7,
          name: 'MsSQL',
          date: 'on Progress',
        },
        {
          no: 8,
          name: 'CSS',
          date: 'on Progress',
        },
        {
          no: 9,
          name: 'Vue',
          date: 'on Progress',
        }
      ]
    }
  }
})

export default class CertifPage extends Vue {
  openModal(v: any) {
    this.$data.showModal = !this.$data.showModal
    this.$data.dataStack = v;
  }
}
