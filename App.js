import {useState} from 'react';
import {useFonts} from "expo-font"
import AppLoading from 'expo-app-loading';
import {TodoState} from "./src/context/todo/TodoState";
import {MainLayout} from "./src/MainLayout";
import {ScreenState} from "./src/context/screen/ScreenState";

export default function App() {
    const [loaded] = useFonts({
        Roboto_Regular: require('./assets/fonts/Roboto-Regular.ttf'),
        Roboto_Bold: require('./assets/fonts/Roboto-Bold.ttf'),
    })
    const [isReady, setIsReady] = useState(false)

    if (!loaded) {
        return null
    }

    if (!isReady) {
        return <AppLoading startAsync={loaded}
                           onError={err => console.log(err)}
                           onFinish={() => setIsReady(true)}
        />
    }


    return (
        <ScreenState>
            <TodoState>
                <MainLayout/>
            </TodoState>
        </ScreenState>
    );
}

