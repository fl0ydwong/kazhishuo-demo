'use strict';

module.exports = {
    card: {
        title: { type: String, required: true },
        author: { type: String, required: true },
        content: { type: String, required: true },
        bgurl: { type: String, required: true },
        createTime: { type: Number, required: true },
        modifyTime: { type: Number, required: true },
        creator: { type: String, required: true },
        category: { type: String, required: true },
        tags: { type: String, required: true },
        boardID: { type: String, required: true },
        userID: { type: String, required: true }
    },
    board: {
        name: { type: String, required: true },
        tags: { type: String, required: true },
        description: { type: String, required: true },
        userID: { type: String, required: true },
        userName: { type: String, required: true }
    },
    user: {
        name: { type: String, required: true },
        pwd: { type: String, required: true },
        nick: { type: String, required: true },
        introduction: { type: String, required: true },
        email: { type: String, required: true },
        tags: { type: String, required: true }
    }
}
