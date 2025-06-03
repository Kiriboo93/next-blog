import { Category, Comment, Post, Session, User } from "../../prisma/app/generated/prisma/client";

// Type of Post extending prisma generated Post with added fields category, user and comments.
export interface CustomPost extends Post {
    cat: CustomCategory,
    user: CustomUser,
    comments: Comment[]
}

// Type of Category extending prisma generated Category with added field posts.
export interface CustomCategory extends Category {
    Posts: Post[]
}

// Type of User extending prisma generated User with added fields sessions, Posts and Comment.
export interface CustomUser extends User {
    sessions: Session[],
    Post: Post[],
    Comment: Comment[]
}


// Type of Comment extending prisma generated Comment with added fields user and post.
export interface CustomComment extends Comment {
    user: CustomUser,
    post: CustomPost
}

// Type of search params.
export interface SearchParams {
    page: string,
    cat: string,
    slug: string
}