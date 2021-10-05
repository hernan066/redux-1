import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase";
/* ////////////////////////////////////////////////////////
                        Importante
Al trabjar con getAuth de Firebase importar  la conf de app
import app from "../firebase";
y a getAuth cargarsela en los parametros     
const auth = getAuth(app);
                         
///////////////////////////////////////////////////////// */
//data inicial
const dataInicial = {
  loading: false, //desactiva botones mientra se loguea
  activo: false, //revisa si el usuario esta logueado o no
};

//types
const LOADING = "LOADING";
const USUARIO_ERROR = "USUARIO_ERROR";
const USUARIO_EXITO = "USUARIO_EXITO";

//reducer
export default function usuarioReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case USUARIO_ERROR:
      return { ...dataInicial };
    case USUARIO_EXITO:
      return { ...state, loading: false, user: action.payload };
    default:
      return { ...state };
  }
}
//acciones
export const ingresoUsuarioAccion = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const res = await signInWithPopup(auth, provider);

    dispatch({
      type: USUARIO_EXITO,
      payload: {
        uid: res.user.uid,
        email: res.user.email,
        nombre: res.user.displayName,
      },
    });
    localStorage.setItem(
      "usuario",
      JSON.stringify({
        uid: res.user.uid,
        email: res.user.email,
        nombre: res.user.displayName,
      })
    );
  } catch (error) {
    console.log(error);
    dispatch({
      type: USUARIO_ERROR,
    });
  }
};
//recuperar usuario del local storage
export const leerUsuarioActivoAccion= ()=> (dispatch)=>{

    if(localStorage.getItem("usuario")){
        dispatch({
            type: USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })
    }
}

