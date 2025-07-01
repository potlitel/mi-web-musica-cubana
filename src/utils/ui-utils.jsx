

/**
 * Makes scrolling to a section of the same page smooth by using scrollIntoView with the behavior: "smooth" option.
 * @param {Event} event - The event to handle.
 * @param {string} id - The event id.
 */
export const scrollToElement = (event, id) => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};