const validateInput = (targetMaxInteger) => Number.isInteger(targetMaxInteger) && targetMaxInteger > 1;

function generateListToBePrinted(targetMaxInteger) {

    if (!validateInput(targetMaxInteger)) {
        console.error('Error: This input is invalid to this function');
        return [];
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

        console.log(valueToBePrinted)
        valuesToBePrinted.push(valueToBePrinted);
    }

    return valuesToBePrinted;
};

module.exports = generateListToBePrinted;