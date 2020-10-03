import React from 'react';
import Movie from './Movie';

export default class Movies extends React.Component {
	state = {
		name: '',
		rating: '',
		movies: []
	};

	handleNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	handleRatingChange = (event) => {
		this.setState({ rating: event.target.value });
	};

	handleAdd = () => {
		const updatedMovies = this.state.movies;

		updatedMovies.push({ name: this.state.name, rating: this.state.rating });
		this.setState({ movies: updatedMovies, name: '', rating: '' });
	};

	handleDelete = (deleteMovie) => {
		const movies = this.state.movies;

		this.setState({ movies: movies.filter((movie) => movie.name !== deleteMovie.name) });
	};

	// componentDidMount = () => {
	// 	console.log('componentDidMount ...');
	// }

	render() {
		return (
			<div>
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
				<div>
					{this.state.movies.map((movie, index) => (
						<Movie movie={movie} deleteMovie={this.handleDelete} key={index} />
					))}
				</div>
			</div>
		);
	}
}
