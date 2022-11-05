import { Loader } from "./Loader"

export class Controller extends Loader {
  private static readonly linkToProducts = './server/db.json'

  constructor() {
    super(Controller.linkToProducts)
  }

  getProducts<T>(callback: (data: T) => void){
    super.getResponce(callback)
  }
}
