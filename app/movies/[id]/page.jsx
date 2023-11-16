import { getMovieDetails } from "@/app/utils/requests";

async function MovieDetailsPage({ params }) {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    const movieDetails = await getMovieDetails(params.id);

    return (
        <div className="p-10">
            <div className="flex items-center space-x-4">
                <div className="w-1/4">
                    <img src={IMAGE_BASE_URL + movieDetails.poster_path} alt="" className="object-cover rounded-lg" />
                </div>
                <div className="w-3/4 p-5">
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
    );
}

export default MovieDetailsPage;