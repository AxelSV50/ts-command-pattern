import { ICommand } from '../command.interface';
import { TV } from '../../classes/tv';

export class IncreaseChannelCommand implements ICommand {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.increaseChannel();
  }
}
