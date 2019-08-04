export class AuthService {
isAuth = false; // the user is disconnected by default
/**
 * SignIn() method allows the user to connect to the application
 *
 */
signIn() {
    /* Pour simuler un appel http (pour simuler plutot le temps que ça prend cette appel):
    On crée une méthode asynchrone en utilisant une Promise*/
    // Method needs to be async so we need to add a Promise instance
    return new Promise((resolve, reject) => {
        // Cette Promise va se résoudre (resolve) au bout de 2 sec grace à setTimeout(.... , 2000)
        setTimeout(
            () => {
                this.isAuth = true;
                resolve(true);
            }, 2000
            );
    }
    );
}
/**
 * SignOut() method permit the user to disconnect from the application
 * this method doesn't need to be asynchrone bcz we don't need to simulate the http call
 */
signOut() {
    this.isAuth = false;
}
}
