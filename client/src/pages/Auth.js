import { React } from 'react';

const Auth = () => {


    return (
        <div style={{ display: 'flex', paddingTop: '50px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 600, border: '1px solid grey', borderRadius: 10 }}>
                <div class="row">
                    <div class="col s12">
                        <div class="row">
                            <form onSubmit={console.log("444444444444")}>
                                <div class="input-field col s12">
                                    <input type="email" id="autocomplete-input" class="autocomplete" placeholder="Введите Email"></input>
                                    <input type="password" id="autocomplete-input" class="autocomplete" placeholder="Введите пароль"></input>
                                </div>
                                <a class="waves-effect waves-light btn" type="submit">Войти</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;