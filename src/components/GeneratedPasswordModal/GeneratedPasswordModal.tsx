import { Modal, Text, TouchableOpacity, View } from "react-native";
import { GeneratePasswordModalStyles } from "./GeneratePasswordModalStyles";
import { DEFAULT_ACTIVE_OPACITY } from "../../@common/constants";
import Clipboard from "@react-native-clipboard/clipboard";
import React from "react";

interface GeneratedPasswordModalProps {
    visible: boolean;
    password: string;
    onClose: () => void;
    onConfirmModal: () => void;
}

export const GeneratedPasswordModal = ({
    visible,
    password,
    onClose,
    onConfirmModal,
}: GeneratedPasswordModalProps) => {
    const [passwordSaved, setPasswordSaved] = React.useState<boolean>(false);

    const onPasswordLongPress = () => {
        Clipboard.setString(password);
        setPasswordSaved(true);
    };

    React.useEffect(() => {
        setPasswordSaved(false);
    }, [password]);

    return (
        <Modal visible={visible} transparent={true} animationType={"slide"}>
            <View style={GeneratePasswordModalStyles.wrapper}>
                <View style={GeneratePasswordModalStyles.container}>
                    <View style={GeneratePasswordModalStyles.header}>
                        <Text style={GeneratePasswordModalStyles.title}>Senha gerada!</Text>
                    </View>
                    <View style={GeneratePasswordModalStyles.content}>
                        <Text style={GeneratePasswordModalStyles.text}>
                            Pressione e segure para copiar
                        </Text>
                        <TouchableOpacity
                            style={GeneratePasswordModalStyles.password}
                            onLongPress={onPasswordLongPress}
                            activeOpacity={DEFAULT_ACTIVE_OPACITY}>
                            <Text style={GeneratePasswordModalStyles.passwordText}>{password}</Text>
                        </TouchableOpacity>
                        {passwordSaved ? (
                            <Text style={GeneratePasswordModalStyles.hintText}>Senha copiada!</Text>
                        ) : null}
                        <View style={GeneratePasswordModalStyles.buttonsContainer}>
                            <TouchableOpacity
                                style={GeneratePasswordModalStyles.button}
                                onPress={onClose}
                                activeOpacity={DEFAULT_ACTIVE_OPACITY}>
                                <Text style={GeneratePasswordModalStyles.buttonText}>Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    GeneratePasswordModalStyles.button,
                                    GeneratePasswordModalStyles.buttonSave,
                                ]}
                                onPress={onConfirmModal}
                                activeOpacity={DEFAULT_ACTIVE_OPACITY}>
                                <Text
                                    style={[
                                        GeneratePasswordModalStyles.buttonText,
                                        GeneratePasswordModalStyles.buttonSaveText,
                                    ]}>
                                    Salvar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
