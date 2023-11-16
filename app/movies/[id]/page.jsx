import { getMovieDetails, getSimilarMovies } from "@/app/utils/requests";

async function MovieDetailsPage({ params }) {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    const movieDetails = await getMovieDetails(params.id);
    const similarMovies = await getSimilarMovies(params.id);

    return (
        <div>
            <div className="flex flex-col items-center p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

                    <img src={IMAGE_BASE_URL + movieDetails.poster_path} alt="" className="object-cover rounded-lg" />

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">{movieDetails.title}</h3>
                        <div className="flex space-x-2 mb-2">
                            <p className="bg-red-500 text-white font-semibold py-2 px-4 rounded">{movieDetails.release_date}</p>
                            <p className="bg-red-500 text-white font-semibold py-2 px-4 rounded">{movieDetails.original_language}</p>
                            <p className="bg-red-500 text-white font-semibold py-2 px-4 rounded">{movieDetails.status}</p>
                        </div>
                        <div>
                            <p>
                                {movieDetails.genres.map(genre => (
                                    <span className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded mr-2 mb-2" key={genre.id}>
                                        {genre.name}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <p className="pt-5">{movieDetails.overview}</p>
                    </div>
                </div>
            </div>
            {/* Similiar Movies */}
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <h2 className="flex text-2xl font-semibold">Similiar Movies</h2>
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {similarMovies.map(movie => {
                            return (
                                <div>
                                    <img src={IMAGE_BASE_URL + movie.poster_path} />
                                    <div>
                                        <h5>{movie.title}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;