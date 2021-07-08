import numValidator from '../utilities/numValidator';

it('expect numValidator("5") to be true', () => {
    expect(numValidator('5')).toBeTrue();
});
it('expect numValidator("a") to be false', () => {
    expect(numValidator('a')).toBeFalse();
});
it('expect numValidator("0") to be false', () => {
    expect(numValidator('0')).toBeFalse();
});
it('expect numValidator("4.4") to be false', () => {
    expect(numValidator('4.4')).toBeFalse();
});
