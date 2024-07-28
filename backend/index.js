const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const jwt = require("jsonwebtoken"); 
const multer = require("multer");
const path =require("path");
const cors = require("cors");
const { type } = require("os");
const { error } = require("console");
const argon2 = require('argon2');
const crypto = require("crypto");



app.use(express.json());
app.use(cors());


// DATA BASE connection with mongodb
mongoose.connect("mongodb+srv://yuvrajgupta1125:GZ82BsRySmobqWDB@cluster0.keahlf6.mongodb.net/e-commarce");


// API CREATION

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

// image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})
//creating upload endpoint for image
app.use('/images',express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ success: 0, message: 'No file uploaded' });
    }
    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
  })
/*app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
  })
*/


//Schema for creating products

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        required:true,
    },
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        avilable:true,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})



//Creating Api for deleting products

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//Creating api for geting all products for showing to frontend
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    res.send(products);
})


/// Schema creating for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// Api for creating endpoint for registering the user
app.post('/signup',async(req,res)=>{

    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"Existing user found with same email address"})
    }
    let cart = {};
    for (let i=0; i<300;i++){
        cart[i]=0;
    }
    const hashedPassword = await argon2.hash(req.body.password);
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:hashedPassword,
        cartData:cart,
    })

    await user.save();

    const data ={
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

// Creating endpoint for user login
app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await Users.findOne({ email });
  if (!user) {
    return res.json({ success: false, errors: 'Wrong email id' });
  }

  const hashedPassword = user.password;
  const isValidPassword = await argon2.verify(hashedPassword, password);
  if (!isValidPassword) {
    return res.json({ success: false, errors: 'Wrong Password' });
  }

  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, 'secret_ecom');
  res.json({ success: true, token });
});




//Creating endpoint for new collection data
app.get('/newcollections',async(req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    res.send(newcollection);
})



//creating middleware to fetch user
const fetchUser = async(req,res,next)=>{
    const token = req.header('token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error){
            res.status(401).send({errors:"please authenticate usinga valid token"})
        }
    }

}

//Creating api endpoint for adding product in cart data
app.post('/addtocart',fetchUser ,async(req,res)=>{
    console.log("added",req.body.itemId);

    let userData  = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] +=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")

})



///Creating endpoint to get cartdata
app.post('/getcart',fetchUser,async(req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);

})
   



//creating endpoint to remove products from cartdata
app.post('/removefromcart',fetchUser, async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData  = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})



//it displays the single product information to user

app.get('/allproducts/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const products = await Product.find({}); // Get all products from the database
      const product = products.find((product) => product.id === parseInt(id));
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });







///this can be changed

  // Define the order schema
const orderSchema = new mongoose.Schema({
    billingDetails: {
      fullName: String,
      email: String,
      phoneNumber: String,
      streetAddress: String,
      city: String,
      state: String,
      zipCode: String,
    },
    cartData: Array,
    totalCartAmount: Number,
  });
  
  // Create the order model
  const OrderInfoModel = mongoose.model('Orderinfo', orderSchema);

app.post('/save-orderinfo', async (req, res) => {
  try {
    const orderInfo = new OrderInfoModel(req.body);
    const savedOrderInfo = await orderInfo.save();
    res.send(savedOrderInfo);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});



//Creating orderid
const Razorpay = require('razorpay');

app.use(express.urlencoded({extended:false}));



app.post("/order",async (req,res)=>{
    try{
    const razorpay = new Razorpay({ key_id: 'rzp_test_4RyEDdONxA2DvJ', key_secret: 'WVgrnnLeA5k8p2XTvGFbFIBW' });
    const options = req.body;
    const order = await razorpay.orders.create(options);
    if(!order){
        return res.status(500).send("Error");
    }
    res.json(order);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Error");
    }     
    })
    
    
    ///validating payment
    app.post("/order/validate", async(req,res)=>{
        const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
        const sha = crypto.createHmac("sha256",'WVgrnnLeA5k8p2XTvGFbFIBW');
        sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const digest  = sha.digest("hex");
        if(digest !== razorpay_order_id){
            return res.status(400).json({msg:"Transaction is not legit! "});
        }
    })






  

app.listen(port,(error)=>{
    if(!error)
    {
        console.log("Server Running on Port"+port)
    }
    else
    {
        console.log("Error :"+error)
    }

})