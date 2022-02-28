import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'

export interface UserDocument extends mongoose.Document {
  name: string
  account: string
  password: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    account: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

userSchema.index({ account: 1, deletedAt: 1 }, { unique: true })

userSchema.pre('save', async function (next) {
  const user = this as UserDocument

  if (!user.isModified('password')) {
    return next()
  }

  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'))

  const hash = bcrypt.hashSync(user.password, salt)

  user.password = hash

  return next()
})

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  const user = this as UserDocument

  return bcrypt.compare(candidatePassword, user.password).catch(() => false)
}

const UserModel = mongoose.model<UserDocument>('User', userSchema)

export default UserModel
