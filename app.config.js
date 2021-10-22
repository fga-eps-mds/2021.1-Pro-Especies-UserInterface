import { MAPS_API_KEY } from 'react-native-dotenv';

export default ({ config }) => {
    return {
        ...config,
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#FFFFFF"
            },
            package: "com.eupescador.app",
            config: {
                googleMaps: {
                    apiKey: MAPS_API_KEY
                }
            }
        },
    };
};
