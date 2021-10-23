const env = require('./config');

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
                    apiKey: env.MAPS_API_KEY
                }
            }
        },
    };
};
