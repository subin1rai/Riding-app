import CustomButton from "@/components/CustomButtons";
import InputField from "@/components/InputField";
import OAuth from "@/components/Oauth";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import * as React from "react";
import {ReactNativeModal} from "react-native-modal";
const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
   const [verification, setVerification] = useState({
    state: 'pending ',
    error:'',
    code:''
   })
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
//auth coode here
    try {
      await signUp.create({
        emailAddress : form.email,
        password: form.password,
        // name: form.name,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification({...verification,state: 'pending',  });
    } catch (err: any) {
     
      console.error(JSON.stringify(err, null, 2));
      console.log(error);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code ,
      });

      if (completeSignUp.status === "complete") {
        //TODOO : create a database user;
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({...verification,state:'success'});
      } else {
        setVerification({...verification,state:'failed', error:"verificatioon failed "});
      }
    } catch (err: any) {
     setVerification({...verification,error:err.error[0].longMessage,state:"failed"});
    }
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="realtive w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5 ">
            Create your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your Password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="sign Up"
            onPress={onSignUpPress}
            className="mt-6 h-14"
          />

          <OAuth />
          <Link
            href={"/sign-in"}
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an Account?</Text>
            <Text className="text-primary-500"> Log In</Text>
          </Link>
        </View>
        {/* verification model  */}
        <ReactNativeModal isVisible={verification.state==="success"}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
              <Image source={images.check} className="W-[110px] h-[110px] mx-auto my-5" />

              <Text className="text-3xl font-JakartaBold text-center">
                Verified
              </Text>
              
              <Text className="text-base text-gray-400 font-Jakarta text-center">
                you have successfully verified
              </Text>
              <CustomButton  title="Browse Hme" onPress={()=>router.replace('/(root)/(tabs)/home')} className="mt-5"/>
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};

export default SignUp;
