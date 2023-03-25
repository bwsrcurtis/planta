import React from 'react';
import { useSession } from 'next-auth/react';
import styles from './PlantDisplay.module.css';
import Button from './Button';

export default function PlantDisplay({ plantid, name, type, health, waterFreq }: { plantid: any, name: string, type: string, health: string, waterFreq: string }) {

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
	} else if (type === 'succulent') {
		type = '🌵';
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
		waterFreq = 'BiWeekly';
	} else {
		waterFreq = 'No Notifs';
	}

	return (
		<div className={styles.plantinfo}>

			<h3 className={styles.type}>{type}</h3>
			<h3 className={styles.name}>{name}</h3>
			<h3 className={styles.health}>{health}</h3>
			<h3 className={styles.waterfreq}>{waterFreq}</h3>
			<div>
				<Button data-plantid={plantid} name='🖋' onClick={(e: any) => console.log(e.target.dataset.plantid)}></Button>
				<Button data-plantid={plantid} name='❌' onClick={(e: any) => console.log(e.target.dataset.plantid)}></Button>
			</div>
		</div >
	);
}
