import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoarding = () => {
    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-black">
            <Text className="text-green-600 font-bold text"> OnBoarding</Text>
        </SafeAreaView>
    )
}

export default OnBoarding;