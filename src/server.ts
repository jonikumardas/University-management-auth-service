import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
async function DatabaseConnection() {
  try {
    await mongoose.connect(config.data_base_url as string)
    console.log('database connection successful')
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('data conncetion faild', error)
  }
}
DatabaseConnection()
