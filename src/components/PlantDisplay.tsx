import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from './PlantDisplay.module.css';
import Button from './Button';

export default function PlantDisplay({ plantid, name, type, health, waterFreq }: { plantid: any, name: string, type: string, health: string, waterFreq: string }) {
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const router = useRouter();
	const session = useSession();

	if (health === '1') {
		health = '🌿';
	} else if (health === '2') {
		health = '🌿🌿';
	} else if (health === '3') {
		health = '🌿🌿🌿';
	} else if (health === '4') {
		health = '🌿🌿🌿🌿';
	} else {
		health = '🌿🌿🌿🌿🌿';
	}

	if (type === 'foliage') {
		type = '🍃';
	} else if (type === 'flowering') {
		type = '🌼';
	} else if (type === 'fruit') {
		type = '🍏';
	} else if (type === 'cacti') {
		type = '🌵';
	} else {
		type = '🌱';
	}

	if (waterFreq === 'daily') {
		waterFreq = 'Daily';
	} else if (waterFreq === 'mwf') {
		waterFreq = 'M/W/F';
	} else if (waterFreq === 'weekly') {
		waterFreq = 'Weekly';
	} else if (waterFreq === 'twowks') {
		waterFreq = 'Bi-Weekly';
	} else {
		waterFreq = 'No Notifs';
	}

	const goToEdit = (plantId: any, name: any, type: any, health: any, waterFreq: any) => {
		router.push({
			pathname: '/edit',
			query: {
				plantId: plantId,
				name: name,
				type: type,
				health: health,
				waterFreq: waterFreq
			}
		}, '/edit');
	};

	const deletePlant = async (id: any, userId: any) => {
		try {
			await fetch('/api/plants/delete', {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id, userId }),
			});
			router.reload();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={styles.plantinfo}>

			<h3 className={styles.type}>{type}</h3>
			<h3 className={styles.name}>{name}</h3>
			<h3 className={styles.health}>{health}</h3>
			<h3 className={styles.waterfreq}>{waterFreq}</h3>
			<div>
				<Button data-plantid={plantid} name='🖋' onClick={() => goToEdit(plantid, name, type, health, waterFreq)}></Button>
				<Button data-plantid={plantid} name='❌' onClick={(e: any) => deletePlant(e.target.dataset.plantid, session.data?.user.id)}></Button>
			</div>
		</div >
	);
}
