export default class UserModel{

    constructor(name, email, password, type, id){
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.id = id;
    }

    static signUp(name, email, password, type){
        const user = new UserModel(name,email, password, type);
        user.id = User.length +1;
        User.push(user);
        return user;
    }

    static signIn(email, password){
        const result = User.find(u=>u.email == email && u.password == password);
        return result;
    }

    static getAll(){
        return User;
    }

    static getUserById(id){
        return User.find(u=>u.id == id);
    }

}

let  User = [{
    id: 1,
    name: 'Seller',
    email: 'seller@example.com',
    password: 'password123',
    type: 'Seller'
},
{
    id: 2,
    name: 'customer',
    email: 'customer@example.com',
    password: 'password123',
    type: 'Seller'
}

]