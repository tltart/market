import goodsReducer, { GoodActive, AddGoodBasket, InitialStateType } from './goodsReducer'
import { OfferType, GoodType } from "./types/types"

let state: InitialStateType

describe('Test Good Reducer', () => {

    beforeEach(() => {
        state  = {
            goods: [],
            names: ['Все', 'zephir', 'karamel', 'maffin', 'marshmelloy', 'tort'],
            activeGood: 0,
            offers: [],
            totalPrice: 0
        }
    })

    it('active good select', () => {
        let item = 3
        const action = GoodActive(item)
        let newState = goodsReducer(state, action)
        expect(newState.activeGood).toBe(item);

    })

    it('add good to basket', () => {

        let goodItem = {
            id: 1,
            name: 'tort',
            date: '27/12/2021',
            taste: 'apple',
            price: 500,
            img: 'http://pvmsf.ru',
            count: 2,
            totalPiceProduct: 2,
            key: 'sf3vlmsfdvlULKxcs3',
            totalPriceProduct: 1000
        }

        let action = AddGoodBasket(goodItem)
        let newState = goodsReducer(state, action)
        expect(newState.offers[0]).toBe(goodItem);
        expect(newState.offers.length).toBe(1);


    })

})