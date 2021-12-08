/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { Col } from 'react-bootstrap'
import Button from '../components/Button/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hallowen Time</title>
			</Head>
			<header className={`d-flex w-100 justify-content-end ${styles.header}`}>
				<ul className={styles.headerItems}>
					<li>Home</li>
					<li>Services</li>
					<li>Success Stories</li>
					<li>Blog</li>
					<Button onClick={() => alert('feito')}>Contact Us</Button>
				</ul>
			</header>

			<section className={styles.sectionInitial}>
				<Col sm={12} md={7} className="d-flex align-self-center flex-column">
					<h1>it's time to<br /> get scared</h1>
					<p>We create solutions that have top notch ui/ux designs and software
						development standards, suitable for best web products & iOS & Android
						apps, crafted with love & passion.</p>

					<Button onClick={() => alert('feito')} className={styles.buttonGreen}>Contact Us</Button>

					<div className={styles.buttonContainer}>
						<Button onClick={() => alert('feito')}><img src="/icons/scaryIcon1.svg" height="40" width="auto" />UI/UX</Button>
						<Button onClick={() => alert('feito')}><img src="/icons/scaryIcon2.svg" height="40" width="auto" />App Design</Button>
						<Button onClick={() => alert('feito')}><img src="/icons/scaryIcon3.svg" height="40" width="auto" />Web Design</Button>
					</div>
				</Col>

				<Col sm={12} md={5} className="d-flex justify-content-end">
					<div className={styles.scaryImage} />
				</Col>
			</section>
		</div>
	)
}
