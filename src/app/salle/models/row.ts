import {Siege} from '../../siege/models/siege';
import {Couloir} from './couloir';

export class Row {
  constructor(public id: string,
              public siege?: Siege[]) {
  }
}
