import { userService } from './userService';

async function CreateUser(
  name: string,
  email: string,
  phone: string,
  state: string,
  city: string,
  password: string,
  admin: boolean,
  token?: string,
) {
  await userService.post('/user/', {
    name,
    email,
    phone,
    state,
    city,
    password,
    admin,
    token,
  });
}

export { CreateUser };
