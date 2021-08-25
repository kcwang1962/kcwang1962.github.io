Vue.createApp({
  data() {
    return {
      alpha: 100,
      red: 0,
      green: 255,
      blue: 0
    }
  },
  computed: {
    box() {
      return {
        backgroundColor: ` 
          rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha / 100})
          `
      }
    },
    fontColor(){
      return{
        color: ` 
          rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha / 100})
          `
      }
    }
  },
  methods: {
    reset() {
      this.alpha = 100
      this.red = 0
      this.green = 255
      this.blue = 0
    },
  }
}).mount('#app')