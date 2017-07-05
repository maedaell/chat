import firebase from 'firebase';

export class AutenticacaoService {

    private usuario = "";
    private senha = "";

    signup(email: string, senha: string) {

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

    get_usuario() {
      return this.usuario;
    }

    get_senha() {
      return this.senha;
    }

}
