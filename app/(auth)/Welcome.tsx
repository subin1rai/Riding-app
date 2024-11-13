import { router } from "expo-router";
import { Text, TouchableOpacity, View,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useRef, useState } from "react";
import { onboarding } from "@/constants";
const OnBoarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <SafeAreaView className=" h-full flex justify-between items-center bg-white">
            <TouchableOpacity 
            onPress={() => {
                router.replace("/(auth)/sign-up"); 
            }}
            className="w-full flex justify-end items-end p-5"
            > 
                <Text className="text-black tsxt-md font-JakartaBold">Skip</Text>
            </TouchableOpacity>
            <Swiper
                ref={swiperRef}
                loop= {false}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full "/>}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full"/>}
                onIndexChanged={(index)=>{
                    setActiveIndex(index);
                }}
            >
                {onboarding.map((item)=>(
                    <View>
                       <Text> {item.title}</Text>
                    </View>
                ))}
            </Swiper>
        </SafeAreaView>
    )
}

export default OnBoarding;
