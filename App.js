import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import LogInContextProvider, {
  LogInContext,
} from "./store/context/LogInContext";
import { useContext } from "react";
import LogStack from "./navigators/LogStack";
import SocialStack from "./navigators/SocialStack";

function Navigator() {
  const LogInCtx = useContext(LogInContext);
  return (
    <NavigationContainer>
      {!LogInCtx.isAutenticated && <LogStack />}
      {LogInCtx.isAutenticated && <SocialStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LogInContextProvider>
        <Navigator />
      </LogInContextProvider>
    </>
  );
}
