process.stdin
  .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream';

class OneTohundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i >= 100) {
        this.push(null)
      } else {
        const buffer = Buffer.from(String(i))
        this.push(buffer)
      }
    }, 100)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunck, encoding, callback) {
    const transform = Number(chunck.toString()) * -1;
    callback(null, Buffer.from(String(transform)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback()
  }
}


new OneTohundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())
