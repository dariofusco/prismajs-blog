const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const createPost = (data, newPost) => {
    prisma.post
        .create({ data })
        .then(post => newPost(post))
        .catch((error) => console.error(error));
}

const readPostBySlug = (slug, post) => {
    prisma.post
        .findUnique({
            where: { slug },
            include: {
                category: true,
                tags: {
                    select: {
                        name: true,
                    },
                },
            },
        })
        .then(post => post(post))
        .catch((error) => console.error(error));
}

const readPosts = (posts) => {
    prisma.post
        .findMany()
        .then(post => posts(post))
        .catch((error) => console.error(error));
}

const updatePostById = (id, data, postUpdated) => {
    prisma.post
        .update({
            where: { id }, data
        })
        .then(post => postUpdated(post))
        .catch((error) => console.error(error));
}

const deletePostById = (id, postDeleted) => {
    prisma.post
        .delete({
            where: { id }
        })
        .then(post => postDeleted(post))
        .catch((error) => console.error(error));
}

module.exports = {
    createPost,
    readPostBySlug,
    readPosts,
    updatePostById,
    deletePostById
}

