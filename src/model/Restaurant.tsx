class Restaurant{
    id:String;
    name:String;
    rating:Number;
    review_count:Number;
    price:String;
    image:String;
    isPresent:Boolean;

    constructor(id:String, name:String, review_count: Number, rating:Number, price: String, image: String, isPresent:Boolean){
        this.id = id;
        this.name = name;
        this.review_count = review_count;
        this.rating = rating;
        this.price = price;
        this.image = image;
        this.isPresent = isPresent;
    }
}

export default Restaurant;