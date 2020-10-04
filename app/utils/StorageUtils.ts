import AsyncStorage from '@react-native-community/async-storage';
import { ITokens } from 'app/types/entity/Tokens';

export const storeTokens = async (tokens: ITokens) => {
    try {
        await AsyncStorage.setItem('@refresh_token', tokens.refreshToken)
        await AsyncStorage.setItem('@access_token', tokens.accessToken)
    } catch (e) {
        // saving error
    }
}

export const getTokens = async (): Promise<ITokens> => {
    try {
        const refreshToken = await AsyncStorage.getItem('@refresh_token');
        const accessToken = await AsyncStorage.getItem('@access_token');
        return {
            refreshToken: refreshToken || '',
            accessToken: accessToken || ''
        }
    } catch (e) {
        throw new Error(e);
    }
}