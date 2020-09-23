import { FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';


export const fetchProducts = () => async dispatch => {
  
  try {
    const response = await axios.get('http://localhost:5000/products/all' )
    console.log(response.data)
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data
    })
  }
  catch (err) {
    console.log(err)
  }
}

// export const modifyComment = (comment, itinerary, action) => async dispatch => {
//   const config = {headers: {
//     'Content-Type': 'application/json',
//     'Authorization':  `bearer ${localStorage.token}`
//   }}
//   if (action === "create") {
//     const body = JSON.stringify({comment, itinerary})
//     const response = await axios.post('http://localhost:5000/comments/create', body, config)
//     dispatch({
//       type: MODIFY_COMMENT,
//       payload: response.data
//     })
//   } else if (action === "delete") {
//     const body = JSON.stringify({comment})
//     const response = await axios.post('http://localhost:5000/comments/delete', body, config)
//     dispatch({
//       type: MODIFY_COMMENT,
//       payload: response.data
//     })

//   } else if (action === "edit") {
//     const body = JSON.stringify({comment, itinerary})
//     const response = await axios.post('http://localhost:5000/comments/edit', body, config)
//     dispatch({
//       type: MODIFY_COMMENT,
//       payload: response.data
//     })
//   }
  
// }
