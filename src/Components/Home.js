import React from 'react';
import styles from "../Styles/home.module.css"
import { Card, Row, Col, Container } from 'react-bootstrap';

export default function Home() {
	
		return (<div className={styles.homeWrapper}>
		<h2>Welcome!</h2>
			<Container className={styles.cardDiv}>
				<Row>
					<Col md="auto">
						<Card bg='primary'>
							This is my website and my final project for Promineo Tech.
							I have searched through previous projects and used my favorite ones
							to complete this project.
						</Card>
					</Col>
					<Col md="auto">
						<Card bg='success'>
							The Movies page is the movies app we were asked to make in
							week 14. It has 5 components! You can see movie info and add
							your own reviews and ratings. Be careful though; I didn't set it
							up to hang on the reviews after a refresh.
						</Card>
					</Col>
					<Col md="auto">
						<Card bg='primary'>
							The To-Do List page is actually a project I did on my own outside of
							class. I used a tutorial from Web Dev Simplified that aimed to help the
							viewer get more comfortable with React. Spoiler Alert: It worked! So I thought
							I'd add that little guy in here. It has 3 components! Oooooh!!! Ahhhhh!
						</Card>
					</Col>
					<Col md="auto">
						<Card bg='success'>
							Last, but certainly not least, is my reading list page. I'm pretty sure I have
							been doing different variations of the reading list throughout my time at
							Promineo Tech. It just makes the most sense, since I like to read annnnd I often
							do make reading lists of my own in my bullet journal. This particular page takes
							most of the code from my week 15 project. And it has 3 components! So by my math,
							that makes a total of 11 components! YAY!!! We did it!
						</Card>
					</Col>
				</Row>
			</Container>
		</div>)
}
