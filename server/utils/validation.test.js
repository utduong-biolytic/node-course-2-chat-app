const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        var number = 1;
        var result = isRealString(number);
        expect(result).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var spaceString = '     ';
        var result = isRealString(spaceString);
        expect(result).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var normalString = 'hello world';
        var result = isRealString(normalString);
        expect(result).toBe(true);
    });
});