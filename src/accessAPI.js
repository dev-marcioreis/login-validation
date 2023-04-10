export function login( {email, password} ) {
    
    const delay = (0.5 + Math.random() * 2) * 1000

    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if(password === 'senha@123' && !!email) {
                    resolve({messege: 'Acesso com sucesso!'})
                } else {
                    reject({messege: 'E-mail ou senha inválido.'})
                }
            }, delay)
        })
    )
}