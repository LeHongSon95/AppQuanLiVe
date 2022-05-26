import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "redux";
import { db } from "../../firebase/database";
import { ActionProps } from "../action/bookingAction";


// Load du lieu 
export const LoadDuLieu = () => async (dispatch: Dispatch<ActionProps>) => {
    try {
        const snapshot = collection(db,"booking");
        console.log('snap',snapshot);
        // const data: Array<any> = [];
        const snapshotdata = await getDocs(snapshot);
        console.log('data', snapshotdata);
        dispatch({
            type: 'LOAD_DU_LIEU',
            payload: snapshotdata
        })
    }
    catch(error) {
        console.log('Loi roi!');
    }
}