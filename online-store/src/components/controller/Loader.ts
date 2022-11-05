import { ResponceMethod, ResponceStatus } from "./Responce"

export class Loader {
  constructor(private readonly link: string){
    this.link = link
  }

  protected getResponce<T>(
    callback: (data: T) => void
  ): void {
    this.load(ResponceMethod.GET, callback)
  }

  protected errorHandler(res: Response): Response {
    if (!res.ok){
      if (
        res.status === ResponceStatus.unauthorized || res.status === ResponceStatus.notFound
      ){
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`)
      }
      throw Error(res.statusText)
    }

    return res
  }

  load<U>(
    method: string,
    callback: (data: U) => void
  ){
    fetch(this.link, { method })
      .then(this.errorHandler)
      .then((res: Response): Promise<U> => res.json())
      .then((data: U): void => callback(data))
      .catch((err: Error): void => console.error(err));
  }
}
