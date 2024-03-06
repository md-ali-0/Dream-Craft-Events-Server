import userReviews from "../../../lib/reviews/userReviews.js"

const allReviews = async(req, res) => {
    const email = req.params.email;
    try {
        const result = await userReviews(email)
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default allReviews;