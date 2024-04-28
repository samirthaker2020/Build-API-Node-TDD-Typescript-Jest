import { Secret } from '../src/models/Secret';
import { SecretTooShortError } from '../src/models/SecretTooShortError';

describe('Secret Test', () => {
  it('should create an instance of Secret Class', () => {
    expect(new Secret('123qwe')).toBeInstanceOf(Secret);
  });
  it('should throw an error if secret is less than 3 char', () => {
    expect(() => new Secret('12')).toThrow(SecretTooShortError);
  });
});
