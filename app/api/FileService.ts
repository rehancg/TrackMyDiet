import { getTokens } from "app/utils/StorageUtils";
import { AxiosResponse } from "axios";
import { ImageOrVideo } from "react-native-image-crop-picker"
import RNFetchBlob, { FetchBlobResponse } from "rn-fetch-blob"
import API from "./ApiBuilder";

// const uploadMedia = async (media: ImageOrVideo): Promise<FetchBlobResponse> => {
//     const { refreshToken, accessToken } = await getTokens();
//     return RNFetchBlob.fetch('POST', 'http://143.110.186.112/file_upload', {
//         Authorization: `Bearer ${accessToken}`,
//         'Content-Type': 'multipart/form-data',
//     }, [
//         // element with property `filename` will be transformed into `file` in form data
//         { name: 'upload', data: RNFetchBlob.wrap(media.path) },
//     ])
// }

const uploadMedia = async (media: ImageOrVideo): Promise<AxiosResponse<string>> => {
    var blob = {
        uri: media.path,
        name: media.filename,
        type: 'image/jpeg',
    };

    var form = new FormData();
    form.append('upload', blob)
    return await API.post('/file_upload', form, { headers: { ...API.defaults.headers, 'Content-Type': 'multipart/form-data' } });
}

export { uploadMedia }