import React from 'react';
import Movie from './Movie';

import axios from '../../axios';

import { ClipLoader } from 'react-spinners';

export default class Movies extends React.Component {
	state = {
		name: '',
		rating: '',
		movies: [],
		loading: true
	};

	getMovies = () => {
		axios.get('/movies.json').then((response) => {
			console.log('response ', response.data);
			const data = response.data;

			const movies = [];

			if (!data) return;

			Object.entries(data).map((item) => movies.push({ key: item[0], ...item[1] }));

			this.setState({ movies: movies, loading: false });
		});
	};

	componentDidMount = () => {
		this.getMovies();
	};

	handleNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	handleRatingChange = (event) => {
		this.setState({ rating: event.target.value });
	};

	handleAdd = async () => {
		const updatedMovies = this.state.movies;

		const movie = { name: this.state.name, rating: this.state.rating };

		let key;

		await axios
			.post('/movies.json', movie)
			.then((response) => {
				key = response.data.name;
				movie.key = key;
			})
			.catch((error) => console.log('error ', error));

		updatedMovies.push(movie);
		this.setState({ movies: updatedMovies, name: '', rating: '' });
	};

	handleDelete = (deleteMovie) => {
		let movies = this.state.movies;

		movies = movies.filter((movie) => movie.name !== deleteMovie.name);

		this.setState({ movies: movies });

		axios.delete(`/movies/${deleteMovie.key}.json`);
	};

	render() {
		return (
			<>
				<div className="movies">
					<input
						type="text"
						placeholder="Enter movie name"
						onChange={this.handleNameChange}
						value={this.state.name}
					/>
					<input
						type="text"
						placeholder="Enter movie rating"
						onChange={this.handleRatingChange}
						value={this.state.rating}
					/>
					<button onClick={this.handleAdd}>Add</button>
				</div>
				{this.state.loading ? (
					<div>
						<ClipLoader loading />
					</div>
				) : (
					<div>
						{this.state.movies.map((movie, index) => (
							<Movie movie={movie} deleteMovie={this.handleDelete} key={index} />
						))}
					</div>
				)}
			</>
		);
	}
}
