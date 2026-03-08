import { Text, View } from 'react-native';

interface KPIDashboardProps {
	title: string;
	count: number;
}
export default function KPIDashboard({ title, count }: KPIDashboardProps) {
	return (
		<View>
			<Text className="text-gray-500 text-sm mt-2">{title}</Text>

			<Text className="text-2xl font-bold mt-1">{count}</Text>
		</View>
	);
}
