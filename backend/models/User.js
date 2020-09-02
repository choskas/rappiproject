const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true
    },
    username: {
      type: String,
      unique: true
    },
    img:{
      type: String,
      default: 'https://www.uic.mx/posgrados/files/2018/05/default-user.png'
    },
    role: {
      type: String,
      enum: ['admin', 'client'],
      default: 'client'
    },
  },
 
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, {
  usernameField: 'username'
})

module.exports = model('User', userSchema)