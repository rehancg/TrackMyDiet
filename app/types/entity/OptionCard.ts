import { ImageSourcePropType } from "react-native";

export interface IOptionCard {
    id: number,
    key: string,
    titleKey: string,
    tagLineKey: string,
    image?: ImageSourcePropType
}