import Events from "../../models/Events";


const updateEvent = async (filter, upData) => {

    try {
        const cursor = await Events.findByIdAndUpdate(filter, upData);
        return cursor;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default updateEvent;