import React, {SyntheticEvent, useState} from 'react';
import {csrfToken, getCsrfToken} from "next-auth/client";
import Phone from '../components/Phone'
import { useRouter } from 'next/router'
import styles from '../styles/Login.module.scss'

export default function SignIn({csrfToken}) {

    return (
        <Phone>
            <form className={styles.LoginForm} method='post' action='/api/auth/callback/credentials'>
                <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
                <label htmlFor="loginInput">Login:</label>
                <input
                    id="loginInput"
                    type="text"
                    className="form-control"
                    Required
                />
                <label htmlFor="passwordInput">Password:</label>
                <input
                    id="passwordInput"
                    type="password"
                    className="form-control"
                    required
                />
                <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </Phone>
    )


}

export async function getServerSideProps(context){
    return {
        props: {
            csrfToken: await getCsrfToken(context)
        }
    }
}






