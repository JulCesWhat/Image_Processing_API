import filenameValidator from '../utilities/filenameValidator';

it('expect filenameValidator("encenadaport") to be true', () => {
    expect(filenameValidator('encenadaport')).toBeTrue();
});
it('expect filenameValidator("capi") to be false', () => {
    expect(filenameValidator('capi')).toBeFalse();
});
