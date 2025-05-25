export const POSTS_PER_PAGE = 2;

/**
 * Removes html tags from a String.
 * @param string String to remove html tags
 * @returns string without html tags.
 */
export const removeHtmlTags = (string: String) => {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
}

/**
 * Changes the first character of a String to an upper case.
 * @param string String to capitalize first letter.
 * @returns String with first letter on upper case.
 */
export const stringFirstUpper = (string: String) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}