import { material } from 'react-native-typography'

const NavigationOptions = {
    stackNavigator: {
        default: {
            headerStyle: {
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                    width: 0
                },
                elevation: 0
            },
            headerTitleStyle: {
                ...material.titleObject,
            }
        },
        secondary: {
            headerStyle: {
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                    width: 0
                },
                elevation: 0
            },
            headerTitleStyle: {
                ...material.subheadingObject,
            }
        }
    }
}

export { NavigationOptions };