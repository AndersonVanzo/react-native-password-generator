import { SafeAreaView } from "react-native-safe-area-context";
import { PasswordsStyles } from "./PasswordsStyles";
import { FlatList, Text, View } from "react-native";
import { PasswordCard } from "../../components/PasswordCard/PasswordCard";

interface PasswordsViewProps {
    passwords: string[];
}

export const PasswordsView = ({ passwords }: PasswordsViewProps) => {
    return (
        <SafeAreaView style={PasswordsStyles.container}>
            <View style={PasswordsStyles.header}>
                <Text style={PasswordsStyles.headerTitle}>Minhas senhas</Text>
            </View>
            <FlatList
                data={passwords}
                contentContainerStyle={PasswordsStyles.content}
                renderItem={({ item, index }) => <PasswordCard key={index} password={item} />}
            />
        </SafeAreaView>
    );
};
