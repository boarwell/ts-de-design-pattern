abstract class AbstractDisplay {
  abstract open(): void;
  abstract print(): void;
  abstract close(): void;
  display() {
    this.open();
    for (let i = 0; i < 5; i++) {
      this.print();
    }
    this.close();
  }
}

class CharDisplay extends AbstractDisplay {
  private c: string;
  constructor(c: string) {
    super();
    this.c = c;
  }
  open() {
    // console.log('<<<');
    process.stdout.write('<<<');
  }
  print() {
    // console.log(this.c);
    process.stdout.write(this.c);
  }
  close() {
    console.log('>>>');
  }
}

class StringDisplay extends AbstractDisplay {
  private s: string;
  private width: number;
  constructor(s: string) {
    super();
    this.s = s;
    this.width = s.length;
  }
  printLine() {
    console.log(`+${'-'.repeat(this.width)}+`);
  }
  open() {
    this.printLine();
  }
  print() {
    console.log(`|${this.s}|`);
  }
  close() {
    this.printLine();
  }
}

function main() {
  const cd = new CharDisplay('H');
  const sd = new StringDisplay('Ohayo Nippon');
  cd.display();
  sd.display();
}

main();
