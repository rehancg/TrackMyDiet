import { Alert } from "react-native";
import { isString } from 'lodash';

export default (err: any) => {
    let msg = '';
    switch (err?.status) {
        case 401:
            msg = "Sorry this feature is only available for active subscribers!"
            break;
        default:
            msg = isString(err?.data?.message) ? err?.data?.message : ''
    }

    setTimeout(() => {
        Alert.alert('Something went wrong!', msg)
    }, 300);
}