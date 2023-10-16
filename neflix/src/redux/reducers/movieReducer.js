let initialState = {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    genreList: [],
    loading: true,
    movieDetail: {},
    peoplelist:{},
}

function movieReducer(state = initialState, action) {
    let {
        type,
        payload
    } = action

    switch (type) {
        case "GET_MOVIES_REQUEST":
            return {
                ...state, loading: true
            }
            case "GET_MOVIE_SUCCESS":
                return {
                    ...state,
                    popularMovies: payload.popularMovies,
                        topRatedMovies: payload.topRatedMovies,
                        upcomingMovies: payload.upcomingMovies,
                        genreList: payload.genreList,
                        peoplelist: payload.peoplelist,
                        loading: false,
                };
            case "GET_MOVIE_DETAIL_SUCCESS":
                return {
                    ...state,
                    movieDetail: payload.movieDetail,
                        loading: true
                };
            case "GET_MOVIES_FAILURE":
                return {
                    ...state, loading: false
                };

            default:
                return {
                    ...state
                }
    }

}

export default movieReducer;