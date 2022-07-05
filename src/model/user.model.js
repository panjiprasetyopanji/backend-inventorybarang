const mongoose = require("mongoose");
const moment = require("moment");

const dataSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
    },

    password: {
        required: true,
        type: String,
    },

    nama: {
        required: true,
        type: String,
    },

    role: {
        required: true,
        type: String,
    },

    telp: {
        required: true,
        type: Number,
    },

    jeniskelamin: {
        required: true,
        type: String,
    },

    tanggal: {
        type: String,
        default: moment().format("DD-MM-YYYY"),
    },

    waktu: {
        type: String,
        default: moment().format("HH:mm:ss"),
    },
});

module.exports = mongoose.model("user", dataSchema);