import { DecreaseChannelCommand } from "../../commands/tv.commands/decrease-channel-tv.command";
import { DecreaseVolumeCommand } from "../../commands/tv.commands/decrease-volume-tv.command";
import { IncreaseChannelCommand } from "../../commands/tv.commands/increase-channel-tv.command";
import { IncreaseVolumeCommand } from "../../commands/tv.commands/increase-volume-tv.command";
import { TurnOnOffCommand } from "../../commands/tv.commands/turn-on-off-tv.command";
import { TV } from "../tv";
import { RemoteControl } from "./remote-control";


export class Config {
    
    static configureTVRemoteControl (remoteControl: RemoteControl, tv:TV): void {

        //Encender/Apagar
        remoteControl.setBtn1(new TurnOnOffCommand(tv));

        //Subir/Bajar volumen
        remoteControl.setBtn2(new IncreaseVolumeCommand(tv));
        remoteControl.setBtn3(new DecreaseVolumeCommand(tv));
        //remoteControl.setBtn3(new TurnOnOffCommand(tv));
        
        //Cambiar canal
        remoteControl.setBtn4(new IncreaseChannelCommand(tv));
        remoteControl.setBtn5(new DecreaseChannelCommand(tv));
    }
}