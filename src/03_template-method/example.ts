// クラスではなく関数で同じようなことをやる

type Display = {
  open: () => void;
  print: (arg: string) => void;
  close: () => void;
};

type Logic = (s: string, d: Display) => void;

const stringDisplay: Display = {
  open() {
    process.stdout.write('<<<');
  },
  print(arg: string) {
    process.stdout.write(arg);
  },
  close() {
    console.log('>>>');
  }
};

const f: Logic = (s: string, c: Display): void => {
  c.open();
  for (let i = 0; i < 5; i++) {
    c.print(s);
  }
  c.close();
};

function main() {
  f('H', stringDisplay);
}

main();
