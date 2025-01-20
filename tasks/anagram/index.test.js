const isAnagram = require("./index");

describe('isAnagram', () => {
    it('abc is anagram of abc', () => {
        expect(isAnagram('abc', 'abc')).toBe(true);
    });

    it('listen is anagram of silent', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
    });

    it('abc is anagram of cba', () => {
        expect(isAnagram('abc', 'abc')).toBe(true);
    });

    it('abcd efg is anagram of egfd cab', () => {
        expect(isAnagram('abcd efg', 'egfd cab')).toBe(true);
    });

    it('Dormitory is anagram of Dirty room', () => {
        expect(isAnagram('Dormitory', 'Dirty room')).toBe(true);
    });

    it('abcd efg is not anagram of egfd ca', () => {
        expect(isAnagram('abcd efg', 'egfd ca')).toBe(false);
    });

    it('hello is not anagram of world', () => {
        expect(isAnagram('hello', 'world')).toBe(false);
    });

    it('empty strings are not anagrams', () => {
        expect(isAnagram('', '')).toBe(false);
    });

    it('case with only spaces (not anagrams)', () => {
        expect(isAnagram('     ', '     ')).toBe(false);
    });

    it('non-latin characters should be ignored', () => {
        expect(isAnagram('你好', '好你')).toBe(false);
    });
});