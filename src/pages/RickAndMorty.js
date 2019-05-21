import React from 'react';

import './styles/css/global.css';
import './styles/css/RickAndMorty.css';

import logo from '../images/rick-and-morty-logo.png';

import CharacterCard from '../components/CharacterCard';

class RickAndMorty extends React.Component {
	state = {
		loading: true,
		error: null,
		data: {
			info: {},
			results: []
		},
		nextPage: 1
	};

	componentDidMount() {
		this.fetchCharacters();
	}

	fetchCharacters = async () => {
		this.setState({ loading: true, error: null });
		try {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character/?page=${
					this.state.nextPage
				}`
			);
			const data = await response.json();

			this.setState({
				loading: false,
				data: {
					info: data.info,
					results: [].concat(
						this.state.data.results,
						data.results
					)
				}
			});
		} catch (error) {
			this.state({
				loading: false,
				error: error
			});
		}
	};
	render() {
		if (this.state.error) {
			return 'Error!';
		}
		return (
			<div className='container'>
				<img
					className='logo img-fluid mx-auto d-block'
					src={logo}
					alt=''
				/>
				<ul className='row'>
					{this.state.data.results.map(
						character => (
							<li
								className='col-md-3 col-6'
								key={character.id}
							>
								<CharacterCard
									character={character}
								/>
							</li>
						)
					)}
				</ul>
			</div>
		);
	}
}

export default RickAndMorty;
