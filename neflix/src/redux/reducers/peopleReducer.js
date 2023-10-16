let initialState = {
    popularPeople:[],
    loading: true,
}

function peopleReducer(state = initialState, action) {
    let {
        type,
        payload
    } = action

    switch (type) {
        case "GET_PEOPLE_REQUEST":
            return {
                ...state, loading: true
            }
        case "GET_PEOPLE_SUCCESS":
            return {
                ...state,
                popularPeople: payload.popularPeople,
                loading: false,
            };
        case "GET_PEOPLE_DETAIL_SUCCESS":
            return {
                ...state,
                movieDetail2: payload.movieDetail2,
                loading: true
            };
        case "GET_PEOPLE_FAILURE":
            return {
                ...state, loading: false
            };

        default:
            return {
                ...state
            }
    }

}

export default peopleReducer;