import auth from "../logic/auth";
import eventDetailService from "./eventDetail.service";

export default {
    async createEvente(data) {
        const event = {
            name: `${data.eventName}`,
            initialDate: `${data.initialDate}`,
            endDate: `${data.endDate}`,
            user: {
                dui: `${data.user}`
            },
            customer: {
                dui: `${data.customer}`
            }
        }
        
        const id = await auth.getAxios().post(
            `/api/events`,
            event,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.data.message);
        console.log(event)
        console.log('ID EVENTO: ' + id);
        for (let productId in data.products) {
             await eventDetailService.createEventDetail(id, data.products[productId], productId)
                .then(res => console.log(res));;
            ;
        }


    },
}