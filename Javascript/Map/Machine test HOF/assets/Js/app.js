const cl=console.log;

const products = [
    {
      name: "Smartphone",
      category: "Electronics",
      price: 599.99,
      brand: "Samsung",
      color: "Black",
      weight: "150g",
      screenSize: "6.5 inches"
    },
    {
      name: "Laptop",
      category: "Electronics",
      price: 1099.99,
      brand: "Apple",
      color: "Silver",
      processor: "Intel Core i7",
      RAM: "16GB",
      storage: "512GB SSD"
    },
    {
      name: "Running Shoes",
      category: "Sports",
      price: 89.99,
      brand: "Nike",
      color: "Blue",
      size: "10",
      gender: "Men's"
    },
    {
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 49.99,
      brand: "Keurig",
      color: "Black",
      capacity: "10 cups",
      power: "1200W"
    },
    {
      name: "Graphic T-Shirt",
      category: "Clothing",
      price: 24.99,
      brand: "Adidas",
      color: "White",
      size: "Medium",
      material: "Cotton"
    },
    {
      name: "Wireless Earbuds",
      category: "Electronics",
      price: 129.99,
      brand: "Apple",
      color: "White",
      batteryLife: "Up to 24 hours",
      connection: "Bluetooth 5.0"
    },
    {
      name: "Backpack",
      category: "Accessories",
      price: 79.99,
      brand: "The North Face",
      color: "Blue",
      material: "Nylon",
      capacity: "25 liters"
    },
    {
      name: "Digital Camera",
      category: "Electronics",
      price: 699.99,
      brand: "Canon",
      color: "Black",
      resolution: "24.1 megapixels",
      lens: "18-55mm"
    },
    {
      name: "Yoga Mat",
      category: "Fitness",
      price: 29.99,
      brand: "Lululemon",
      color: "Purple",
      material: "Eco-friendly TPE",
      thickness: "6mm"
    },
    {
      name: "Smart Watch",
      category: "Electronics",
      price: 199.99,
      brand: "Fitbit",
      color: "Black",
      features: ["Heart Rate Monitor", "Activity Tracking", "Water Resistant"]
    },
    {
      name: "Gaming Console",
      category: "Electronics",
      price: 399.99,
      brand: "Sony",
      color: "Black",
      storage: "1TB",
      resolution: "4K"
    },
    {
      name: "Cookware Set",
      category: "Kitchen",
      price: 149.99,
      brand: "Cuisinart",
      color: "Silver",
      pieces: 10,
      material: "Stainless Steel",
      dishwasherSafe: true
    },
    {
      name: "Hiking Boots",
      category: "Outdoor Gear",
      price: 129.99,
      brand: "Merrell",
      color: "Brown",
      waterproof: true,
      size: "9"
    },
    {
      name: "Wireless Mouse",
      category: "Electronics",
      price: 19.99,
      brand: "Logitech",
      color: "Red",
      connection: "2.4GHz Wireless",
      DPI: "1000"
    },
    {
      name: "Dumbbell Set",
      category: "Fitness",
      price: 49.99,
      brand: "CAP Barbell",
      color: "Black",
      weight: "20 lbs",
      material: "Cast Iron"
    },
    {
      name: "Sunglasses",
      category: "Accessories",
      price: 129.99,
      brand: "Ray-Ban",
      color: "Gold",
      frameMaterial: "Metal",
      lensColor: "Green"
    },
    {
      name: "Portable Speaker",
      category: "Electronics",
      price: 79.99,
      brand: "JBL",
      color: "Blue",
      connectivity: ["Bluetooth", "AUX"],
      batteryLife: "Up to 12 hours"
    },
    {
      name: "Tennis Racket",
      category: "Sports",
      price: 159.99,
      brand: "Wilson",
      color: "Red",
      gripSize: "4 3/8",
      headSize: "100 sq in"
    },
    {
      name: "Running Jacket",
      category: "Sports",
      price: 59.99,
      brand: "Under Armour",
      color: "Black",
      size: "Large",
      weatherResistance: "Waterproof"
    },
    {
      name: "Desk Lamp",
      category: "Home Accessories",
      price: 39.99,
      brand: "IKEA",
      color: "White",
      brightness: "800 lumens",
      adjustable: true
    }
   ];
  

// products with name and color with uppercase
   let arr=products.map(prod=>{
   
    return{
        prodName:prod.name,
        prodCat:prod.category,
        prodPrice:prod.price,
        prodBrand:prod.brand,
        prodColor:prod.color.toUpperCase(),
        prodBright:prod.brightness,
        prodAdjust:prod.adjustable
        
    }
    

   })
   cl(arr);

//    color of each prod uppercase

let col=products.map(prod=>{
    return {
        
        color:prod.color.toUpperCase()
    }
})
cl(col);

//    products with category =electronics

   let arr1=products.filter(prod=>{
    return prod.category.trim().toLowerCase().includes('electronics');
   })
   cl(arr1);

//    new array containing only the category of each product
let catg=products.map(comp=>{
    return{
        catg:comp.category
    }
})
cl(catg);
    


// array of products having color Black

let arr3=products.filter(prod=>{
    return prod.color.trim().toLowerCase().includes('black');
})
cl(arr3);

// array of products with name and price 


let array=products.map(prod=>{
    return{
        prodNAme:prod.name,
        prodPrice:prod.price
    }
   
})
cl(array);

// calculate the weight of each product by adding new property to each product

// let red=products.reduce(accum,cv=>{
//     return accum=accum+cv;
// },weight)
// cl(red);

// find all products in sports category

let sport=products.filter(prod=>{
    return prod.category.trim().toLowerCase().includes("sports")
})
cl(sport);

// array of products having name category and price

let desc=products.map(prod=>{
    return{
        ProdNAme:prod.name,
        ProdCat:prod.category,
        Prodprice:prod.price
    }
})
cl(desc);

// to check whether products are in stock

let prods=products.map(prod=>{
    return{
        ProdName:prod.name,
        inStock:true
    }
})
cl(prods);


   