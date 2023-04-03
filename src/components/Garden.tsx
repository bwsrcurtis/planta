import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Garden.module.css';
import Button from './Button';
import PlantDisplay from './PlantDisplay';

export default function Garden({ plants }: { plants: any }) {
	const { data: session } = useSession();
	const [hasLoaded, setHasLoaded] = useState(false);
	function fadeIn() {
		setHasLoaded(true);
	};

	return (
		<>
			<div className={styles.top}>
				<div>
					<Link href='/plants'>
						<Image alt='Plant Logo Image' src='/potted-plant-icon.png'
							width={35} height={35} onLoadingComplete={() => fadeIn()}></Image>
						<h1>Gardienne</h1>
					</Link>
				</div>

				<Button name='Sign Out' onClick={() => signOut()}></Button>
			</div>
			<div className={styles.plantsdiv}>
				<div className={styles.categories}>
					<h1 className={styles.type}>Type</h1>
					<h1 className={styles.name}>Name</h1>
					<h1 className={styles.health}>Health</h1>
					<h1 className={styles.waterfreq}>Notifs</h1>
					<div className={styles.hiddenbutton}></div>
				</div>
				{plants.map((n: any) => <PlantDisplay key={n.id} plantid={n.id} name={n.name} type={n.type} health={n.health} waterFreq={n.waterFreq}></PlantDisplay>)}
				<div className={styles.add}>
					<Link href='/add' passHref={true}>
						<h1>➕</h1>
					</Link>
				</div>
			</div>
			<div className={styles.lowerdiv}>
				<h1> {session?.user?.name}&apos;s Garden</h1>
			</div>
		</>
	);
}

