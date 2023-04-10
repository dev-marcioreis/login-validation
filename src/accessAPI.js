export function login( {email, password} ) {
    
    const delay = (.7 + Math.random() * 2) * 1000

    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if(password === 'senha@123' && !!email) {
                    resolve()
                } else {
                    reject({messege: 'E-mail ou senha inválido.'})
                }
            }, delay)
        })
    )
}