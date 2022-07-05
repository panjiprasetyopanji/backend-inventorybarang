const BarangModel = require("../model/barang.model");
const Response = require("../const/response");

// add data barang
exports.add = (data) =>
    new Promise((resolve, reject) => {
        console.log(data);
        BarangModel.create(data)
            .then(() => resolve(Response.successResponse("Berhasil Menambah Data")))
            .catch(() => reject(Response.errorResponse("Gagal Menambah Data")));
    });
// get barang
exports.getbarang = (data) =>
    new Promise((resolve, reject) => {
        BarangModel.find().then((data) => {
            if (data) {
                resolve(
                    Object.assign(Response.successResponse("Berhasil"), {
                        data: data,
                    })
                );
            } else {
                reject(Response.errorResult());
            }
        });
    });
//   Hapus barang
exports.delete = async(req, res) => {
    try {
        await BarangModel.findOneAndDelete({ _id: req.params.id });
        res.json(Response.successResponse("Berhasil Menghapus Data"));
    } catch (error) {
        res.json(Response.errorResponse("Gagal Menghapus Data"));
    }
};

//   update barang
exports.update = async(req, res) => {
    try {
        await BarangModel.findOneAndUpdate({ _id: req.params.id }, {
            nama: req.body.nama,
            kategori: req.body.kategori,
            harga: req.body.harga,
            stock: req.body.stock,
        });
        res.json(Response.successResponse("Berhasil Update Data "));
    } catch (error) {
        res.json(Response.errorResponse("Gagal Update Data "));
    }
};