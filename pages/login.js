import Phone from "../components/Phone";
import React, {SyntheticEvent, useState} from 'react';
import {getCsrfToken} from "next-auth/client";


export default function SignIn({csrfToken}) {



    return (
        <form method='post' action='/api/auth/callback/credentials'>
            <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
            <input type="text" className="form-control"  placeholder="Username" required />
            <input type="password" className="form-control" placeholder="Password" required   />
            <button className="w-100 btn btn-lg btn-primary" type="submit" >Log in</button>
        </form>
    )
}

export async function getServerSideProps(context){
    return {
        props: {
            csrfToken: await getCsrfToken(context)
        }
    }
}

