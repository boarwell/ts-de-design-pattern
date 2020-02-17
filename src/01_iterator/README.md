# Iterator パターン

JavaScript には[`iterator プロトコル`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)と[iterable プロトコル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)が定義されている

TypeScript の Iterator の インターフェースは以下のようになっていた（3.7.5 で確認）

```typescript:lib.es2015.iterable.d.ts
interface Iterator<T, TReturn = any, TNext = undefined> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
  return?(value?: TReturn): IteratorResult<T, TReturn>;
  throw?(e?: any): IteratorResult<T, TReturn>;
}
```

上の定義だとけっこう複雑だけど MDN によるとこんな感じでよさそう

```typescript
type IteratorResult<T> =
  | { done: true; value?: undefined }
  | { done: false; value: T };

interface Iterator<T> {
  next(): IteratorResult<T>;
}
```

`Iterable`のほうは`Iterator`を返す`[Symbol.iterator]`メソッドがあればいいらしい

```typescript:lib.es2015.iterable.d.ts
interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}
```

`Iterator`さえ実装してしまえば`Iterable`は`[Symbol.iterator]()`で自分を返すだけなので、基本的には両方実装しておくのがいいでしょうとのこと

> Doing so allows an iterator to be consumed by the various syntaxes expecting iterables. Thus, it is seldom useful to implement the Iterator Protocol without also implementing Iterable.

```javascript
// Satisfies both the Iterator Protocol and Iterable
let myIterator = {
  next: function() {
    // ...
  },
  [Symbol.iterator]: function() {
    return this;
  }
};
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

スプレッド演算子や分割代入は`Iterable`じゃないと使えないっぽい

> Some statements and expressions expect iterables, for example the for...of loops, the spread operator, yield\*, and destructuring assignment:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
