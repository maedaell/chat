import firebase from 'firebase';

export class AutenticacaoService {

    public usuario: string = "";
    public senha: string = "";

    signup(email: string, senha: string) {

        this.usuario = email;
        this.senha = senha;
        return firebase.auth().createUserWithEmailAndPassword(email, senha);

    }

    signin(email: string, senha: string) {

        this.usuario = email;
        this.senha = senha;
        return firebase.auth().signInWithEmailAndPassword(email, senha);

    }

    logout() {
        firebase.auth().signOut();
    }

}
