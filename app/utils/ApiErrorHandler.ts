import { Alert } from "react-native";

export default (err: any) => {
    let msg = '';
    switch (err?.response?.status) {
        case 401:
            msg = "Sorry this feature is only available for active subscribers!"
            break;
        default:
            msg = err?.response?.message || ''
    }
    Alert.alert('Something went wrong!', msg)
}