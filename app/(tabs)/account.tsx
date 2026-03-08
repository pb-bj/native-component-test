import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AccountTab() {
	return (
		<SafeAreaView className="flex-1" edges={['top', 'bottom']}>
			<View>
				<Text>Account </Text>
			</View>
		</SafeAreaView>
	);
}
