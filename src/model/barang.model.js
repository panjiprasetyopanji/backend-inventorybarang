const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    nama: {
        required: true,
        type: String,
    },
    kategori: {
        required: true,
        type: String,
    },
    harga: {
        required: true,
        type: Number,
    },
    stock: {
        required: true,
        type: Number,
    },
    gambar: {
        required: true,
        type: String,
    },
    // jurusan: {
    //     required: true,
    //     type: String
    // },
});

module.exports = mongoose.model("barang", dataSchema);