new Vue({
  el: '#app',
  data: {
    // Datos para el convertidor de unidades
    value: 0,
    unitFrom: 'meters',
    unitTo: 'centimeters',
    result: null,

    // Datos para la calculadora de áreas
    shape: 'circle',
    radius: 0,
    length: 0,
    width: 0,
    area: null
  },
  methods: {
    // Método para convertir unidades
    convert() {
      if (this.unitFrom === 'meters' && this.unitTo === 'centimeters') {
        this.result = this.value * 100;
      } else if (this.unitFrom === 'centimeters' && this.unitTo === 'meters') {
        this.result = this.value / 100;
      } else {
        this.result = this.value; // Sin cambio si las unidades son iguales
      }
    },
    // Método para calcular áreas
    calculateArea() {
      if (this.shape === 'circle') {
        this.area = Math.PI * this.radius * this.radius;
      } else if (this.shape === 'rectangle') {
        this.area = this.length * this.width;
      } else {
        this.area = 0;
      }
    }
  }
});
