import {makeAutoObservable} from 'mobx'

export default class ProductStore{
    constructor(){
        this._product = [
            // {id:1, name:"Флюдеболли", price:600, img: `https://avatars.mds.yandex.net/get-zen_doc/1852544/pub_5da06d8ebc251465cd79604c_5da06ff85d6c4b00b0b628b1/scale_1200`},
            {id:2, name:"Кекс", price:600, img: `https://reports.agrana.com/_Resources/Static/Packages/Neos.Demo/Images/teaser-fruit.jpg`},
            {id:3, name:"Меренговый рулет", price:600, img: `https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkFclT_m6H4cyOT786syiDyqaKTM5SRkZCeTgDn6uOyic`}
        ]

        this._selectedProduct = {};
        
        makeAutoObservable(this);
    }

    setProduct(product){
        this._product = product;
    }
    setSelectedProduct(type){
        this._selectedProduct = type;
    }

    get products(){
        return this._product
    }
    get selectedProduct(){
        return this._selectedProduct
    }
}