import { Pipe, PipeTransform } from '@angular/core';
import { sessionTimes } from 'src/app/config/sessionTime';

@Pipe({
  name: 'sessionLabel',
})
export class SessionLabelPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (value >= 1 && value < sessionTimes.length) {
      const session = sessionTimes[value - 1];
      return `${session.start} -> ${session.end}`;
    }
    return `Session ${value} out of range`;
  }
}
