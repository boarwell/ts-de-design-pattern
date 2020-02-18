# Adaptor

「継承よりコンポジション」らしいので「コンポジション」のパターンのみ実装したけど、今回の例は`is-a`, 'has-a`でいうと`is-a`のような気がするので、継承でもいいのかもしれない。

Java の本なのでクラスが前提になっている節があるものの、ライブラリの関数のシグネチャ？を既存の都合に合わせるために変換するというのもありそう。`string`の値を`Array<(str: string) => string>`の reduce で処理するとか。

```typescript
const quote = (s: string) => `"${s}"`;
const double = (s: string) => s.repeat(2);
// 引数の種類が違う
const heading = (type: 'h1' | 'h2', s: string) => `<${type}>${s}</${type}`;
// Adopter
const heading1Adopter = (s: string) => heading('h1', s);

[quote, double, heading1Adopter].reduce((prev, f) => f(prev), 'hoge');
```

## 参考

[オブジェクト指向の呪いと、その避け方 - mizchi's blog](https://mizchi.hatenablog.com/entry/2018/07/31/124354)
[継承と委譲の使い分けと、インターフェースの重要性について](https://ikenox.info/blog/inheritance-and-delegation-and-interface/)
[「継承より委譲」≠「継承使うな」 - ネットの海の片隅で](https://osa.hatenablog.com/entry/2014/08/28/204853)
