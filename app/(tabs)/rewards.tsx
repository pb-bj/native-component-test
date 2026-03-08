import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyRewardTab() {
	return (
		<SafeAreaView className="flex-1" edges={['top', 'bottom']}>
			<View>
				<Text>Reward </Text>
			</View>
		</SafeAreaView>
	);
}
