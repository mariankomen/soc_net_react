const FOLLOW = 'FOLLOW'
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


let initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state, users: [ ...action.users]
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const followAC = (userId) => {
    return {type: FOLLOW, userId: userId}
}
export const unFollowAC = (userId) => {
    return {type: UNFOLLOW, userId: userId}
}
export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
}
export const setCurrentPageAC = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}
export const setTotalCountAC = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount: totalCount}
}
export const toggleIsFetchingAC = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
}


export default usersReducer