const express = require("express");
const { validationResult } = require("express-validator");
const Order = require("../models/Order");

const get_orders = async (req, res) => {
  Order.find({}, function(err, data) {
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

const createOrder = (req, res, next) => {
  const order = req.body;
  Order.create(order, (err, data) => {
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


const deleteOrder = (req, res) => {
  const id = req.params.id;
  Order.findOneAndDelete({_id: id}, (err, data) => {
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


const updateOrder = (req, res) => {
  const id = req.params.id;
  const order = req.body;
  Order.findByIdAndUpdate({_id: id}, order, (err, data) => {
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

const findOrder = (req, res) => {
  const name = req.params.name;
  Order.findOne({name: name}, (err, data) => {
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
  get_orders,
  createOrder,
  deleteOrder,
  updateOrder, 
  findOrder
};