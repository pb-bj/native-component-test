import { Tabs } from 'expo-router';
export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: '#f9fafb', height: 65 },
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
				}}
			/>

			<Tabs.Screen
				name="Rewards"
				options={{
					title: 'My Rewards',
				}}
			/>
			<Tabs.Screen
				name="account"
				options={{
					title: 'Accounts',
				}}
			/>
		</Tabs>
	);
}
