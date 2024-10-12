//Hitesh channel
var sellingPrice = 199;
var listingPrice = 799;

var discountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100

var displayDiscountPrice = Math.round(discountPrice)

console.log("After discount: ", displayDiscountPrice,"%");
