import Events from "../../models/Events.js";


const removeEvent = async (id) => {
    try {
        const cursor = await Events.findByIdAndDelete({ _id: id });
        return cursor;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default removeEvent;
