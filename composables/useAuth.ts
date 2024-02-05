export const useAuth = () => {
    let testUser = {
        email: 'admin@email.com',
        password: 'admin',
        custom: 'custom data here',
    }

    /**
     * Function to sign in a user
     * When a user exists, it'll put the user data into the store/state
     * @param {string} email 
     * @param {string} password 
     * @returns {void}
     */
    const signIn = async (email: string, password: string, redirect?: string) => {
        if (email == testUser.email && password == testUser.password) {
            const auth = useState('auth', () => {
                return {
                    user: {
                        email: testUser.email,
                        password: testUser.password,
                    },
                    custom: testUser.custom,
                    loggedIn: true,
                }
            });
        }
    }

    /**
     * Function to check the signed In status of a user
     * @returns {boolean}
     */
    const status = async () => {
        return useState('auth');
    }

    // Return statement to make all auth functions available to the component
    return {
        signIn,
        status,
    }
}