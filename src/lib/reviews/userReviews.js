import Review from "../../models/Review.js";
const userReviews = async(email) => {
    try {
        const cursor = await Review.find({ email: email })
        return cursor
    } catch(err) {
        throw new Error(err)
    }
}


export default userReviews;