import { uploadMedia } from 'app/api/FileService';
import ImagePicker from 'react-native-image-crop-picker';

const PickImage = (): Promise<string> => {
    return ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'photo',
        writeTempFile: true
    }).then(async image => {
        try {
            const res = await uploadMedia(image);
            return res.data;
        } catch (error) {
            throw new Error(error)
        }
    })
}

export { PickImage };

