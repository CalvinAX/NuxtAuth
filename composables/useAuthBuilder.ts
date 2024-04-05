export default async function(customKey: string, customValue: any) {
    const currentAuthState = useState('auth');
    if (!customKey || !customValue) {
        throw new Error('Either key or value is missing/undefined!');
    }
    let newAuthState: any = currentAuthState;
    newAuthState.value.custom[customKey] = customValue;
}