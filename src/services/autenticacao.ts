import firebase from 'firebase';

export class AutenticacaoService {

    public usuario: string = "";

    signup(email: string, senha: string) {

        this.usuario = email;
        return firebase.auth().createUserWithEmailAndPassword(email, senha);

    }

    signin(email: string, senha: string) {

        this.usuario = email;
        return firebase.auth().signInWithEmailAndPassword(email, senha);

    }

    logout() {
        firebase.auth().signOut();
    }

}
