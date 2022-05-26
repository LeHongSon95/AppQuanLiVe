import {ActionProps} from '../action/bookingAction';
const initialValues = {
    listBooking: []
};

export const BookingReducer = (state:any = initialValues, action:ActionProps) => {

    switch(action.type) {

        case 'LOAD_DU_LIEU': {

            const data = action.payload.docs.map((item:any)=>({...item.data(), id: item.id}));

            state.listBooking = data;

            return {...state};
        }
        break;
        
        default: return state;
    }
}  