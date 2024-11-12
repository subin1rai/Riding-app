import { router } from "expo-router";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoarding = () => {
    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            <TouchableOpacity onPress={() => {
                router.replace("/(auth)/sign-up"); // Pass the URL as a string
            }}>
                <Text>Skip</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OnBoarding;
