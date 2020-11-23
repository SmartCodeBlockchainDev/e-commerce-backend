require('dotenv').config();
const mongoose = require('mongoose');
const config = require('./config');
const { Item } = require('./models')
const faker = require('faker');

async function generateRandomItem(){
    let data = {
        product_name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
        category: faker.commerce.department(),
        brand: faker.company.companyName(),
        sku: faker.random.uuid()
    }

    await Item.create({...data}).catch(e => console.log(e))

}



const { mongoURI } = config;
mongoose.connect(mongoURI,{ auth: {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASS
}}, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.once('open', ()=>{
    console.log("Database connected")
    for(let i=0; i<=50; i++){
   
        generateRandomItem() 
       }
})
db.on('error', console.error.bind(console, 'mongo connection error:'));


