import User from "../../../models/Users.js";

const userToOrganizer = async (req, res) => {
    const userId = req.params.userId;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            {_id: userId},
            { role: 'organizer' },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.send(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
};

export default userToOrganizer