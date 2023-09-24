import { StyleSheet } from "react-native";

export const GeneratePasswordModalStyles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        backgroundColor: "#0000003F",
        flex: 1,
        justifyContent: "center",
    },
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        width: "90%",
    },
    header: {
        alignItems: "center",
        borderBottomColor: "#2576ef",
        borderBottomWidth: 1,
        justifyContent: "center",
        padding: 16,
        width: "100%",
    },
    title: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "600",
    },
    content: {
        gap: 16,
        padding: 16,
    },
    text: {
        color: "#000000",
        textAlign: "center",
    },
    hintText: {
        color: "#2576ef",
        fontSize: 12,
        fontWeight: "600",
        marginTop: -8,
        textAlign: "center",
    },
    password: {
        alignItems: "center",
        backgroundColor: "#000000",
        borderRadius: 8,
        justifyContent: "center",
        padding: 16,
    },
    passwordText: {
        color: "#ffffff",
        fontSize: 16,
    },
    buttonsContainer: {
        flexDirection: "row",
        gap: 16,
    },
    button: {
        alignItems: "center",
        borderRadius: 8,
        flex: 1,
        height: 48,
        justifyContent: "center",
    },
    buttonText: {
        color: "#000000",
        fontWeight: "600",
    },
    buttonSave: {
        backgroundColor: "#2576ef",
    },
    buttonSaveText: {
        color: "#ffffff",
    },
});
