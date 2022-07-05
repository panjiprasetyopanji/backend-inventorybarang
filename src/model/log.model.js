import mongoose from "mongoose";
import moment from "moment";

// import moment from "moment";
const dataSchema = new mongoose.Schema({
    tanggal: {
        type: String,
        default: moment().format("DD-MM-YYYY"),
    },

    waktu: {
        type: String,
        default: moment().format("HH:mm:ss"),
    },

    nama: {
        type: String,
        required: true,
    },
});

export default mongoose.model("log", dataSchema);