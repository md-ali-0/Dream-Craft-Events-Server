import review from "../../../models/Review.js"


const getReview = async (req, res) => {
    try {
        const result = await review.find().sort({ time: -1 })
        res.send(result)
    } catch (error) {
        return res.send(error)
    }
}


export default getReview