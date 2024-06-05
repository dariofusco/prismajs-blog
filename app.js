const { createPost,
    readPostBySlug,
    readPosts,
    updatePostById,
    deletePostById } = require('./utils.js');

/*
prisma.post
    .create({
        data: {
            title: "Secondo Post",
            slug: "secondo-post",
            content: "Contenuto di prova",
            published: true,
            categoryId: 1,
            tags: {
                connect: [
                    {
                        id: 1,
                    },
                ],
            },
        },
    })
    .then((newPost) => {
        console.log("Nuovo Post creato:", newPost);
    })
    .catch((error) => console.error(error));
*/

/*
prisma.category
    .create({
        data: {
            name: "Categoria 1",
        },
    })
    .then((newCategory) => {
        console.log("Nuova Categoria creata:", newCategory);
    })
    .catch((error) => console.error(error));
*/

/*
prisma.tag
    .create({
        data: {
            name: "Tag 1",
        },
    })
    .then((newTag) => {
        console.log("Nuovo Tag creato:", newTag);
    })
    .catch((error) => console.error(error));
*/

/*
prisma.post
    .findMany()
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => console.error(error));
*/

/*
prisma.post
    .findUnique({
        where: {
            slug: "primo-post",
        },
        include: {
            category: true,
            tags: {
                select: {
                    name: true,
                },
            },
        },
    })
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => console.error(error));
*/

/*
prisma.post
    .update({
        where: {
            id: 1,
        },
        data: {
            published: false,
            tags: {
                set: [
                    {
                        id: 1,
                    },
                ],
            },
        },
    })
    .then((postUpdated) => {
        console.log(postUpdated);
    })
    .catch((error) => console.error(error));
*/

/*
prisma.post
    .delete({
        where: {
            id: 1,
        },
    })
    .then((postDeleted) => {
        console.log(postDeleted);
    })
    .catch((error) => console.error(error));
*/