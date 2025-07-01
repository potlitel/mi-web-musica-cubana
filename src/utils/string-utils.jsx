// string-utils.jsx (or string-utils.js)

/**
 * Capitalizes the first letter of a string.
 * @param {string} str The input string.
 * @returns {string} The string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Truncates a string to a specified length, adding an ellipsis if truncated.
 * @param {string} str The input string.
 * @param {number} maxLength The maximum length of the string.
 * @returns {string} The truncated string.
 */
export const truncateString = (str, maxLength) => {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

/**
 * Converts a string to title case.
 * @param {string} str The input string.
 * @returns {string} The string in title case.
 */
export const toTitleCase = (str) => {
  if (!str) return '';
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

/**
 * Removes all whitespace from a string.
 * @param {string} str The input string.
 * @returns {string} The string with no whitespace.
 */
export const removeWhitespace = (str) => {
  if (!str) return '';
  return str.replace(/\s/g, '');
};