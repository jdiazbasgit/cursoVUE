const coleccion = [
  { nombre: "javier", apellido: "gercia", telefono: "5646464" },
  { nombre: "javier", apellido: "gercia", telefono: "5646464" },
  { nombre: "javier", apellido: "gercia", telefono: "5646464" },
];

class Persona {
  constructor(nombre, apellido, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}
const app = Vue.createApp({
  data() {
    return {
      texto: "este es el texto",
      newElement: "texto",
      coleccion,
     
    };
  },
  methods: {
    addTexto(event) {
      console.log(event)
      
      this.coleccion.push(new Persona("pepe", "fernandez", "64564"));
     // this.coleccion.push({ nombre: "pepe", apellido: "otro" });
      console.log(coleccion);
      
    },
  },
});

app.mount("#myApp");
