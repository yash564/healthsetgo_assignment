import { FETCH_USERS, ADD_USER, EDIT_USER, DELETE_USER } from "./types";
const users = [
    {
      "id": 1,
      "name": "Das Nobel",
      "email": "dasnobel@mtx.biz",
      "pencard":"233434223",
      "driving":"1232323131",
      "phone": "1111111111",
      "Description":"Lorsum spum",
      "Category":"Category1"
    },
    {
      "id": 2,
      "name": "Clement Mihailescu",
      "email": "Clement@alogo.biz",
      "pencard":"232434223",
      "driving":"1232322131",
      "phone": "1111111112",
      "Description":"Lorsum spum",
      "Category":"Category2"
      }
    
  ]
export const fetchUsers = () => dispatch => {
    
        const userdata = users.map(user => {
            const { id, name, email, phone, pencard,driving,Description,Category } = user;
            return {
                id,
                name,
                email,
                phone,
                pencard,
                driving,
                Description,
                Category
            };
        });
        dispatch({
            type: FETCH_USERS,
            payload: userdata
        });
    }


export const addEditUsers = (userData) => dispatch => {
    if (!userData[0].edit) {
        dispatch({
            type: ADD_USER,
            payload: userData
        });
    } else {
        dispatch({
            type: EDIT_USER,
            payload: userData
        });
    }
};

export const removeUsers = (usersNameArr) => dispatch => {
    dispatch({
        type: DELETE_USER,
        payload: usersNameArr 
    });
};
