import { Injectable } from '@nestjs/common'

@Injectable()
export class PostsService {
  public findAll(userId: string) {
    return [
      {
        title: 'title 1',
        content: 'content 1',
      },
      {
        title: 'title 2',
        content: 'content 2',
      },
    ]
  }
}
