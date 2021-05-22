import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import { toast } from 'react-toastify';

import api from '../../service/api';
import { FormContent } from './style';

interface IUserLogin {
    login: string;
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

            api.post('usuarios', formDataContent).then(
                response => {
                    toast.success('Cadastro realizado com sucesso!', {
                        onClose: () => history.push('/login')
                    })
                }
            )
                .catch(e => toast.error('Tivemos um problema com seu cadastro, tente novamente'))
                .finally(() => setIsLoad(false))
        }, [formDataContent, history]
    );
    return (
        <FormContent>
            { isLoad ? (
                <p>Carregando</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="user"
                        placeholder="Insira seu nome de usuário"
                        onChange={e => setFormDataContent({ ...formDataContent, login: e.target.value })}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Insira sua senha"
                        onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })}
                    />
                    <input
                        type="submit"
                        value="Criar conta"
                    />
                </form>
            )}
        </FormContent>
    );
}

export default FormSignIn;