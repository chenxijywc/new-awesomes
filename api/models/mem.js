const DB = require('../lib/db')
const MemInfo = require('./mem_info')
const Oper = require('./oper')

module.exports = DB.Model.extend({
  tableName: 'mems',
  mem_info: function () {
    return this.hasOne(MemInfo)
  },
  opers: function () {
    return this.hasMany(Oper)
  }
})
