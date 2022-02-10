const validateInput = (targetMaxInteger) => Number.isInteger(targetMaxInteger) && targetMaxInteger > 1;

function generateListToBePrinted(targetMaxInteger) {

    if (!validateInput(targetMaxInteger)) {
        console.error('Error: This input is invalid to this function');
        return;
    }

    const valuesToBePrinted = [];

    for (i = 1; i <= targetMaxInteger; i++) {
        let valueToBePrinted = '';

        if (i % 3 !== 0 && i % 5 !== 0) {
            valueToBePrinted = i;
        } else {

            if (i % 3 === 0) {
                valueToBePrinted = 'Visual' + (i % 5 === 0 ? ' ' : '');
            }

            if (i % 5 === 0) {
                valueToBePrinted += 'Nuts';
            }

        }

        valuesToBePrinted.push(valueToBePrinted);
    }

    return valuesToBePrinted;
};

(function printIntegers(targetMaxInteger) {
    const valuesToBePrinted = generateListToBePrinted(targetMaxInteger);
    
    for(const value of valuesToBePrinted) {
        console.log(value);
    }

    return;
})(100)

// Write or describe an algorithm that prints the whole integer numbers to the console, start
// from the number 1, and print all numbers going up to the number 100.
// However, when the number is divisible by 3, do not print the number, but print the word
// 'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for
// all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.
// How will you keep this code safe from bugs? Show how you would guarantee that this code
// keeps working when developers start making small feature adjustments. (Maybe we would
// want to print the first 500 numbers, ...).