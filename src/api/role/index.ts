import { Api, Get } from '@midwayjs/hooks';

export const list = Api(
  Get('/role/list'),
  async () => {
    return []
  }
)
