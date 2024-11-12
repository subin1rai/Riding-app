import { router } from "expo-router";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoarding = () => {
    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            <TouchableOpacity 
            onPress={() => {
                router.replace("/(auth)/sign-up"); 
            }}
            className="w-full flex justify-end items-end p-12"
            > 
                <Text className="text-red-400 text-4xl">Skip</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OnBoarding;
