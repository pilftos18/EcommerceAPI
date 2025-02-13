export default class UserModel{

    constructor(name, email, password, type, id){
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.id = id;
    }

    static Signup(name, email, password, type){
        const user = new UserModel(name,email, password, type);
        user.id = User.length +1;
        User.push(user);
        return user;
    }

    static Signin(email, password){
        const result = User.find(u=>u.email == email && u.password == password);
        return result;
    }

}

const User = [{
    id: 1,
    name: 'Seller',
    email: 'seller@example.com',
    password: 'password123',
    type: 'Seller'
}]