import type { UserObject } from '~/types/authTypes';

export default function () {
    const state = useState('auth');
    if ((state.value as UserObject) !== undefined) {
        return (state.value as UserObject).loggedIn;
    }

    return 'unauthenticated';
}