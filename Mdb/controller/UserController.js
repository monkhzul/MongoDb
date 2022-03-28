const express = require("express");
const { validationResult } = require("express-validator");
const User = require("../models/User");

const get_users = async (req, res) => {
  User.find({}, function(err, data) {
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

const createUser = (req, res, next) => {
  const user = req.body;
  User.create(user, (err, data) => {
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


const deleteUser = (req, res) => {
  const id = req.params.id;
  User.findOneAndDelete({_id: id}, (err, data) => {
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


const updateUser = (req, res) => {
  const id = req.params.id;
  const user = req.body;
  User.findByIdAndUpdate({_id: id}, user, (err, data) => {
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

const findUser = (req, res) => {
  const name = req.params.name;
  User.findOne({name: name}, (err, data) => {
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
  get_users,
  createUser,
  deleteUser,
  updateUser, 
  findUser
};