import { auth, provider } from "../firebase/credentials";
import { signInWithPopup } from "firebase/auth";

async function loginGoogle() {
  //   signInWithPopup(auth, provider).then((result) => {});

  const result = await signInWithPopup(auth, provider);
  //   localStorage.setItem("isAuth", true);
  //   setIsAuth(true);
  console.log(result);
  return result;
}

export default loginGoogle;
