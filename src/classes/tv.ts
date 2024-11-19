export class TV {
    private channel: number;
    private volume: number;
    private state: boolean;
  
    constructor() {
      this.channel = 1; 
      this.volume = 10; 
      this.state = false; 
    }
  
    //Método de apagar y encender
    public turnOnOff(): void {
      if (!this.state) {
        this.state = true;
        console.log( "\n----------------------",
          "\nTV encendida...", 
          "\nCanal Actual: "+this.channel,
           "\nVolumen Actual: "+this.volume,
          "\n----------------------");
      } else {
        this.state = false;
        console.log("TV apagada...");
      }
    }
  
    //Cambiar canales
    public increaseChannel(): void {
      if (!this.state) {
        console.log("La TV está apagada. No puedes cambiar de canal");
      }else if (this.channel<=100){
        this.channel++;
        console.log("Canal: ", this.channel);
      }else{
        this.channel = 1;
        console.log("Canal: ", this.channel);
      }
  
    }
    //Cambiar canales
    public decreaseChannel(): void {
      if (!this.state) {
        console.log("La TV está apagada. No puedes cambiar de canal");
      }else if (this.channel>0){
        this.channel--;
        console.log("Canal: ", this.channel);

      }else{
        this.channel = 100;
        console.log("Canal: ", this.channel);

      }
  
    }
  
    //Subir y bajar volúmen
    public increaseVolume(): void {
      if (!this.state) {
        console.log("La TV está apagada. No puedes ajustar el volumen.");
        return;
      }
  
      if (this.volume < 100) {
        this.volume++;
        console.log(`Volumen: ${this.volume}`);
      } else {
        console.log("Volumen al máximo... No deberías usar la TV a este volumen");
      }
    }
  
    public decreaseVolume(): void {
      if (!this.state) {
        console.log("La TV está apagada. No puedes ajustar el volumen.");
        return;
      }
  
      if (this.volume > 0) {
        this.volume--;
        console.log(`Volumen: ${this.volume}`);
      } else {
        console.log("TV muteado");
      }
    }
  }
  