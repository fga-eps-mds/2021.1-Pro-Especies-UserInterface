import { userService } from './userService';

async function UserLogin(emailPhone: string, password: string) {
  const res = await userService.post('/user/login', {
    emailPhone,
    password,
  });

  return res;
}

export { UserLogin };
