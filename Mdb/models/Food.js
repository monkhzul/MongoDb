const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  name: {
    type: String,
    required: [true, "Oh Come on! Food name is must!"],
  },
  price: {
    type: Number,
    minimum: 0,
  },
  discount: {
    type: Number,
    minimum: 0,
    default: 0,
  },
  portion: {
    type: Number,
    minimum: 1,
  },
  stock: {
    type: Number,
    minimum: 0,
  },
  ingredients: {
    type: String,
  },
  status: {
    type: String,
  },
  sales: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
  },
  tumb_img: {
    type: String,
  },
  category: {
    name: {
      type: String
    },
    color: {
      type: String
    }
  }
});

const Food = mongoose.model("foods", FoodSchema);

module.exports = Food;

 // category_id: {
  //   type: String,
  // },

// yag object ID baidlaar normalized holbolt hiisen tohioldold

  // category_id:[{ 
  //   type: Schema.Types.ObjectId, 
  //   ref: 'food_category' 
  // }],