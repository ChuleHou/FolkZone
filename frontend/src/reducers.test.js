import {draftApp} from "./reducers";
import {
    log_in,
    log_out,
    set_dummy,
    set_error_reg,
    init_articles,
    add_articles,
    search_by,
    add_f,
    remove_f, update_user
} from "./actions";
import users_data from './users.json';
import posts_data from './posts.json';


let initial_state = {
    username: 'dummyUser',
    avatar:"",
    id: 20,
    password:'',
    email: '',
    tel: '',
    bday: '',
    zipCode: '',
    errorMSG: '',
    userStatus: 'initial status',
    following: [1],
    articles: [],
    articles_to_show: [],
    dummyUsers : []
}

describe('Validate Authentication',() => {
    let new_state_data = draftApp(initial_state, set_dummy(users_data))
    it('should initial the data', () => {
        expect(new_state_data).toEqual({
            username: 'dummyUser',
            avatar:"",
            id: 20,
            password:'',
            email: '',
            tel: '',
            bday: '',
            zipCode: '',
            errorMSG: '',
            userStatus: 'initial status',
            following: [1],
            articles: [],
            articles_to_show: [],
            dummyUsers : new_state_data.dummyUsers
        });
    });


    let login_state_data =draftApp(new_state_data, log_in(0))
    it("should log in a previously registered user (not new users, login state should be set)", () => {
        expect(login_state_data).toEqual({
            username: 'Bret',
            avatar:"https://joeschmoe.io/api/v1/random",
            id: 1,
            password:'Kulas Light',
            email: 'Sincere@april.biz',
            tel: '1-770-736-8031 x56442',
            bday: '1999-09-19',
            zipCode: '92998-3874',
            errorMSG: '',
            userStatus: 'Multi-layered client-server neural-net',
            following: [2,3,4],
            articles: [],
            articles_to_show: [],
            dummyUsers : new_state_data.dummyUsers
        });
    });

    it("should change the message",  () => {
        expect(draftApp(initial_state, set_error_reg('invalid user'))).toEqual({
            username: 'dummyUser',
            avatar:"",
            id: 20,
            password:'',
            email: '',
            tel: '',
            bday: '',
            zipCode: '',
            errorMSG: 'invalid user',
            userStatus: 'initial status',
            following: [1],
            articles: [],
            articles_to_show: [],
            dummyUsers : []
        });
    });

    it("should log out a user (login state should be cleared)", function () {
        expect(draftApp(initial_state,log_out(20))).toEqual({
            username: 'dummyUser',
            avatar:"",
            id: 20,
            password:'',
            email: '',
            tel: '',
            bday: '',
            zipCode: '',
            errorMSG: '',
            userStatus: 'initial status',
            following: [1],
            articles: [],
            articles_to_show: [],
            dummyUsers : []
        })

    });
});
let initial_state_posts = {

}
describe('Validate Article actions', () => {
    let new_state_data = draftApp(initial_state, set_dummy(users_data))
    let login_state_data =draftApp(new_state_data, log_in(0))
    let fetch_all_posts = draftApp(login_state_data, init_articles(posts_data))

    // fetc_all_posts_length = 100
    let fetc_all_posts_length = fetch_all_posts.articles_to_show.length


    // fetch_login_posts_length = 40
    let fetch_login_posts = draftApp(fetch_all_posts, add_articles(fetch_all_posts.articles_to_show))
    let fetch_login_posts_length = fetch_login_posts.articles.length

    it("should fetch all articles for current logged in user(posts state is set)", () => {
        expect(fetch_login_posts_length).toEqual(40);
    });

    let filter_search_posts = draftApp(fetch_login_posts, search_by('sunt'))
    it("should fetch subset of articles for current logged in user given search keyword (posts state is filtered)", () => {
        expect(filter_search_posts.articles.length).toEqual(0);
    });

    let add_posts = draftApp(fetch_login_posts, add_f(5))
    it("should add articles when adding a follower (posts state is larger )", () => {
        expect(add_posts.articles.length).toEqual(50);
    });

    let remove_posts = draftApp(fetch_login_posts, remove_f(3))
    it("should remove articles when removing a follower (posts state is smaller)", () => {
        expect(remove_posts.articles.length).toEqual(30)
    })
});

describe('Validate Profile actions', () => {
    let new_state_data = draftApp(initial_state, set_dummy(users_data))
    let login_state_data =draftApp(new_state_data, log_in(0))
    let username = {value: 'newname'}
    let password = {value: '12345'}
    let email = {value: 'a@g.com'}
    let phone = {value: '123-123-1234'}
    let birthday = {value: '1999-09-19'}
    let zipcode = {value: '11111'}
    let update_new_info = {
        username: username,
        password:password,
        email: email,
        tel:phone ,
        bday: birthday,
        zipCode: zipcode,
    }
    let fetch_new_info = draftApp(login_state_data, update_user(update_new_info))
    it("should fetch the logged in user's profile username", function () {
        expect(fetch_new_info.username).toEqual('newname');
        expect(fetch_new_info.password).toEqual('12345');
        expect(fetch_new_info.email).toEqual('a@g.com');
        expect(fetch_new_info.tel).toEqual('123-123-1234');
        expect(fetch_new_info.bday).toEqual('1999-09-19');
        expect(fetch_new_info.zipCode).toEqual('11111')
    });
});