process.stdin
  .pipe(process.stdout)

import { Readable } from 'node:stream';

class OneTohundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++

    setTimeout(() => {
      if(i >= 100) {
        this.push(null)
      } else {
        const buffer = Buffer.from(String(i)) 
        this.push(buffer)
      }  
    }, 100)
  } 
}

new OneTohundredStream().pipe(process.stdout)
