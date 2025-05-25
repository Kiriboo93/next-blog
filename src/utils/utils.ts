export const removeHtmlTags = (string: String) => {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
}

export const POSTS_PER_PAGE = 2;