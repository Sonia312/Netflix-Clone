import React, { useState } from 'react'
import styled from 'styled-components'
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import { useNavigate } from "react-router-dom";



const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setformValues] = useState({email: "", password: ""})
    
    const navigate = useNavigate()

    const handleSignIn = async() =>{
        try{
            const{email, password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        }
        catch(error){
            console.log(error);
        }

    }
// onAuthStateChanged(firebaseAuth, (currentUser)=>{
//     if(currentUser)navigate('/')
// })
    

  return (
    <Container>
        <BackgroundImage/>

        <div className='content'>
            <Header login/>
            <div className='body'>
                <div className='text'>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <h6>
                        Ready to watch? Enter your email to create or restart membership.
                    </h6>
                </div>
            <div className='form'>{
                showPassword ? (
                    <input type='password' name='password' placeholder='password'
                    value={formValues.password}
                    onChange={(e)=>setformValues({
                        ...formValues, [e.target.name]: e.target.value
                    }
                       
                    )}
                    />

                ): (                
                        <input type='email' name='email' placeholder='email'
                        value={formValues.email}
                        onChange={(e)=>setformValues({
                        ...formValues, [e.target.name]: e.target.value
                    }
                       
                    )}
                        />
                    ) 
            }

            {
                !showPassword ? (
                    <button onClick={()=>setShowPassword(true)}>Get Started</button>
                ):
                <button onClick={handleSignIn}>Sign Up</button>

            }
                

                </div>
            

            
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;

.content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .text{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 2rem;
        color: white;
    }
    h1{
        padding: 0 15rem;
    }
    h4{
        margin-top: 1.5rem;
    }
    h6{
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
}
.form{
    display: grid;
    width: 60%;
    grid-template-columns: ${({showPassword}) => showPassword ? "1fr 1fr" : "1fr 2fr"};
    input{
        color: black;
        padding: 1.5rem;
        font-size: 1.2rem;
        width: 45rem;
        &:focus{
            outline: none;
        }
    }
    button{
        padding: 0.5rem 1rem;
        background-color: red;
        border: none;
        cursor: pointer;
        font-size: 1.05rem;
        color: white;
        width: 10rem;
    }
}
`;
export default SignUpPage