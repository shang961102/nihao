import { request } from "./request.js"

export function getDetail(iid) {
    return request({
        url: 'http://152.136.185.210:7878/api/m5/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice


    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;


    }
}

// 获取详情页中的推荐图片的数据
export function getRecommend() {
    return request({
        url: 'http://152.136.185.210:7878/api/m5/recommend',

    })
}