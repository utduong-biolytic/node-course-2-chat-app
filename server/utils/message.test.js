const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Jon';
        var text = 'hello world';
        var message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Jon'
        var latitude = 1;
        var longitude = 2;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var location = generateLocationMessage(from, latitude, longitude);
        
        expect(location).toInclude({
            from,
            url
        });
        expect(location.createdAt).toBeA('number');
    });
});