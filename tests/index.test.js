/* eslint-disable no-undef */
const cmbm = require('../src/index');

test('Sanity check', () => {
  expect(2 + 2).toBe(4);
});

// CORRECT FORMATTING TESTS
test('10 digit number returns expected formatting', () => {
  expect(cmbm.format(1234567890)).toBe('(123) 456-7890');
});

test('10 digit string of integers returns expected formatting', () => {
  expect(cmbm.format('1234567890')).toBe('(123) 456-7890');
});

// TESTS TO CATCH ERRORS

test('number less than 10 digits returns error', () => {
  expect(cmbm.format(12345)).toBe('Please enter a 10-digit phone number and try again.');
});

test('string less than 10 characters returns error', () => {
  expect(cmbm.format('12345')).toBe('Please enter a 10-digit phone number and try again.');
});

test('string of 10 non-numeric characters returns error', () => {
  expect(cmbm.format('abcdefghij')).toBe('Please enter only numeric values and try again.');
});

test('string with any non-numeric characters returns error', () => {
  expect(cmbm.format('123456789g')).toBe('Please enter only numeric values and try again.');
});
