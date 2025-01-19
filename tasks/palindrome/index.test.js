const isPalindrome = require('./index');
describe('Palindrome', () => {
    it('racecar is a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    it('RacECaR is a palindrome', () => {
        expect(isPalindrome('RacECaR')).toBe(true);
    });

    it('RacECaR1 is not a palindrome', () => {
        expect(isPalindrome('RacECaR1')).toBe(false);
    });

    it('hello is not a palindrome', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    it('A man a plan a canal Panama', () => {
        expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });
})
