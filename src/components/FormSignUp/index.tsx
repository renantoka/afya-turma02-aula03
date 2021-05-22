import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import { toast } from 'react-toastify';

import api from '../../service/api';

interface IUserRegister {
    cpf: string;
    nome: string;
    login: string;
    senha: string;
}


const FormSignUp: React.FC = () => {

    const history = useHistory()

    const [formDataContent, setFormDataContent] = useState<IUserRegister>({} as IUserRegister);
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
        <div>
            { isLoad ? (
                <p>Carregando</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Insira seu nome"
                        onChange={e => setFormDataContent({ ...formDataContent, nome: e.target.value })}
                    />
                    <input
                        type="text"
                        name="user"
                        placeholder="Insira seu nome de usuário"
                        onChange={e => setFormDataContent({ ...formDataContent, login: e.target.value })}
                    />
                    <input
                        type="text"
                        name="cpf"
                        placeholder="Insira seu CPF"
                        onChange={e => setFormDataContent({ ...formDataContent, cpf: e.target.value })}
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
        </div>
    );
}

export default FormSignUp;