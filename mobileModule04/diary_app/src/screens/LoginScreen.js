import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '../utils/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();

    const { signIn, setActive } = useSignIn();

    const handleOAuthSignIn = async (provider) => {
        try {
            const { createdSessionId } = await signIn?.authenticateWithRedirect({
                strategy: `oauth_${provider}`,
                redirectUrl: 'diary_app://redirect',
            });

            if (createdSessionId) {
                await setActive({ session : createdSessionId});
            }
        } catch (err) {
            console.error(`Erro no login com ${provider}:`, err);
        }
    };

    return (
        <View style={styles.loginScreenContainer}>
            <Button title="Entrar com Google" onPress={() => handleOAuthSignIn('google')} />
            <View style={{ height: 20}} />
            <Button title="Entrar com GitHub" onPress={() => handleOAuthSignIn('github')} /> 
        </View>
    );
}

const styles = StyleSheet.create({
    loginScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});