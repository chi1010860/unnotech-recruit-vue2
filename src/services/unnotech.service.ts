import axios, { AxiosInstance } from 'axios'
import { IBook, IBookProfile } from './unnotech.dto'

const baseURL = 'https://fe-interview-api.unnotech.com/'

class UnnotechService {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL,
    })
  }

  public async getBookList(): Promise<IBook[]> {
    return (await this.client.get('/books')).data
  }

  public async getBookProfile(id: number): Promise<IBookProfile> {
    return (await this.client.get(`/profile/${id}`)).data
  }

  public async updateBookProfile(
    id: number,
    payload: IBookProfile,
  ): Promise<boolean> {
    return (await this.client.patch(`/profile/${id}`, payload)).status == 200
  }
}

export const unnotechService = new UnnotechService()
