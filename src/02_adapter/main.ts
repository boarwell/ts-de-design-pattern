/** あらかじめ実装されているクラス */
class Banner {
  private str: string;
  constructor(str: string) {
    this.str = str;
  }
  showWithParen(): void {
    console.log(`(${this.str})`);
  }
  showWithAster(): void {
    console.log(`*${this.str}*`);
  }
}

/** このインターフェースで使いたい */
interface Print {
  printWeak: () => void;
  printStrong: () => void;
}

/**
 * あらかじめ実装されているBannerを
 * 別のPrintのインターフェースに変換する
 */
class PrintBanner implements Print {
  banner: Banner;
  constructor(str: string) {
    this.banner = new Banner(str);
  }
  printWeak(): void {
    this.banner.showWithParen();
  }
  printStrong(): void {
    this.banner.showWithAster();
  }
}

function main() {
  const p = new PrintBanner('Hello');
  p.printWeak();
  p.printStrong();
}

main();
