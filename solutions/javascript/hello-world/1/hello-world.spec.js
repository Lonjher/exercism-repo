import { describe, expect, test } from '@jest/globals';
import { salam } from './hello-world';

describe('Hello World', () => {
  test('Say Hi!', () => {
    expect(salam("Lonjher")).toEqual('Hello, Lonjher!');
  });
});
