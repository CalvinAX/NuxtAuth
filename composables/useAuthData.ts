import type { UserObject } from '~/types/authTypes';

export default function () {
    const state = useState('auth');
    if ((state.value as UserObject) !== undefined) {
        let userData = (state.value as UserObject);
        let user: UserObject = {
            user: {
                id: userData.user.id,
                email: userData.user.email,
                password: userData.user.password,
            },
            loggedIn: userData.loggedIn,
            custom: userData.custom,
        }
        return user;
    }
    return {
        user: {},
        loggedIn: 'unauthenticated',
    };
}