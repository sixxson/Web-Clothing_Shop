const mongoose = require("mongoose")
const ReviewSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
},
    { timestamps: true }
)


const Reviews = mongoose.model("Reviews", ReviewSchema)
module.exports = Reviews