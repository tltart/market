import { host, authHost } from './httpIndex';
import jwt from 'jwt-decode';

export const registration = async ({ email, password }) => {
    const {data} = await host.post('api/user/registration', { email, password, role: 'ADMIN' });
    return jwt(data.token)
}
export const login = async ({ email, password }) => {
    const {data} = await host.post('api/user/login', { email, password });
    return jwt(data.token)
}
export const check = async () => {
    const response = await authHost.get('api/user/check');
    return response
}