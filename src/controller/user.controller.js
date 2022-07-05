const UserModel = require("../model/user.model");
const Response = require("../const/response");
const Bcrypt = require("bcrypt");
const moment = require("moment");
/**
 * USer Register
 * */
exports.signup = (data) =>
  new Promise((resolve, reject) => {
    // console.log(data)
    UserModel.findOne({
      email: data.email,
      waktu: moment().format("HH-mm"),
    }).then((user) => {
      if (user) {
        reject(Response.errorResponse("E-Mail Sudah Digunakan"));
      } else {
        Bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash;
          UserModel.create(data)
            .then(() => {
              resolve(Response.successResponse("Berhasil Registrasi Akun!!!"));
            })
            .catch(() => {
              reject(Response.errorResponse("Gagal Registrasi"));
            });
        });
      }
    });
  });

/*
  User Login
  */
exports.login = (data) =>
  new Promise((resolve, reject) => {
    UserModel.findOne({
      email: data.email,
      // waktu: moment().format("HH-mm"),
    }).then((user) => {
      if (user) {
        if (Bcrypt.compareSync(data.password, user.password)) {
          resolve(
            Object.assign(Response.successResponse("Berhasil Login !!!!"), {
              user: user,
            })
          );
        } else {
          reject(Response.errorResponse("Password Salah"));
        }
      } else {
        reject(Response.errorResponse("E-Mail Tidak Terdaftar/Email Salah"));
      }
    });
  });

// exports.add = (data) =>
//   new Promise((resolve, reject) => {
//     UserModel.create(data)
//       .then(() => resolve(Response.successResponse("Berhasil Menambah Data")))
//       .catch(() => reject(Response.errorResponse("Gagal Menambah Data")));
//   });

exports.add = (data) =>
  new Promise((resolve, reject) => {
    // console.log(data)
    UserModel.findOne({
      email: data.email,
    }).then((user) => {
      if (user) {
        reject(Response.errorResponse("E-Mail Sudah Digunakan"));
      } else {
        Bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash;
          //   menambahkan waktu
          (data.waktu = moment().format("HH:mm")),
            UserModel.create(data)
              .then(() => {
                resolve(Response.successResponse("Berhasil Registrasi Akun!!!"));
              })
              .catch(() => {
                reject(Response.errorResponse("Gagal Registrasi"));
              });
        });
      }
    });
  });

// get User
exports.getuser = (data) =>
  new Promise((resolve, reject) => {
    UserModel.find().then((data) => {
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
//   Hapus User
exports.delete = async (req, res) => {
  try {
    await UserModel.findOneAndDelete({ _id: req.params.id });
    res.json(Response.successResponse("Berhasil Menghapus Data"));
  } catch (error) {
    res.json(Response.errorResponse("Gagal Menghapus Data"));
  }
};

//   update User
exports.update = async (req, res) => {
  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        email: req.body.email,
        password: req.body.password,
        nama: req.body.nama,
        role: req.body.role,
        telp: req.body.telp,
        jeniskelamin: req.body.jeniskelamin,
        waktu: moment().format("HH:mm"),
      }
    );
    res.json(Response.successResponse("Berhasil Update Data "));
  } catch (error) {
    res.json(Response.errorResponse("Gagal Update Data "));
  }
};
