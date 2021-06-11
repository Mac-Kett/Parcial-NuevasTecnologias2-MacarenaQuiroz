
export default {
  name: 'src-componentes-alumnos',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      notaMin : 0,
      notaMax : 10,
      alumnos : [],
      cantNotas : 0,
      promedioTotal : 0,
    }
  },
  computed: {
  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        apellido: '',
        nota: '',
      }
    },

    enviar() {      
      this.alumnos.push(this.formData)
      this.cantNotas++
      this.promedioTot(this.formData);
      this.formData = this.getInicialData()
      this.formState._reset()
    },

    promedioTot(alumnoNuevo) {
      let totalAux = this.promedioTotal + alumnoNuevo.nota
      this.promedioTotal = totalAux/this.cantNotas
    }
  }
}


