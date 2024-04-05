import type { UserObject } from '~/types/authTypes';

export default function () {
    const state = useState('auth');
    if ((state.value as UserObject) !== undefined) {
        let userData = (state.value as UserObject);
        return userData;
    }
    return {
        user: {},
        loggedIn: 'unauthenticated',
        custom: {},
    };
}