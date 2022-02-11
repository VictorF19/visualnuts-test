const reportCountries = require('./reportCountries');
console.log(reportCountries([
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
]));