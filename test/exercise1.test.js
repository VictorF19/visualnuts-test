const generateListToBePrinted = require('../src/exercise1/generateList');

test('Validate if the function correctly generates a list until 100', () => {

    const expected = [
        1, 2, 'Visual', 4, 'Nuts',
        'Visual', 7, 8, 'Visual', 'Nuts',
        11, 'Visual', 13, 14, 'Visual Nuts',
        16, 17, 'Visual', 19, 'Nuts',
        'Visual', 22, 23, 'Visual', 'Nuts',
        26, 'Visual', 28, 29, 'Visual Nuts',
        31, 32, 'Visual', 34, 'Nuts',
        'Visual', 37, 38, 'Visual', 'Nuts',
        41, 'Visual', 43, 44, 'Visual Nuts',
        46, 47, 'Visual', 49, 'Nuts',
        'Visual', 52, 53, 'Visual', 'Nuts',
        56, 'Visual', 58, 59, 'Visual Nuts',
        61, 62, 'Visual', 64, 'Nuts',
        'Visual', 67, 68, 'Visual', 'Nuts',
        71, 'Visual', 73, 74, 'Visual Nuts',
        76, 77, 'Visual', 79, 'Nuts',
        'Visual', 82, 83, 'Visual', 'Nuts',
        86, 'Visual', 88, 89, 'Visual Nuts',
        91, 92, 'Visual', 94, 'Nuts',
        'Visual', 97, 98, 'Visual', 'Nuts'
    ];

    const generatedList = generateListToBePrinted(100);

    expect(generatedList.length).toBe(100);
    expect(generatedList).toStrictEqual(expected);
});

test('Validate if the function treats the invalid inputs', () => {
    
    const generatedList = generateListToBePrinted(1.5);

    expect(generatedList.length).toBe(0);
});

test('Validate if the function treats the invalid inputs', () => {
    
    const generatedList = generateListToBePrinted(-2);

    expect(generatedList.length).toBe(0);
});