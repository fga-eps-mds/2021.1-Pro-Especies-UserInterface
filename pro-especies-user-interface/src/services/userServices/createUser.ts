import { userService } from './userService';


async function CreateUser(
    name: string,
    email: string,
    phone: string,
    state: string,
    city: string,
    password: string,
    admin: boolean,
    token?: string
) {
    await userService.post("/user/", {
        name: name,
        email: email,
        phone: phone,
        state: state,
        city: city,
        password: password,
        admin: admin,
        token: token
    });
}

export { CreateUser };