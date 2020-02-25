import { ToSentencePipe } from './to-sentence.pipe';

describe('ToSentencePipe', () => {
  it('create an instance', () => {
    const pipe = new ToSentencePipe();
    expect(pipe).toBeTruthy();
  });
});
