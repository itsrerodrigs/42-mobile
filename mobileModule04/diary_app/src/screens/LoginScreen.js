import react from "react";
import { View, Text, Button } from "react-native-web";

const LoginScreen = ({ navigation }) => {
    const handleGoogleLogin = () => {
        console.log('Login com Google iniciado!');
    };

    const handlerGitHubLogin = () => {
        console.log('Login com GitHub iniciado!');
    };

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.titleLogin}>welcome to your diary!</Text>
            <Button title="Login com Google" onPress={handleGoogleLogin} />
            <Button title="Login com GitHub" onPress={handlerGitHubLogin} />
        </View>
    );
};

export default LoginScreen;