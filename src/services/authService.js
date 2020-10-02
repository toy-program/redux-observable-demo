export function fakeAuth(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'foo' && password === 'bar') {
                return resolve({username})
            }

            return reject(new Error("인증 정보가 올바르지 않습니다."))
        }, 1000)
    })
}