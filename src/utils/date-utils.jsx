// date-utils.js

/**
 * Formats a Date object into a readable string (e.g., "YYYY-MM-DD").
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date) => {
  if (!(date instanceof Date)) {
    return ''; // Handle invalid input
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Calculates the difference in days between two Date objects.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number} The difference in days.
 */
export const getDaysDifference = (date1, date2) => {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
    return NaN; // Handle invalid input
  }
  const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.round(diffTime / oneDay);
};

/**
 * Adds a specified number of days to a Date object.
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to add.
 * @returns {Date} A new Date object with the added days.
 */
export const addDays = (date, days) => {
  if (!(date instanceof Date) || typeof days !== 'number') {
    return new Date(NaN); // Handle invalid input
  }
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};

// You can add more utility functions as needed, e.g., for time formatting,
// checking if a date is in the past/future, etc.

/**
 * Gets the value of the current year.
 * @returns {Number} year: The current year.
 */
export const currentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear
}