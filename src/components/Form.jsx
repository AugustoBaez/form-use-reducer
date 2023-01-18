import React, { useReducer } from "react";

const Form = () => {

    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        },
    }


    const [state, dispatch] = useReducer(reducer, initialState)


    function reducer(state, action) {
        let errorAux = null
        if (action.type == "firstName" && action.payload.length < 2) errorAux = "nombre debe ser mas largo que 2 caracteres"
        if (action.type == "lastName" && action.payload.length < 2) errorAux = "apellido debe ser mas largo que 2 caracteres"
        // if (action.type == "email" && action.payload !== /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(('email').val())) errorAux = "email no es valido"
        return {
            ...state,
            [action.type]: { value: action.payload, error: errorAux }

        }
    }

    function adminForm(e) {
        const { name, value } = e.target
        dispatch({
            type: name,
            payload: value
        })
    }

    return (
        <div>
            <form action="">
                <div className="form">
                    <label htmlFor="firstname">First Name:</label>
                    <input onChange={adminForm} type="text" name="firstName" id="firstName" />
                    {state.firstName.error !== null && (<p>{state.firstName.error}</p>)}
                </div>
                <div className="form">
                    <label htmlFor="firstname">Last Name:</label>
                    <input onChange={adminForm} type="text" name="lastName" id="lastName" />
                    {state.lastName.error !== null && (<p>{state.lastName.error}</p>)}
                </div>
                <div className="form">
                    <label htmlFor="firstname">Email:</label>
                    <input onChange={adminForm} type="text" name="email" id="email" />
                    {state.email.error !== null && (<p>{state.email.error}</p>)}
                </div>
            </form>
            <button type="submit">Submit</button>
        </div>
    )

}
export default Form