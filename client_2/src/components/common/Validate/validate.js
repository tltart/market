export const required = value => {
    return value ? undefined : "Поле не может быть пустым!"
}
export const eq = (_, value) => {
    if (Object.keys(value).length == 2){
        return undefined
    }
    return value.password !== value.password_repeat ? "Пароли не совпадают!" : undefined
}