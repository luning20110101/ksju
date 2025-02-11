import { registerUser, loginUser, findUserByEmail } from "~/server/model/user";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    try {
        const { email, password } = await readBody(event);

        console.log('获取配置')
        console.log(config)
        console.log(JSON.stringify(config))
        

        if (email !== config.adminEmail || password !== config.adminPassword) {
            return {
                code: 500,
                msg: '邮箱或密码不正确'
            }
        }
        try {
            const userExists = await findUserByEmail(email);
            if (userExists) {
                // 用户已存在
                return {
                    code: 200,
                    msg: '用户已存在',
                    data: await loginUser(email, password)
                }
            } else {
                // 用户不存在
                return {
                    code: 200,
                    msg: '用户不存在',
                    data: await registerUser()
                }
            }
        } catch (error) {
            return {
                code: 500,
                msg: error,
            };
        }

    } catch (e) {
        console.log(e)
        return {
            code: 500,
            msg: e,
        }
    }
})