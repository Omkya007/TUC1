const cl=console.log;

const products=[
  {
    "id": 1,
    "name": "Product 1",
    "price": 10.99,
    "category": "Electronics",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "availability": true
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 24.99,
    "category": "Clothing",
    "description": "Suspendisse potenti. Nulla facilisi. Duis sit amet tempor nisi.",
    "availability": false,
    "color": "Blue"
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 39.99,
    "category": "Home & Kitchen",
    "description": "Phasellus vel semper nisi, vitae tincidunt nisi.",
    "availability": true,
    "weight": "2 lbs"
  },
  {
    "id": 4,
    "name": "Product 4",
    "price": 15.99,
    "category": "Beauty",
    "description": "Fusce congue bibendum erat, eu cursus ipsum cursus et.",
    "availability": true,
    "size": "Small"
  },
  {
    "id": 5,
    "name": "Product 5",
    "price": 49.99,
    "category": "Sports & Outdoors",
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "availability": false,
    "brand": "Nike"
  },
  {
    "id": 6,
    "name": "Product 6",
    "price": 79.99,
    "category": "Books",
    "description": "Nullam fringilla aliquam ipsum, eu dapibus lacus fermentum id.",
    "availability": true,
    "author": "John Doe"
  },
  {
    "id": 7,
    "name": "Product 7",
    "price": 29.99,
    "category": "Toys & Games",
    "description": "Curabitur laoreet placerat ex, eget pharetra lorem tempor nec.",
    "availability": false,
    "age_range": "3+"
  },
  {
    "id": 8,
    "name": "Product 8",
    "price": 19.99,
    "category": "Health & Personal Care",
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    "availability": true,
    "type": "Shampoo"
  },
  {
    "id": 9,
    "name": "Product 9",
    "price": 99.99,
    "category": "Electronics",
    "description": "Duis volutpat nisl nec est aliquam auctor.",
    "availability": true,
    "warranty": "1 Year Limited Warranty"
  },
  {
    "id": 10,
    "name": "Product 10",
    "price": 64.99,
    "category": "Clothing",
    "description": "Vivamus sed mi semper, eleifend nulla nec, ultrices sapien.",
    "availability": false,
    "gender": "Women"
  },
  {
    "id": 11,
    "name": "Product 11",
    "price": 149.99,
    "category": "Home & Kitchen",
    "description": "Integer vitae odio ut mi volutpat lobortis nec sed erat.",
    "availability": true,
    "material": "Stainless Steel"
  },
  {
    "id": 12,
    "name": "Product 12",
    "price": 5.99,
    "category": "Beauty",
    "description": "Etiam nec purus at tortor auctor tincidunt sit amet ac risus.",
    "availability": true,
    "quantity": 3
  },
  {
    "id": 13,
    "name": "Product 13",
    "price": 34.99,
    "category": "Sports & Outdoors",
    "description": "Maecenas ullamcorper tellus a consequat interdum.",
    "availability": false,
    "size": "Large"
  },
  {
    "id": 14,
    "name": "Product 14",
    "price": 9.99,
    "category": "Books",
    "description": "Praesent non felis fringilla, interdum turpis id, luctus magna.",
    "availability": true,
    "author": "Jane Smith"
  },
  {
    "id": 15,
    "name": "Product 15",
    "price": 49.99,
    "category": "Toys & Games",
    "description": "Nam at convallis neque. Ut ullamcorper massa id dui euismod, ac condimentum lectus maximus.",
    "availability": false,
    "age_range": "5-8"
  },
  {
    "id": 16,
    "name": "Product 16",
    "price": 24.99,
    "category": "Health & Personal Care",
    "description": "Sed nec nunc volutpat, fringilla ex id, placerat erat.",
    "availability": true,
    "type": "Toothpaste"
  },
  {
    "id": 17,
    "name": "Product 17",
    "price": 199.99,
    "category": "Electronics",
    "description": "Mauris dictum, ex vel volutpat ullamcorper, eros velit rhoncus tortor, ac placerat augue felis a ligula.",
    "availability": true,
    "warranty": "2 Years Limited Warranty"
  },
  {
    "id": 18,
    "name": "Product 18",
    "price": 69.99,
    "category": "Clothing",
    "description": "Vestibulum et est at quam varius malesuada ac ac urna.",
    "availability": false,
    "gender": "Men"
  },
  {
    "id": 19,
    "name": "Product 19",
    "price": 99.99,
    "category": "Home & Kitchen",
    "description": "Fusce tincidunt eros et arcu tincidunt, quis eleifend dolor laoreet.",
    "availability": true,
    "material": "Ceramic"
  },
  {
    "id": 20,
    "name": "Product 20",
    "price": 12.99,
    "category": "Beauty",
    "description": "Morbi nec lectus sit amet dui bibendum vehicula eu at leo.",
    "availability": true,
    "quantity": 5
  },
  {
    "id": 21,
    "name": "Product 21",
    "price": 29.99,
    "category": "Sports & Outdoors",
    "description": "Donec vestibulum orci eu ligula sodales, in maximus tortor sollicitudin.",
    "availability": false,
    "size": "Medium"
  },
  {
    "id": 22,
    "name": "Product 22",
    "price": 19.99,
    "category": "Books",
    "description": "Aliquam quis libero vitae lorem venenatis efficitur.",
    "availability": true,
    "author": "Mark Johnson"
  },
  {
    "id": 23,
    "name": "Product 23",
    "price": 39.99,
    "category": "Toys & Games",
    "description": "Suspendisse potenti. Nullam vehicula diam nec ex ultrices, id tempor ante bibendum.",
    "availability": false,
    "age_range": "8-12"
  },
  {
    "id": 24,
    "name": "Product 24",
    "price": 14.99,
    "category": "Health & Personal Care",
    "description": "Nunc non lacus eu lacus tempus efficitur vel id quam.",
    "availability": true,
    "type": "Soap"
  },
  {
    "id": 25,
    "name": "Product 25",
    "price": 249.99,
    "category": "Electronics",
    "description": "Vivamus varius dolor eget ipsum rhoncus, et congue tortor tristique.",
    "availability": true,
    "warranty": "3 Years Limited Warranty"
  },
  {
    "id": 26,
    "name": "Product 26",
    "price": 79.99,
    "category": "Clothing",
    "description": "Ut rutrum, orci vitae tempor consequat, sem nisi consequat tortor, nec lobortis purus justo et velit.",
    "availability":false ,
    "gender": "Unisex"
  },
  {
    "id": 27,
    "name": "Product 27",
    "price": 119.99,
    "category": "Home & Kitchen",
    "description": "Duis sit amet sapien ac turpis egestas sollicitudin eu eu lacus.",
    "availability": true,
    "material": "Glass"
  },
  {
    "id": 28,
    "name": "Product 28",
    "price": 29.99,
    "category": "Beauty",
    "description": "Vestibulum ultricies nulla eu ante scelerisque varius.",
    "availability": true,
    "quantity": 10
  },
  {
    "id": 29,
    "name": "Product 29",
    "price": 54.99,
    "category": "Sports & Outdoors",
    "description": "Cras tincidunt augue non tortor vehicula, eget feugiat libero bibendum.",
    "availability": false,
    "size": "Extra Large"
  },
  {
    "id": 30,
    "name": "Product 30",
    "price": 39.99,
    "category": "Toys & Games",
    "description": "Nam vehicula erat et orci molestie, non fermentum arcu molestie.",
    "availability": true,
    "age_range": "12+"
  }
 ]


