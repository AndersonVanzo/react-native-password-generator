import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        flex: 1,
        gap: 16,
        justifyContent: "center",
        padding: 24,
    },
    image: {
        aspectRatio: 1,
        height: "auto",
        objectFit: "contain",
        width: "50%",
    },
    title: {
        color: "#000000",
        fontSize: 24,
        fontWeight: "600",
    },
    slider: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        padding: 16,
        width: "100%",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#2576ef",
        borderRadius: 8,
        height: 48,
        justifyContent: "center",
        width: "100%",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
    },
});
