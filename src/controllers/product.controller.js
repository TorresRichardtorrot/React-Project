import Product from "../models/product.model.js";
import { removeImgFile } from "../helper/fileManagement.js";

//? Funcion  para crear producto
export const createProduct = async (req, res) => {
  const imagesArray = req.files;
  const product = req.body;
  try {
    var imagesName = [];

    imagesArray.forEach((image) => {
      imagesName.push(image.filename);
    });

    product.images = imagesName;
    const newProduct = new Product(product);
    await newProduct.save();

    res.status(201).json(["Producto creado exitosamente"]);
  } catch (error) {
    console.log(error);
    res.status(500).json(["Ucurrio un error al crear el producto"]);
  }
};

//? Funcion para obtener los productos
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0)
      return res.status(404).json(["no se encontro el producto"]);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(["Ucurrio un error al obtener los productos"]);
  }
};

//? Funcion para buscar las marca
export const getBrans = async (req, res) => {
  try {
    const brands = await Product.distinct("brand");
    if (brands.length === 0) {
      return res.json(["no tenemos marcas registradas"]);
    }
    res.status(200).json(brands);
  } catch (error) {
    console.log(error);
    res.status(500).json(["ocurrio un error al otener las marca"]);
  }
};

//? Funcion para buscar los productos por una marca
export const getProductByBrand = async (req, res) => {
  const brand = req.params;
  try {
    const products = await Product.find(brand);
    if (products.length === 0) {
      return res.status(404).json(["no tenemos productos de esta marca"]);
    }
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(["ocurrio un error al otener los productos"]);
  }
};

//? Funcion para obtener un producto
export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById({ _id: id });
    if (!product) return res.status(404).json(["no se encontro el producto"]);

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json(["ocurrio un error al otener el producto"]);
  }
};

//? Funcion para eliminar un producto
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const removedProduct = await Product.findByIdAndDelete({ _id: id });
    if (!removedProduct)
      return res.status(404).json(["no se encontro el producto"]);
    removedProduct.images.forEach((image) => {
      removeImgFile(image);
    });

    res.status(200).json(["Producto eliminado"]);
  } catch (error) {
    console.log(error);
    res.status(500).json(["ocurrio un error al eliminar"]);
  }
};

//? Funcion para Actualizar el producto
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  try {
    const previousProduct = await Product.findByIdAndUpdate(
      id,
      updatedProduct,
      { new: true }
    );
    if (!previousProduct)
      return res.status(404).json(["no se encontro el producto"]);

    res.status(200).json(["Producto actualizado"]);
  } catch (error) {
    console.log(error);
    res.status(500).json(["ocurrio un error al actualizar"]);
  }
};

//? Funcion para traer los ultimos 4 productos 
export const getNewProducts = async (req,res)=> {
  try {
    const newProducts = await Product.find().sort({updatedAt:-1}).limit(4)
    res.status(200).json(newProducts)
  } catch (error) {
    console.log(error)
    res.status(500)
    
  }
}
