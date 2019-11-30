import {LOAD_PROFILE} from "./actions";
import fire from "../config/Fire";

export const loadProfile = () => {
   /* let uid = localStorage.getItem('userId');

    var f1 = fire.database().ref(`/users/${uid}/`);
    f1.once('value')
        .then(function(snapshot) {
            let index = Object.keys(snapshot.val());
            let user = snapshot.val()[index[0]];
            console.log(user)
            return {
                type: LOAD_PROFILE,
                payload: user
            }
        });*/

    return {
        type: LOAD_PROFILE,
    }
}