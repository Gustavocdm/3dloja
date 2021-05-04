import { MaxCharacterPipe } from './max-character.pipe';

describe('MaxCaracterPipe', () => {
  it('create an instance', () => {
    const pipe = new MaxCharacterPipe();
    expect(pipe).toBeTruthy();
  });
});
