export interface IProduct {
        "id":number
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
        "id": number;
        "title": null | string,
        "name": 'Men' | 'Famale' | 'Kids',
        "keywords": null | string,
        "description": null | string,
        "slug": string,
        "gender_categories": [] | categoryWIthSub[]
}

export interface categoryWIthSub {
        "id": number
        "title": string,
        "name": string,
        "keywords": string,
        "description": string,
        "slug": string,
        "subcategory": [] | categoryWIthSub[]

}

export interface productDetail {
        "id": number,
        "name": string,
        "title": string,
        "description": string,
        "quantity": null | number,
        "slug": string,
        "price": number,
        "discount_price": null | number,
        "stock": string,
        "image": string,
        "images": string[],
        "sizes":
        {
                "id": number,
                "name": string
        }[]
        ,
        "materials": {
                "id": number,
                "name": string
        }[],
        "categories": {
                "id": number,
                "name": string
        }[]

}