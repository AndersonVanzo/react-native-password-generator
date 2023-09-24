import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeStyles } from "./HomeStyles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";
// @ts-ignore
import LockImage from "../../assets/images/logo.png";
import { GeneratedPasswordModal } from "../../components/GeneratedPasswordModal/GeneratedPasswordModal";
import { DEFAULT_ACTIVE_OPACITY } from "../../@common/constants";

interface HomeViewProps {
    savePassword: (password: string) => void;
    generatePassword: (length: number) => string;
}

export const HomeView = ({ savePassword, generatePassword }: HomeViewProps) => {
    const [passwordLength, setPasswordLength] = React.useState<number>(14);
    const [passwordValue, setPasswordValue] = React.useState<string>("");
    const [showModal, setShowModal] = React.useState<boolean>(false);

    const onConfirmModal = () => {
        savePassword(passwordValue);
        setShowModal(false);
    };

    const onCloseModal = () => {
        setShowModal(false);
    };

    const onSliderValueChange = (value: number) => {
        const newPasswordLength = Math.floor(value);
        setPasswordLength(newPasswordLength);
    };

    const onGenerateButtonPress = () => {
        const password = generatePassword(passwordLength);
        setPasswordValue(password);
        setShowModal(true);
    };

    return (
        <SafeAreaView style={HomeStyles.container}>
            <Image source={LockImage} style={HomeStyles.image} />
            <Text style={HomeStyles.title}>{passwordLength} caracteres</Text>
            <View style={HomeStyles.slider}>
                <Slider
                    value={passwordLength}
                    minimumValue={8}
                    maximumValue={20}
                    onValueChange={onSliderValueChange}
                    thumbTintColor={"#2576ef"}
                    minimumTrackTintColor={"#2576ef"}
                    maximumTrackTintColor={"#949494"}
                />
            </View>
            <TouchableOpacity
                style={HomeStyles.button}
                onPress={onGenerateButtonPress}
                activeOpacity={DEFAULT_ACTIVE_OPACITY}>
                <Text style={HomeStyles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>
            <GeneratedPasswordModal
                visible={showModal}
                password={passwordValue}
                onClose={onCloseModal}
                onConfirmModal={onConfirmModal}
            />
        </SafeAreaView>
    );
};
