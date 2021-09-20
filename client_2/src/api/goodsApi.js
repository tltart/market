import { AddGoodBasket, RemoveGoodBasket } from '../store/goodsReducer'

export default class GoodApi {

    static getGood(offers) {
        if (!offers.length) {
            if (localStorage.length) {
                for (let i = 0; i < localStorage.length; i++) {
                    let key = localStorage.key(i);
                    AddGoodBasket(JSON.parse(localStorage.getItem(key)));
                }
                
            }
        }
    }

    static removeGood(id) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (JSON.parse(localStorage.getItem(key)).id == id) {
                RemoveGoodBasket(id);
                localStorage.removeItem(key);
                window.location.href = '';
            }
        }
    }
}

