import { Api, Get } from '@midwayjs/hooks';

export const list = Api(
  Get('/user/list'),
  async () => {
    return []
  }
)
