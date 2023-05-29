import React from 'react';
import MovieList from './Movie-Components/MovieList';
import styles from '../Styles/movies.module.css'

export default function Movies() {

	const movies = [
		{
			id: 1,
			title: "Ferris Bueller's Day Off",
			poster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg",
			rating: "PG-13",
			runTime: "1h 38m",
			synopsis: "Ferris Bueller (Matthew Broderick) has an uncanny skill at cutting classes and getting away with it. Intending to make one last duck-out before graduation, Ferris calls in sick, borrows a Ferrari, and embarks on a one-day journey through the streets of Chicago. On Ferris' trail is high school principal Rooney (Jeffrey Jones), determined to catch him in the act.",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 2,
			title: "Zootopia",
			poster: "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg",
			rating: "PG",
			runTime: "1h 48m",
			synopsis: "From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps (Ginnifer Goodwin) becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde (Jason Bateman), a wily fox who makes her job even harder.",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 3,
			title: "Matilda: The Musical",
			poster: "https://m.media-amazon.com/images/M/MV5BOTk4ZDBmMDItNzExNi00ZDYyLTk4MjUtYWI1MmNjYzRkODU2XkEyXkFqcGdeQXVyMTUzNzc3NDAz._V1_.jpg",
			runTime: "1h 57m",
			synopsis: "An adaptation of the Tony and Olivier award-winning musical. Matilda tells the story of an extraordinary girl who, armed with a sharp mind and a vivid imagination, dares to take a stand to change her story with miraculous results.",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 4,
			title: "Blade Runner",
			poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
			rating: "R",
			runTime: "1h 50m",
			synopsis: "Deckard (Harrison Ford) is forced by the police Boss (M. Emmet Walsh) to continue his old job as Replicant Hunter. His assignment: eliminate four escaped Replicants from the colonies who have returned to Earth. Before starting the job, Deckard goes to the Tyrell Corporation and he meets Rachel (Sean Young), a Replicant girl he falls in love with.",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 5,
			title: "Serenity",
			poster: "https://m.media-amazon.com/images/M/MV5BMTc5YjQ0MGQtOTdjZS00OGZhLTk1ZGItMThjOGFiZmMxYWRjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
			rating: "PG-13",
			runTime: "1h 59m",
			synopsis: "A group of rebels travels the outskirts of space aboard their ship, Serenity, outside the reach of the Alliance, a sinister regime that controls most of the universe. After the crew takes in Simon (Sean Maher) and his psychic sister, River (Summer Glau), whom he has just rescued from Alliance forces, they find themselves being pursued by the Operative (Chiwetel Ejiofor), an Alliance agent who will stop at nothing to find them.",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 6,
			title: "The Fifth Element",
			poster: "https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_FMjpg_UX1000_.jpg",
			rating: "PG-13",
			runTime: "1h 53m",
			synopsis: "In the 23rd century, a New York City cabbie, Korben Dallas (Bruce Willis), finds the fate of the world in his hands when Leeloo (Milla Jovovich) falls into his cab. As the embodiment of the fifth element, Leeloo needs to combine with the other four to keep the approaching Great Evil from destroying the world. Together with Father Vito Cornelius (Ian Holm) and zany broadcaster Ruby Rhod (Chris Tucker), Dallas must race against time and the wicked industrialist Zorg (Gary Oldman) to save humanity.",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 7,
			title: "Sonic The Hedgehog",
			poster: "https://upload.wikimedia.org/wikipedia/en/4/45/Sonic_the_Hedgehog_film_poster.jpg",
			rating: "PG",
			runTime: "1h 38m",
			synopsis: "The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik. Now, it's supervillain vs. supersonic in an all-out race across the globe to stop Robotnik from using Sonic's unique power to achieve world domination.",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 8,
			title: "The Phantom of The Opera",
			poster: "https://m.media-amazon.com/images/M/MV5BNDczNzg4OTM3MV5BMl5BanBnXkFtZTcwOTQzMTEzMw@@._V1_FMjpg_UX1000_.jpg",
			rating: "PG-13",
			runTime: "2h 23m",
			synopsis: "From his hideout beneath a 19th century Paris opera house, the brooding Phantom (Gerard Butler) schemes to get closer to vocalist Christine Daae (Emmy Rossum). The Phantom, wearing a mask to hide a congenital disfigurement, strong-arms management into giving the budding starlet key roles, but Christine instead falls for arts benefactor Raoul (Patrick Wilson). Terrified at the notion of her absence, the Phantom enacts a plan to keep Christine by his side, while Raoul tries to foil the scheme.",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 9,
			title: "Hook",
			poster: "https://upload.wikimedia.org/wikipedia/en/0/0e/Hook_poster_transparent.png",
			rating: "PG",
			runTime: "2h 22m",
			synopsis: "When his young children are abducted by his old nemesis, Capt. Hook (Dustin Hoffman), middle-aged lawyer Peter Banning (Robin Williams) returns to his magical origins as Peter Pan. Peter must revisit a foggy past in which he abandoned Neverland for family life, leaving Tinkerbell (Julia Roberts) and the Lost Boys to fend for themselves. Given their bitterness toward Peter for growing up -- and their allegiance to their new leader, Rufio -- the old gang may not be happy to see him.",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 10,
			title: "Clue",
			poster: "https://m.media-amazon.com/images/M/MV5BM2VlNTE1ZmMtOTAyNS00ODYwLWFmY2MtZWEzOTE2YjE1NDE2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
			rating: "PG",
			runTime: "1h 37m",
			synopsis: "Six blackmail victims are invited to an isolated mansion by a man who knows a dark secret from each of their pasts. On arrival, each is given a pseudonym drawn from Cluedo before being introduced to the blackmailer. Each is handed a weapon, at which point the lights are switched off and the blackmailer is killed. Can the guests uncover the murderer before they all become victims?",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 11,
			title: "Rocky Horror Picture Show",
			poster: "https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_FMjpg_UX1000_.jpg",
			rating: "R",
			runTime: "1h 38m",
			synopsis: 'In this cult classic, sweethearts Brad (Barry Bostwick) and Janet (Susan Sarandon), stuck with a flat tire during a storm, discover the eerie mansion of Dr. Frank-N-Furter (Tim Curry), a transvestite scientist. As their innocence is lost, Brad and Janet meet a houseful of wild characters, including a rocking biker (Meat Loaf) and a creepy butler (Richard O Brien). Through elaborate dances and rock songs, Frank-N-Furter unveils his latest creation: a muscular man named Rocky',
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		},
		{
			id: 12,
			title: "The Fast and The Furious",
			poster: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
			rating: "PG-13",
			runTime: "1h 46m",
			synopsis: "Dominic Toretto (Vin Diesel) enjoys the adrenaline of street car racing and his fans treat him like a rock star. After a blazing encounter with the ruthless Johnny Tran, Dom decides to take Brian (Paul Walker), a newcomer to street racing, under his wing. Dom's sister Mia sees something she likes in Brian, too. Trouble is, neither of them realize he's an undercover cop, and Dominic and his rival Johnny Tran are both the prime suspects in a case involving dirty money and big-rig hijacking.",
			reviews: [
				{
					stars: null,
					review: ""
				}
			]
		}
	]
	
		return (
			<MovieList movies={movies} styles={styles} />
		);
}
