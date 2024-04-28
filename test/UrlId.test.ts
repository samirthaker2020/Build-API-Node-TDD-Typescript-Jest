import { UrlId } from '../src/UrlId';
import { UrlIdTooShortError } from '../src/UrlIdTooShortError';

describe('UrlId Test', () => {
  it('should create an instance of Secret Class', () => {
    expect(new UrlId('123qwe')).toBeInstanceOf(UrlId);
  });
  it('should throw an error if secret is less than 10 char', () => {
    expect(() => new UrlId('1234567778789087')).toThrow(UrlIdTooShortError);
  });
});
