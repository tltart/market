import { host, authHost } from './httpIndex';


export const AddGoodToBasket = async ({}) => {
    const { data } = await host.post('api/user/registration', { email, password, role: 'ADMIN' });
    localStorage.setItem('token', data.token);
    return jwt(data.token)
}