import { host, authHost } from './httpIndex';


export const AddGoodToBasket = (order) => {
    return authHost.post('api/basket/test', JSON.stringify(order), {
        headers: { 'Content-Type': 'application/json' }
      });
}