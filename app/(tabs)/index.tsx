import KPIDashboard from '@/components/kpi';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeTab() {
	return (
		<SafeAreaView className="flex-1" edges={['top', 'bottom']}>
			<View className="flex items-center justify-center mx-auto px-8 mt-4">
				<View className="flex flex-row justify-between w-full">
					<KPIDashboard title="Total Redeemed" count={2} />
					<KPIDashboard title="Total Swapped" count={1} />
					<KPIDashboard title="Rebate Points" count={0.0} />
				</View>
			</View>
		</SafeAreaView>
	);
}
