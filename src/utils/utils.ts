// Url of the server, in dev, localhost.
export const SERVER_URL = "http://localhost:3000/";
// Amounts of posts in each page.
export const POSTS_PER_PAGE = 3;

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

/**
 * Fetcher for SWR hook.
 * @param {*} url url to get data.
 * @returns promise to wait for data.
 */
export const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
}