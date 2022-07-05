const log = require("../model/log");
const moment = require("moment");
const Response = require("../const/response");

// add data log
exports.addlog = (data) =>
    new Promise((resolve, reject) => {
        // console.log(data);
        log
            .create(data)
            .then(() => resolve(Response.successResponse("Berhasil Menambah Data")))
            .catch(() => reject(Response.errorResponse("Gagal Menambah Data")));
    });
// get log
exports.getlog = (data) =>
    new Promise((resolve, reject) => {
        log.find().then((data) => {
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
//   Hapus log
exports.deletelog = async(req, res) => {
    try {
        await log.findOneAndDelete({ _id: req.params.id });
        res.json(Response.successResponse("Berhasil Menghapus Data"));
    } catch (error) {
        res.json(Response.errorResponse("Gagal Menghapus Data"));
    }
};

//   update log
exports.updatelog = async(req, res) => {
    try {
        await log.findOneAndUpdate({ _id: req.params.id }, {
            Tanggal: moment().format("DD-MM-YYYY"),
            Jam: moment().format("HH:mm:ss"),
            Aktivitas: req.body.Aktivitas,
        });
        res.json(Response.successResponse("Berhasil Update Data "));
    } catch (error) {
        res.json(Response.errorResponse("Gagal Update Data "));
    }
};