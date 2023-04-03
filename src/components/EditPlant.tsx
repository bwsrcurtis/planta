import styles from './CreatePlant.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from './Button';
import { useSession } from 'next-auth/react';
import { withRouter } from 'next/router';

export default function EditPlant(props: any) {
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const router = useRouter();
	const { data: session } = useSession();
	const [plantId, setPlantId] = useState(router.query.plantId);
	const [name, setName] = useState(router.query.name);
	const [health, setHealth] = useState(router.query.health);
	const [waterFreq, setWaterFreq] = useState(router.query.waterFreq);
	const [type, setType] = useState(() => {
		if (router.query.type === '🍃') {
			return 'foliage';
		} else if (router.query.type === '🌼') {
			return 'flowering';
		} else if (router.query.type === '🍏') {
			return 'fruit';
		} else if (router.query.type === '🌵') {
			return 'cacti';
		} else {
			return 'other';
		};
	});

	const id = session?.user?.id;



	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setError('');
		setMessage('');
		if (name && name.length < 12 && type && health && waterFreq) {
			// send a request to the server.
			try {
				const body = { name, type, health, waterFreq, plantId };
				await fetch('/api/plants/edit', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
				});
				await router.push('/plants');
			} catch (error) {
				console.error(error);
			}
		} else {
			if (!name) {
				setError('Name required');
			}
			else if (name.length > 12) {
				setError('Name under 12 characters');
			} else if (!type) {
				setError('Type required');
			} else if (!health) {
				setError('Health required');
			} else {
				setError('Care Notif Required');
			}
			return;
		}
	};

	return (

		<div className={styles.addplantform}>
			<form onSubmit={handleSubmit}>
				{
					error ? (
						<div className="error form-group">
							{error}
						</div>
					) : null
				}
				{
					message ? (
						<div className="message form-group">
							{message}
						</div>
					) : null
				}
				<div className={styles.formgroup}>

					<h3>Name</h3>
					<input type="text" name="name" placeholder="Name" value={name}
						onChange={(e) => setName(e.target.value)} />
				</div>
				<div className={styles.formgroup}>

					<h3>Type</h3>
					<select name="type" value={type} onChange={(e) => setType(e.target.value)}>
						<option value='foliage'>Foliage</option>
						<option value='flowering'>Flowering</option>
						<option value='fruit'>Fruit</option>
						<option value='cacti'>Cacti</option>
						<option value='other'>Other</option>
					</select>
				</div>
				<div className={styles.formgroup}>

					<h3>Health</h3>
					<select name="type" value={health} onChange={(e) => setHealth(e.target.value)}>
						<option value='1'>🌿</option>
						<option value='2'>🌿🌿</option>
						<option value='3'>🌿🌿🌿</option>
						<option value='4'>🌿🌿🌿🌿</option>
						<option value='5'>🌿🌿🌿🌿🌿</option>
					</select>
				</div>
				<div className={styles.formgroup}>

					<h3>Care Notifications</h3>
					<select name="waterFreq" value={waterFreq}
						onChange={(e) => setWaterFreq(e.target.value)}>
						<option value='daily'>Daily</option>
						<option value='mwf'>M/W/F</option>
						<option value='weekly'>Weekly</option>
						<option value='twowks'>Every Two Weeks</option>
						<option value='nonotifs'>No Notifications</option>
					</select>
				</div>
				<div className={styles.formgroup}>
					<Button name="Update" type="submit"></Button>
				</div>
			</form>
		</div>

	);
}
