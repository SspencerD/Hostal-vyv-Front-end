import Swal from "sweetalert2";
import { fetchWithoutToken } from "../../helpers/fetch";
import { types } from "../../types/types";

export const StartRegisterUser = (name, email, password, role = false) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      "signup",
      { name, email, password, role },
      "POST"
    );

      const body = await resp.json();

      const error = body.error;
      
      if (resp.ok) {
        localStorage.setItem("token", body.token);
        localStorage.setItem("token-init-date", new Date().getTime());
          
          dispatch(register({
              id: body.user._id,
              name: body.user.name,
              email: body.user.email
          }))
          
      } else {

          Toast.fire({
              icon: 'error',
              title:{error}        
          });
    }

    
  };
};

export const StartLogin = (email, password) => {
  return async (dispatch) => {

    const resp = await fetchWithoutToken("signin", { email, password }, "POST");

      const body = await resp.json();
      
      

      if (resp.ok) {
        
      localStorage.setItem("token", body.token);
        localStorage.setItem("token-init-date", new Date().getTime());
        

        dispatch(login({
            id: body.user._id,
            name: body.user.name,
            role: body.user.role
        }));    
      } else {
          Swal.fire('Error',body.error , 'error');
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
    payload: user,
});

const register = (user) => ({
    type: types.authStartRegister,
    payload: user,
})
