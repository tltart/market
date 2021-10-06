import { host, authHost } from './httpIndex';


export const AddGoodToBasket = async (order) => {
    return await authHost.post('api/basket/test', JSON.stringify(order), {
        headers: { 'Content-Type': 'application/json' }
      });
}

export const GetGoodToStore = async () => {
  return await host.get('api/product');
}