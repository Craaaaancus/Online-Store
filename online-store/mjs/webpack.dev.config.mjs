import { resolve } from 'path'

const envConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve(process.cwd(), '..', 'dist'),
  },
}

export { envConfig }
