import React from 'react';
import { useSession } from 'next-auth/react';

export default function PlantDisplay() {

	const { data: session } = useSession();
	return (
		<h1>{session?.user?.email}</h1>
	);
}
