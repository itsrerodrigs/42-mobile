import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";

export function useWarmUpBrowser() {
    useEffect(() => {
        WebBrowser.maybeCompleteAuthSession();
    
    return () => {
        void WebBrowser.coolDownAsync();
    };
    }, []);
};