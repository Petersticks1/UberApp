import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    onPress: () => void;
    title: string;
    bgVariant?: "primary" | "secondary" | "danger" | "success" | "outline";
    textVariant?: "default" | "primary" | "secondary" | "danger" | "success";
    IconLeft?: React.ComponentType;
    IconRight?: React.ComponentType;
    className?: string; // Ensure you're using a compatible Tailwind setup for React Native
}

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
        case "secondary":
            return "bg-gray-500";
        case "danger":
            return "bg-red-500";
        case "success":
            return "bg-green-500";
        case "outline":
            return "bg-transparent border border-neutral-300";
        default:
            return "bg-[#0286ff]";
    }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
        case "primary":
            return "text-black";
        case "secondary":
            return "text-gray-100";
        case "danger":
            return "text-red-100";
        case "success":
            return "text-green-100";
        default:
            return "text-white";
    }
};

const CustomButton = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft: IconLeftComponent,
    IconRight: IconRightComponent,
    className = "",
    ...props
}: ButtonProps) => (
    <TouchableOpacity
        onPress={onPress}
        className={`w-full rounded-full flex p-3 my-2 flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
        {...props}
    >
        {IconLeftComponent && <IconLeftComponent />}
        <Text className={`text-lg font-bold mx-2 ${getTextVariantStyle(textVariant)}`}>{title}</Text>
        {IconRightComponent && <IconRightComponent />}
    </TouchableOpacity>
);

export default CustomButton;