//  array of only the prices of product

let prod=products.map(prod=>{
  return {
    price: prod.price
  }
})
cl(prod);

// conatining only the name and price of each product

let prod1=products.map(prod=>{
  return{
    prodname:prod.name,
    prodprice:prod.price
  }
})
cl(prod1);

// the product of array to retrive products with prices higher than $50

let prod2=products.filter(prod=>{
  return prod.price>50
})
cl(prod2);

// the array of only products in the eletcronics category

let prod3=products.filter(prod=>{
  return prod.category.toLowerCase().includes("electronics");
})
cl(prod3);

//  add a new key-value pair to each product object, indicating whether the product is on sale or not.

// let prod4=products.filter(prod=>{
//   if( prod.category.toLowerCase().includes("clothing")){
//   //  if( prod.availability===true){
//   //   cl(prod);
//   //   return prod.sale='yes'
//   //  }else{
//   //  return prod.sale='not sale'
//   //  }
    
//   // }

// })

let prod4=products.filter(prod=>{
  let obj=prod
  if(prod.category.toLowerCase().includes("clothing")){
    
    prod.inStock=prod.availability
    return obj
  }
  
})



cl(prod4);

//  obtain a list of product names for available products in the "Clothing" category only.

let prod5=products.filter(prod=>{
  return prod.category.toLowerCase().includes("clothing")
})
.map(prod5=>{
  return{
    prodname:prod5.name
    
  }
})
cl(prod5)

// retrieve products with descriptions longer than 50 characters.
//  extract an array of unique product categories.

let prod6=products.filter(prod=>{
  return prod.description.length>50
})

.map(prod6=>{
  return{
    prodCat:prod6.category
  }
})
cl(prod6)

//  retrieve products with prices falling within a specific price range, for example, between $20 and $50.
let prod7=products.filter(prod=>{
  return prod.price<=50 && prod.price>=20
})
.map(prod=>{
  return{
    prodprice:prod.price
  }
})
cl(prod7);



// create a new array containing objects with only the ID and name of each product, while excluding other attributes.

let obj=products.map(prod=>{
  return{
    prodName:prod.name,
    prodID:prod.id
  }
})
cl(obj);

// calculate the total value of each product by multiplying its price by its quantity (if available).

let prod8=products.filter(prod=>{
  let obj1=prod
  if (prod.quantity>1){
    prod.total=prod.quantity*prod.price
    return obj1
  }
 
  
})

cl(prod8);


