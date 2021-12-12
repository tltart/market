import { host, authHost } from './httpIndex';
import jwt from 'jwt-decode';

export const registration = async ({ email, password }) => {
    const { data } = await host.post('api/user/registration', { email, password });
    localStorage.setItem('token', data.token);
    return jwt(data.token)
}
export const login = async ({ email, password }) => {
    const { data } = await host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwt(data.token)
}
export const check = async () => {
    const { data } = await authHost.get('api/user/check');
    localStorage.setItem('token', data.token);
    return jwt(data.token)
}