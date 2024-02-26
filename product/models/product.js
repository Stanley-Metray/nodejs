const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'a9591303870A',
  database: 'sharpener',
});


const Product = sequelize.define('Product', {
    id :{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true 
    },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageurl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


(async () => {
  try {
    await sequelize.sync();
    console.log('Database connected and models synchronized');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  }
})();


async function addProduct(product) {
  try {
    const createdProduct = await Product.create(product);
    console.log(createdProduct);
    return createdProduct;
  } catch (error) {
    throw error;
  }
}


async function deleteProduct(title) {
  try {
    const deletedProductCount = await Product.destroy({
      where: { title },
    });
    return deletedProductCount;
  } catch (error) {
    throw error;
  }
}

module.exports = { Product, addProduct, deleteProduct };
