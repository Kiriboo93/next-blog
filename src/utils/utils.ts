// Url of the server, in dev, localhost.
export const SERVER_URL = "http://localhost:3000/";
// Amounts of posts in each page.
export const POSTS_PER_PAGE = 3;

/**
 * Removes html tags from a String.
 * @param string String to remove html tags
 * @returns string without html tags.
 */
export const removeHtmlTags = (string: string) => {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
}

/**
 * Changes the first character of a String to an upper case.
 * @param string String to capitalize first letter.
 * @returns String with first letter on upper case.
 */
export const stringFirstUpper = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Fetcher for SWR hook.
 * @param {*} url url to get data.
 * @returns promise to wait for data.
 */
export const fetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
}

/**
 * Creates a slug from a string.
 * @param str string without characters not available for slugs.
 */
export const slugify = (str: string) => {
    return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "").replace(/^-+|-+$/g, "");
}