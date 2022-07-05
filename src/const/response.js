module.exports = {
    errorResponse: (message) => {
      return {
        status: false,
        message: message
      }
    },
    successResponse: (message) => {
      return {
        status: true,
        message: message
      }
    },
    successResult: (data) => {
      return {
        status: true,
        message: 'Berhasil Mendapatkan Data',
        result: data
      }
    },
    nullResult: () => {
      return {
        success: false,
        message: 'Tidak Ada Data',
        result: null
      }
    },
    errorResult: () => {
      return {
        success: false,
        message: 'Gagal Mendapatkan Data',
        data: []
      }
    }
  }