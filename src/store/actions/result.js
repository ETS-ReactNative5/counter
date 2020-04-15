import * as actionTypes from './actionTypes';

// export const saveResult = (res) => {
//     return {
//         type: STORE_RESULT,
//         result: res
//     }
// }

export const storeResult = (res) => {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({
                type: actionTypes.STORE_RESULT,
                result: res
            })
        }, 2000)
    }
}

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    }
}