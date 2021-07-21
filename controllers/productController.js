const express = require('express');
const db = require('../config/database');
const Pro = require('../models/Products');

const asyncHandler = require('express-async-handler');

exports.getAllProduct = asyncHandler(async (req, res) => {
  const data = await Pro.findAll();
  res.status(200).json({
    status: 'sucess',
    result: data.length,
    data: data,
  });
});

exports.getProduct = asyncHandler(async (req, res) => {
  const data = await Pro.findByPk(req.params.id);
  if (data == null) {
    return res.status(400).json({
      status: 'fail',
      message: `No data with id : ${req.params.id}`,
    });
  }
  res.status(200).json({
    status: 'sucess',
    result: data.length,
    data: data,
  });
});

exports.createProduct = asyncHandler(async (req, res) => {
  const data = await Pro.create(req.body);
  res.status(201).json({
    status: 'sucess',
    data: data,
  });
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const data = await Pro.findByPk(req.params.id);
  if (data == null) {
    return res.status(400).json({
      status: 'fail',
      message: `No data with id : ${req.params.id}`,
    });
  } else {
    updateData = await data.update(req.body);
  }
  res.status(201).json({
    status: 'sucess',
    data: updateData,
  });
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  const data = await Pro.findByPk(req.params.id);
  if (data == null) {
    return res.status(400).json({
      status: 'fail',
      message: `No data with id : ${req.params.id}`,
    });
  } else {
    updateData = await data.destroy();
  }

  res.status(204).json({
    status: 'sucess',
    data: null,
  });
});
