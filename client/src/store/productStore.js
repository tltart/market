import {makeAutoObservable} from 'mobx'

export default class ProductStore{
    constructor(){
        this._product = [
            {id:1, name:"Флюдеболли", price:600, img: `https://avatars.mds.yandex.net/get-zen_doc/1852544/pub_5da06d8ebc251465cd79604c_5da06ff85d6c4b00b0b628b1/scale_1200`},
            {id:2, name:"Кекс", price:600, img: `https://milayaya.ru/wp-content/uploads/proga/111/images1/201812/milayaya-09121820174117_3.jpg`},
            {id:3, name:"Меренговый рулет", price:600, img: `https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkFclT_m6H4cyOT786syiDyqaKTM5SRkZCeTgDn6uOyic`}
        ]
        makeAutoObservable(this);
    }

    setProduct(product){
        this._product = product;
    }

    get products(){
        return this._product
    }
}