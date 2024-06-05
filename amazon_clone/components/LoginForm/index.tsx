
import React from 'react';
import { Container, RegisterButton, SignInButton } from './styled';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import router, { useRouter } from 'next/router';
import { useAppDispatch } from '@/lib/store/hooks';
import { signInToAccount } from '@/lib/store/reducers/userReducer';



const LoginForm = () => {
  //validar mi email y password se hace uso del usestate
  //para hagarrar los datos que van a ingresar

  //esto es para guardar los datos no aplica en botones 
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");

    const router =useRouter();
    const dispatch= useAppDispatch();
    //cuando es evento se osea losbottones se hace (onclick)
    const signin = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
      //para prevenir que se refresh
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password)
      .then(userCredential => {
        console.log(userCredential.user)
        dispatch(signInToAccount(userCredential.user));
        router.push("/");
      })
      .catch((error) =>{
        const errorMessage =error.message;
        //para mejorar el error es alert no conloe log
        alert(`${errorMessage}`);
      });
    };

    const register = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth,email,password)
      .then(userCredential => {
        console.log(userCredential.user);
        dispatch(signInToAccount(userCredential.user));
        router.push("/");
      })
      .catch((error) =>{
        const errorMessage =error.message;
        //para mejorar el error es alert no conloe log
        alert(`${errorMessage}`);
      });
    }


  return (
    <Container>
      <h1>Sign In</h1>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"  value={password} 
        onChange={(e)=> setPassword(e.target.value)}/>
        <SignInButton type='submit' onClick={(e) =>signin(e)}>
          Sign In
        </SignInButton>
        <p style={{textAlign:"center"}}>Or</p>
        <RegisterButton type="button" onClick={(e) => register(e)}>Create your Amazon Account</RegisterButton>
      </form>
    </Container>
  )
}

export default LoginForm
