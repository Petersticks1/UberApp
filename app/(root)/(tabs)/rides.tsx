import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Rides() {
    return (
        <SafeAreaView className='flex-1 items-center justify-center bg-white'>
            <Text className='text-red-500'>
                History
            </Text>
        </SafeAreaView>

    );
}
