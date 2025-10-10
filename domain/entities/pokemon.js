class Pokemon {
    constructor(id ,name, image, types) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.types = types;
  }
formateoId() {
    let num = '';
    if (this.id < 10) {
    num = "00" + this.id;
    } else if (this.id < 100) {
    num = "0" + this.id;
    } else {
    num = this.id.toString();
    }
    return num;
  }
tiposPokemon(){
                if (this.types.length > 1) {
                    return true;
                    } else {
                    return false;
                    }
                }
}
