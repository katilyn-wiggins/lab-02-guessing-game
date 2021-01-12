// IMPORT MODULES under test here:
import { compareResults } from '../utils.js';

const test = QUnit.test;


test('it should return 0 when provided 10 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareResults(10, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('it should return 1 when provided 11 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareResults(11, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('it should return -1 when provided 8 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareResults(8, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return an error when provided with invalid input', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = NaN;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareResults('katie', 10);
    console.log(typeof (actual));
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

