import './app-info.css'

const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>КОЛИЧЕСТВО ВСЕХ ФИЛЬМОВ: {allMoviesCount}</p>
			<p className='fs-4 text-uppercase'>Любимый фильм: {favouriteMovieCount}</p>
		</div>
	)
}

export default AppInfo
