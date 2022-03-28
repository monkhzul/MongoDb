const express = require("express");
const { validationResult } = require("express-validator");
const Food = require("../models/Food");

const get_foods = async (req, res) => {
  Food.find({}, function(err, data) {
    if(err)
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  })
};

const createFood = (req, res, next) => {
  const food = req.body;
  Food.create(food, (err, data) => {
    if(err)
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  });
};


const deleteFood = (req, res) => {
  const id = req.params.id;
  Food.findOneAndDelete({_id: id}, (err, data) => {
    if(err)
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  });
}


const updateFood = (req, res) => {
  const id = req.params.id;
  const food = req.body;
  Food.findByIdAndUpdate({_id: id}, food, (err, data) => {
    if(err)
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  });
}

const findFood = (req, res) => {
  const name = req.params.name;
  Food.findOne({name: name}, (err, data) => {
    if(err)
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  })
}

module.exports = {
  get_foods,
  createFood,
  deleteFood,
  updateFood, 
  findFood
};