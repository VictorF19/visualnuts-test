const generateReport = (countries) => {

    const orderedCountries = countries.sort((a, b) => {
        return b.languages.length - a.languages.length;
    });

    let countryWithMostLanguagesIncludingGermanIndex = null;

    let languagesOccurrences = {};

    for(i=0;i<=orderedCountries.length-1;i++) {

        const germanFound = orderedCountries[i].languages.find(language => language === 'de');

        for(j=0;j<=orderedCountries[i].languages.length-1;j++) {
            if (languagesOccurrences.hasOwnProperty([orderedCountries[i].languages[j]])) {
                languagesOccurrences[orderedCountries[i].languages[j]] += 1;
            } else {
                languagesOccurrences[orderedCountries[i].languages[j]] = 1;
            }
        }

        if (germanFound && countryWithMostLanguagesIncludingGermanIndex === null) {
            countryWithMostLanguagesIncludingGermanIndex = i;
        }

    } 

    return {
        countryWithMostLanguagesIncludingGerman: orderedCountries[countryWithMostLanguagesIncludingGermanIndex].country,
        countryWithMostLanguages: orderedCountries[0].country,
        mostCommonLanguage: selectMostCommonLanguages(languagesOccurrences) 
    };
}

const selectMostCommonLanguages = (languagesOccurrences) => {

    const languages = Object.getOwnPropertyNames(languagesOccurrences);

    let greatestValue = 0;

    for (language of languages) {
        
        if (languagesOccurrences[language] > greatestValue) {
            greatestValue = languagesOccurrences[language];
        }
    }

    return languages.filter(language => languagesOccurrences[language] === greatestValue);
}

function reportCountries(countries) {
    const countryReport = generateReport(countries);

    return {
        numberOfCountries: countries.length,
        countryWithMostLanguagesIncludingGerman: countryReport.countryWithMostLanguagesIncludingGerman,
        countryWithMostLanguages: countryReport.countryWithMostLanguages,
        mostCommonLanguage: countryReport.mostCommonLanguage
    };
};

module.exports = reportCountries;