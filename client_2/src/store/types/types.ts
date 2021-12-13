
export type OfferType = {
    id: number
    name: string
    date: string
    taste: string
    price: number
    img: string
    count: number
    totalPiceProduct: number
    key: string
    totalPriceProduct: number
}
export type OrderType = {
    id: number
    name: string
    date: string
    taste: string
    price: number
    img: string
    count: number
    totalPiceProduct: number
    key: string
    totalPriceProduct: number
    dayToEnd: number
}
export type GoodType = { id: number, name: string, price: number, img: string, info: string, createAt: string, updateAt: string }


