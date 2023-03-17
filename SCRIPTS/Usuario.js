function ProductoAlimenticio(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.imprimeDatos = function () {
      console.log(this.codigo, this.nombre, `${this.precio} €`);
    };
  }


