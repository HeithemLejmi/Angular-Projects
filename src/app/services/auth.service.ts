export class AuthService {
isAuth = false; // the user is disconnected by default
signIn() {
    // Method needs to be async so we need to add a Promise instance
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                this.isAuth = true;
                resolve(true);
            }, 2000
            );
    }
    );
}
signOut() {
    this.isAuth = false;
}
}
