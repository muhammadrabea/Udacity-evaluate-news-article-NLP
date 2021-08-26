import { checkForURL } from "../js/checkURL";

describe('Test check URL functionality', () => {
    test('Testing the checkForURL function', () => {
        expect(checkForURL).toBeDefined()
    })

    test('checkForURL return false for invalid url', () => {
        expect(checkForURL('mostatic')).toBeFalsy()
    })

    test('checkForURL return true for valid url', () => {
        expect(checkForURL('http://example.com')).toBeTruthy()
    })
})
