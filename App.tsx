import RootNavigation from "navigation/RootNavigation";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}
export default App;
