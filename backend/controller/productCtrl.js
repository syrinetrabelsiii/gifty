const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbId");

const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params;
  validateMongoDbId(id);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findOneAndUpdate({ id }, req.body, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params;
  validateMongoDbId(id);
  try {
    const deleteProduct = await Product.findOneAndDelete(id);
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProduct = asyncHandler(async (req, res) => {
    try {
       const page = parseInt(req.query.page) || 1;
       const limit = parseInt(req.query.limit) || 10;
       const sort = req.query.sort ? req.query.sort.split(",").join(" ") : "-createdAt";
       const fields = req.query.fields ? req.query.fields.split(",").join(" ") : "-__v";
   
       const filter = req.query;
       const removeFields = ["page", "sort", "limit", "fields"];
       removeFields.forEach(el => delete filter[el]);
   
    const productCount = await Product.countDocuments(filter);
       if (page > productCount) throw new Error("This Page does not exists");
   
    const skip = (page - 1) * limit;
    const product = await Product.find(filter)
         .sort(sort)
         .select(fields)
         .skip(skip)
         .limit(limit);
   
       res.json({
         product,
         page,
         limit,
         totalPages: Math.ceil(productCount / limit),
         totalProducts: productCount
       });
    } catch (error) {
       throw new Error(error);
    }
   });


module.exports = { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct };
