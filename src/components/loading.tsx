import { View, ActivityIndicator } from "react-native"
import colors from "tailwindcss/colors"

export function Loading () {
    return (
        <View className="flex-1 item-center justify-center bg-slate-900">
            <ActivityIndicator color={colors.white}></ActivityIndicator>
        </View>
    )
}