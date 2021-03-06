const reportCountries = require('../src/exercise2/reportCountries');

test('Validate if the report results for the countries are right', () => {

    const expected = {
        numberOfCountries: 5,
        countryWithMostLanguagesIncludingGerman: 'BE',
        countryWithMostLanguages: 'BE',
        mostCommonLanguage: ['nl', 'de']
    };

    const input = [
        {
            country: "US",
            languages: ["en"]
        },
        {
            country: "BE",
            languages: ["nl", "fr", "de"]
        },
        {
            country: "NL",
            languages: ["nl"]
        },
        {
            country: "DE",
            languages: ["de"]
        },
        {
            country: "ES",
            languages: ["es"]
        }
    ]

    const report = reportCountries(input);

    expect(report).toStrictEqual(expected);
});

test('Validate if the report results for the countries are right', () => {

    const expected = {
        numberOfCountries: 6,
        countryWithMostLanguagesIncludingGerman: 'SW',
        countryWithMostLanguages: 'SW',
        mostCommonLanguage: ["en"]
    };

    const input = [
        {
            country: "PT",
            languages: ["pt"]
        },
        {
            country: "BR",
            languages: ["pt"]
        },
        {
            country: "CA",
            languages: ["en", "fr"]
        },
        {
            country: "SW",
            languages: ["de", "en", "fr"]
        },
        {
            country: "US",
            languages: ["en"]
        },
        {
            country: "ES",
            languages: ["es"]
        }
    ]

    const report = reportCountries(input);

    expect(report).toStrictEqual(expected);
});

test('Validate if the function treats the invalid inputs', () => {

    const report = reportCountries([]);

    expect(report).toBe('Error: This input is invalid to this function');
});