import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();


const useFirebase =()=>{
    const [user, setUser]= useState({});
    const [error, setError]= useState('');
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


   
  
  const signInUsingGoogle =()=>{
   return signInWithPopup(auth, provider)
   .then(res=>{
     const user = res.user
     setUser(user)
     console.log(user)
   })
   .catch(error=>{
    setError(error.message)
})
    .finally(()=>{setLoading(false)});
  
  }

  const logOut = ()=>{
      setLoading(true)
      signOut(auth)
      .then(()=>{
        setUser({});
       
      })
      
      .finally(()=>{setLoading(false)}); 
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({});
        }
        setLoading(false);
    });
    return () => unsubscribe;
}, [])


  useEffect(()=>{
      onAuthStateChanged(auth, user=>{
        if(user){
          setUser(user)
        }
      })
  }, [])


  return {
      user,
      error,
      setLoading,
      loading,
      setUser,
      setError,
      signInUsingGoogle,
      logOut,
      
      
    
     

  }
}

export default useFirebase;