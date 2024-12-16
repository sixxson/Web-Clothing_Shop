const express = require("express")
const router = express.Router()

// post review
router.post("/:productId", async (req, res) => {
    try {
        const { comment, rating, userId, productId } = req.body
        if (!comment || !rating || !userId || !productId) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const existingReview = await Reviews.findOne({ userId, productId })
        if (existingReview) {
            existingReview.comment = comment
            existingReview.rating = rating
            await existingReview.save()
        } else {
            const newReview = new Reviews({
                comment,
                rating,
                userId,
                productId
            })
            await newReview.save()
        }

        //calculate average rating
        const reviews = await Reviews.find({ productId })
        if(reviews.length > 0){
            const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0)
            const averageRating = totalRating / reviews.length
            const product = await Product.findById(productId)
            product.averageRating = averageRating
            await product.save()
        }

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})