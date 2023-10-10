export interface IProduct {

        "name": string,
        "title": string,
        "description": string,
        "quantity": null,
        "slug": null,
        "price": number,
        "discount_price": null,
        "stock": string,
        "image": string

}

export interface IGenderWithCategory {
        "id":number;
        "title": null | string,
        "name": 'Men'|'Famale'|'Kids',
        "keywords": null | string,
        "description": null | string,
        "slug": string,
        "gender_categories": [] |categoryWIthSub[]
}

export interface categoryWIthSub {
        "id":number
        "title": string,
        "name": string,
        "keywords": string,
        "description": string,
        "slug": string,
        "subcategory": [] | categoryWIthSub[]

}