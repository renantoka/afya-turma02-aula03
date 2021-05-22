import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import Lottie from 'react-lottie';
import animationData from '../../assets/animation/60347-loader.json'

import { toast } from 'react-toastify';

import api from '../../service/api';
import { FormContent } from './style';

interface IUserLogin {
    usuario: string;
    senha: string;
}


const FormSignIn: React.FC = () => {

    const history = useHistory()

    const [formDataContent, setFormDataContent] = useState<IUserLogin>({} as IUserLogin);
    const [isLoad, setIsLoad] = useState<boolean>(false);

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setIsLoad(true)

            api.post('login', formDataContent).then(
                response => {
                    localStorage.setItem('@tokenAfyaApp', response.data.token)
                    toast.success('Você está sendo redirecionado para sua página.', {
                        onClose: () => history.push('/dash')
                    })
                }
            )
                .catch(e => toast.error('Tivemos um problema com seu cadastro, tente novamente'))
                .finally(() => setIsLoad(false))
        }, [formDataContent, history]
    );

    const animationContent = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }
    return (
        <FormContent>

            { isLoad ? (
                <Lottie
                    options={animationContent}
                    width={200}
                    height={300}
                />
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Insira seu nome de usuário"
                        onChange={e => setFormDataContent({ ...formDataContent, usuario: e.target.value })}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Insira sua senha"
                        onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })}
                    />
                    <input
                        type="submit"
                        value="Logar"
                    />
                </form>
            )}
        </FormContent>
    );
}

export default FormSignIn;