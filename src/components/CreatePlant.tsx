import styles from './CreatePlant.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from './Button';

export default function CreatePlant({ display }: { display: any }) {
	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [health, setHealth] = useState('');
	const [waterFreq, setWaterFreq] = useState('');
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const router = useRouter();

	const displayVar = {
		display: `${display}`,
	};
	console.log(displayVar);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setError('');
		setMessage('');
		if (name && type && health && waterFreq) {
			// send a request to the server.
			try {
				const body = { name, type, health, waterFreq };
				await fetch('/api/plants/create', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
				});
				await router.push('/');
			} catch (error) {
				console.error(error);
			}
		} else {
			setError('All fields are required');
			return;
		}
	};

	return (

		<div style={displayVar} className={styles.addplantform}>
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
					<input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div className={styles.formgroup}>

					<h3>Type</h3>
					<input type="text" name="type" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
				</div>
				<div className={styles.formgroup}>

					<h3>Health</h3>
					<input type="text" name="health" placeholder="Health" value={health} onChange={(e) => setHealth(e.target.value)} />
				</div>
				<div className={styles.formgroup}>

					<h3>Water Frequency</h3>
					<input type="text" name="water frequency" placeholder="Water Frequency" value={waterFreq} onChange={(e) => setWaterFreq(e.target.value)} />
				</div>
				{/* <div className="form-group">

					<label>Last Watered</label>
					<input type="date" name="last watered" placeholder="Last Watered" value={lastWatered} onChange={(e) => setLastWatered(e.target.value)} />
				</div> */}
				<div className={styles.formgroup}>
					<Button name="Add Plant" type="submit"></Button>
				</div>
			</form>
		</div>

	);
}
