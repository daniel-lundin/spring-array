import { tweenArray } from './spring-array.js';

describe('#tweenArray', () => {
  it('should update output with the tweened value', () => {
    const output = [0, 0, 0];
    const from = [0, 0, 0];
    const to = [1, 1, 1];

    tweenArray(from, to, output, 0.5);

    expect(output).to.eql([0.5, 0.5, 0.5]);
  });

  it('should handle array of arrays', () => {
    const output = [[0, 0], [0, 0]];
    const from = [[0, 0], [0, 0]];
    const to = [[1, 1], [1, 1]];

    tweenArray(from, to, output, 0.5);

    expect(output).to.eql([[0.5, 0.5], [0.5, 0.5]]);
  });

  it('should handle array of array of arrays', () => {
    const output = [[[0, 0]], [[0, 0]]];
    const from = [[[0, 0]], [[0, 0]]];
    const to = [[[1, 1]], [[1, 1]]];

    tweenArray(from, to, output, 0.5);

    expect(output).to.eql([[[0.5, 0.5]], [[0.5, 0.5]]]);
  });
});
