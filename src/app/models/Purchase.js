const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Purchase = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  ad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  }
})

Purchase.plugin(mongoosePaginate)

module.exports = mongoose.model('Purchase', Purchase)
