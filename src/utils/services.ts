import { slugify } from "../utils/utils";

/**
 * Fetch to get posts.
 * @param page number of page to get posts.
 * @param cat  category of posts to filter if any.
 * @returns 3 posts from the selected page and of the category selected.
 */
export const getPosts = async (page: number, cat: string, popular: boolean) => {
    const url = `http://localhost:3000/api/posts?page=${page}` + (cat ? `&cat=${cat}` : "") + (popular ? `&popular=true` : "");
    const res = await fetch(url, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
}

/**
 * Fetch to get categories.
 * @returns all available categories.
 */
export const getCategories = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
}

/**
 * Fetch to get one specific post.
 * @param slug param to get specific post.
 * @returns specific post.
 */
export const getPost = async (slug: string) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
}

/**
 * Post to save comment in the post passed as props and refresh the list of comments.
 */
export const postComment = async (desc, postSlug, mutate) => {
    await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ desc, postSlug })
    });
    mutate();
}

/**
 * Creates the new post and uploads it to mongodb.
 * @param title title of the post.
 * @param cat category of the post.
 * @param value content of the post.
 * @param media media that the post contains.
 */
export const postPost = async (title: string, cat: string, value: string, media: string) => {
    await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
            title,
            catSlug: "hempidle",
            desc: value,
            img: media,
            slug: slugify(title),
        })
    });
}