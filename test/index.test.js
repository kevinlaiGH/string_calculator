const assert = require('assert');
const add = require('../operation.js').add;
const subtract = require('../operation.js').subtract;

describe('#add()', function () {
    it('should return 0 when empty string is passed', function () {
        // Given
        const input = ""
        const expected = 0
        // When
        const result = add(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return 1 when 1 is passed', function () {
        // Given
        const input = "1"
        const expected = 1
        // When
        const result = add(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return 8 when 8 is passed', function () {
        // Given
        const input = "8"
        const expected = 8
        // When
        const result = add(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return 7 when "3,4" are passed', function () {
        // Given
        const input = "3,4"
        const expected = 7
        // When
        const result = add(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return 30 when "10,10,10" are passed', function () {
        // Given
        const input = "10,10,10"
        const expected = 30
        // When
        const result = add(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return 90 when "100-10" are passed', function () {
        // Given
        const input = "100-10"
        const expected = 90
        // When
        const result = subtract(input)
        // Then
        assert.equal(result, expected)
    });
    it('should return 80 when "100-10-10" are passed', function () {
        // Given
        const input = "100-10-10"
        const expected = 80
        // When
        const result = subtract(input)
        // Then
        assert.equal(result, expected)
    });


});
