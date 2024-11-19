import { ICommand } from "../../commands/command.interface";

export class RemoteControl {

    //¿Bajo acoplamiento?

    private btn1: ICommand | undefined //On-Off
    private btn2: ICommand | undefined//Subir Vol
    private btn3: ICommand | undefined//Bajar Vol
    private btn4: ICommand | undefined//Incrementar el canal
    private btn5: ICommand | undefined//Disminuir el canal

    //¿Por qué no pasar TV por el constructor y ya?

    //-------------Acciones-------------\\
    clickBtn1 () : void {
        this.btn1 ? this.btn1.execute() : console.log("No se ha asignado un comando");
    }
    clickBtn2 () : void {
        this.btn2 ? this.btn2.execute() : console.log("No se ha asignado un comando");
    }
    clickBtn3 () : void {
        this.btn3 ? this.btn3.execute() : console.log("No se ha asignado un comando");
    }
    clickBtn4 () : void {
        this.btn4 ? this.btn4.execute() : console.log("No se ha asignado un comando");
    }
    clickBtn5 () : void {
        this.btn5 ? this.btn5.execute() : console.log("No se ha asignado un comando");
    }

    //--------------SETTERS--------------\\

    setBtn1 (command:ICommand){
        this.btn1 = command;
    }
    setBtn2 (command:ICommand){
        this.btn2 = command;
    }
    setBtn3 (command:ICommand){
        this.btn3 = command;
    }
    setBtn4 (command:ICommand){
        this.btn4 = command;
    }
    setBtn5 (command:ICommand){
        this.btn5 = command;
    }

}