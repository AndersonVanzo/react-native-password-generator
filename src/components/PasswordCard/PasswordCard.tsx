import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { PasswordCardStyles } from "./PasswordCardStyles";
import Icon from "react-native-vector-icons/Ionicons";
import { DEFAULT_ACTIVE_OPACITY } from "../../@common/constants";
import Clipboard from "@react-native-clipboard/clipboard";
import { useFocusEffect } from "@react-navigation/native";

interface PasswordCardProps {
    password: string;
}

export const PasswordCard = ({ password }: PasswordCardProps) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const onPasswordLongPress = () => {
        Clipboard.setString(password);
    };

    useFocusEffect(
        React.useCallback(() => {
            setShowPassword(false);
        }, []),
    );

    return (
        <TouchableOpacity
            style={PasswordCardStyles.container}
            onLongPress={onPasswordLongPress}
            activeOpacity={DEFAULT_ACTIVE_OPACITY}>
            {showPassword ? (
                <View style={PasswordCardStyles.passwordWrapper}>
                    <Text style={PasswordCardStyles.passwordText} numberOfLines={1}>
                        {password}
                    </Text>
                </View>
            ) : (
                <View style={PasswordCardStyles.placeholder} />
            )}
            <TouchableOpacity
                style={PasswordCardStyles.button}
                onPress={toggleShowPassword}
                hitSlop={{ left: 16, right: 16 }}
                activeOpacity={DEFAULT_ACTIVE_OPACITY}>
                <Icon name={showPassword ? "eye-off" : "eye"} size={18} color={"#ffffff"} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};
