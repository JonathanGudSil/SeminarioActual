import {AppRegistry} from "react-native";
import loginContainer from ".src/container/loginContainer";
import {name as appName} from "./app.json";

AppRegistry.registerComponent(appName, () => loginContainer );