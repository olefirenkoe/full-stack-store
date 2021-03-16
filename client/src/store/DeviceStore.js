import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Fridge"},
            {id: 2, name: "Smartphones"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating:5, img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'},
            {id: 2, name: "Iphone 12 pro", price: 25000, rating:5, img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'},
            {id: 3, name: "Iphone 12 pro", price: 25000, rating:5, img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'},
            {id: 4, name: "Iphone 12 pro", price: 25000, rating:5, img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'},
            {id: 5, name: "Iphone 12 pro", price: 25000, rating:5, img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'},
            {id: 6, name: "Iphone 12 pro", price: 25000, rating:5, img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'},
            {id: 7, name: "Iphone 12 pro", price: 25000, rating:5, img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'},
            {id: 8, name: "Iphone 12 pro", price: 25000, rating:5, img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'},
            {id: 9, name: "Iphone 12 pro", price: 25000, rating:5, img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}