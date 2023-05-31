import React from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
	
	/*NOTE - containers for blurbs on the home page, each with a different color. The containers are responsive and adjust to the size of the website page,
	while also keeping the information legible */
		return (
			<div>
			<Container className='mx-auto m-3 bg-primary bg-opacity-75 rounded'>
				<h1 className='text-center text-light fw-bold p-3'>Welcome!</h1>
				<div>
					<p className='text-center text-light fw-bold fs-5 p-3 m-3'>
					This is my website and my final project for Promineo Tech.
					I have searched through previous projects and used my favorite ones
					to complete this project.
					</p>
				</div>
			</Container>
			<Container className='p-3 m-3 mx-auto bg-success bg-opacity-75 rounded'>
				<div>
					<p className='text-center text-light fw-bold fs-5 p-3 m-3'>
					The Movies page is the movies app we were asked to make in
					week 14. It has 5 components! You can see movie info and add
					your own reviews and ratings. Be careful though; I didn't set it
					up to hang on the reviews after a refresh.
					</p>
				</div>
			</Container>
			<Container className='p-3 m-3 mx-auto bg-warning bg-opacity-75 rounded'>
				<div>
					<p className='text-center text-light fw-bold fs-5 p-3 m-3'>
					The To-Do List page is actually a project I did on my own outside of
					class. I used a tutorial from Web Dev Simplified that aimed to help the
					viewer get more comfortable with React. Spoiler Alert: It worked! So I 
					I'd add that little guy in here. It has 3 components! Oooooh!!! Ahhhhh!
					</p>
				</div>
			</Container>
			<Container className='p-3 m-3 mx-auto bg-danger bg-opacity-75 rounded'>
			<div>
				<p className='text-center text-light fw-bold fs-5 p-3 m-3'>
					Last, but certainly not least, is my reading list page. I'm pretty sure I have
					been doing different variations of the reading list throughout my time at
					Promineo Tech. It just makes the most sense, since I like to read annnnd I often
					do make reading lists of my own in my bullet journal. This particular page takes
					most of the code from my week 15 project. And it has 3 components! So by my math,
					that makes a total of 11 components! YAY!!! We did it!
				</p>
			</div>
			</Container>
			</div>
		)
}
