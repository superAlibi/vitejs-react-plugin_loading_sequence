import { DoSomething } from '@/wrong_loading/dir_2';
const dos = new DoSomething();

export class SayHello {
  constructor() {
    console.log('你好');
    dos.do();
  }
}
