import { uploadMedia } from 'app/api/FileService';
import { delay } from 'lodash';
import ImagePicker from 'react-native-image-crop-picker';
import { asyncWait } from './OtherUtils';

const PickImage = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'photo',
        writeTempFile: true
    }).then(async image => {
        try {
            await asyncWait(300)
            const res = await uploadMedia(image);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }).catch(err => {
        console.log(err);
    })
}

export { PickImage };

