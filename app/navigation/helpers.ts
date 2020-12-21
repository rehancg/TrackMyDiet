import theme from 'app/theme/defaultTheme';
import { material } from 'react-native-typography'

import Icon from 'app/components/Icon';
import { TransitionPresets } from '@react-navigation/stack';

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
                color: theme.TEXT_COLOR_DEFAULT,
                fontFamily: 'Poppins-SemiBold'
            },
            headerBackTitle: '',
            ...TransitionPresets.SlideFromRightIOS,
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