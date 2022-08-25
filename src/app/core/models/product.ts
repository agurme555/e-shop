export interface Product{
    "id":number,
    "title":string,
    "price":number,
    "description":string,
    "category":string,
    "image":string,
    "ratings":Ratings
}

export interface Ratings{
    "rate":number,
    "count":number
}
