import * as productCategories from '../productCategories'

export interface IDataProduct {
  id: string
  urlToImg: string
  name: string
  brand: productCategories.Brand
  amount: number
  year: number
  color: Array<productCategories.Color>
  company: productCategories.Company
  popular: boolean
  cost: string
}
