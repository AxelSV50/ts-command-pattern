import { Config } from "./classes/remote-control/config";
import { RemoteControl } from "./classes/remote-control/remote-control";
import { TV } from "./classes/tv";
import * as readline from "readline";

//Instancias 
const remoteControl = new RemoteControl();
const tv = new TV();

//Configuración del control remoto
Config.configureTVRemoteControl(remoteControl, tv);

//Interface de entrada por consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//función para manejar la entrada de datos
const handleUserInput = () => {
    console.log(`
        _______________________
       |  _____  _____  _____  |
       |  | 1 |  | 2 |  | 3 |  |   
       |  |___|  |___|  |___|  |   
       |     _____  _____      |
       |     | 4 |  | 5 |      |
       |     |___|  |___|      |  
       |_______________________|
    `);
    rl.question("Presiona un botón (1-5) o 'q' para salir: ", (input) => {
        if (input.toLowerCase() === 'q') {
            console.log("¡Gracias por usar el control remoto!");
            rl.close();
            return;
        }
        console.clear();

        const button = parseInt(input, 10);
        if (button >= 1 && button <= 5) {
            switch (button) {
                case 1:
                    remoteControl.clickBtn1();
                    break;
                case 2:
                    remoteControl.clickBtn2();
                    break;
                case 3:
                    remoteControl.clickBtn3();
                    break;
                case 4:
                    remoteControl.clickBtn4();
                    break;
                case 5:
                    remoteControl.clickBtn5();
                    break;
            }
        } else {
            console.log("Por favor, ingresa un número válido entre 1 y 5.");
        }

        handleUserInput(); //Repetir la solicitud

    });
};


handleUserInput();