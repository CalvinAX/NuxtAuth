import type { UserObject } from '~/types/authTypes';

export const useAuth = () => {
    let testUser = {
        id: 1,
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
            const auth = useState('auth', () => ({
                user: {
                    id: testUser.id,
                    email: testUser.email,
                    password: testUser.password,
                },
                loggedIn: 'authenticated',
                custom: testUser.custom,
            }));
            let redirectTo = redirect || '/';

            navigateTo(redirectTo);
        }
    }

    /**
     * Function to check if a cookie with login information exists
     * Automatically signs in the user if a cookie with a jwt and id exists
     * @param {string} jwt
     * @param {number} id
     * @returns {void}
     */
    const cookieSignIn = async () => {
        const cookie = useCookie('auth');
        const auth = useState('auth');
        if (auth.value == undefined) {
            if (cookie.value !== undefined) {
                if (testUser.id == (cookie.value as unknown as number)) {
                    const authState = useState('auth', () => ({
                        user: {
                            id: testUser.id,
                            email: testUser.email,
                            password: testUser.password,
                        },
                        loggedIn: 'authenticated',
                        custom: testUser.custom,
                    }));
                }

            }
        }
    }

    /**
     * Function to check the signed In status of a user
     * @returns {string}
     */
    const status = useAuthStatus();

    /**
     * Function to make the user data accessible
     * @returns {UserObject}
     */
    const data = useAuthData();

    /**
     * Function to log a user out
     * Auth state is emptied and cookie is removed
     * @param {string} redirect
     * @returns {void}
     */
    const signOut = (redirect?: string) => {
        let auth = useState('auth');
        auth.value = undefined;
        let cookie = useCookie('auth');
        cookie.value = undefined;

        let redirectPath = redirect || '/';
        navigateTo(redirectPath);
    }

    // Return statement to make all auth functions available to the component
    return {
        signIn,
        signOut,
        status,
        data,
        cookieSignIn,
    }
}