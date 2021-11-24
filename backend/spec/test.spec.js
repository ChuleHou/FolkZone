require('es6-promise').polyfill();
require('isomorphic-fetch');
const url = path => `http://localhost:3000${path}`;
let cookie;

describe('hw6-backend test', () => {
    it('POST /register', (done) => {
        let user = {
            username: 'testUser',
            password: '123',
            email: 'test@test.com',
            dob: '20211111',
            zipcode: '12345'
        };
        fetch(url('/register'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => {
            return res.json()
        }).then(res => {
            expect(res.username).toEqual('testUser');
            expect(res.result).toEqual('success');
            done();
        });

    });

    it('POST /login ', (done) => {
        let loginUser = {
            username: 'testUser',
            password: '123'
        };
        fetch(url('/login'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginUser)
        }).then(res => {
            // Keep the cookie from the header
            // Need to get it before we convert it to json
            // When convert it to json, the header information is lost, just get the body
            // Therefore, get the cookie from headers
            cookie = res.headers.get('set-cookie');
            console.log("cookie is ", cookie);
            return res.json();
        }).then(res => {
            expect(res.username).toEqual('testUser');
            expect(res.result).toEqual('success');
            done();
        });
    });

    it('GET /headline ', (done) => {
        fetch(url('/headline'), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'cookie': cookie }
        }).then(res => {
            return res.json();
        }).then(res => {
            expect(res.username).toEqual('testUser');
            expect(res.headline).toEqual('default headline');
            done();
        });
    });

    it('GET /headline ', (done) => {
        fetch(url('/headline/testUser'), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'cookie': cookie }
        }).then(res => {
            return res.json();
        }).then(res => {
            expect(res.username).toEqual('testUser');
            expect(res.headline).toEqual('default headline');
            done();
        });
    });

    it('POST /article', (done) => {
        let article = {
            text: 'test'
        };
        fetch(url('/article'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'cookie': cookie },
            body: JSON.stringify(article)
        }).then(res => {
            return res.json()
        }).then(res => {
            let testArticle = res.articles;
            expect(testArticle.author).toEqual("testUser");
            expect(testArticle.text).toEqual("test");
            done();
        });
    });

    it('GET /articles ', (done) => {
        fetch(url('/articles'), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'cookie': cookie }
        }).then(res => {
            return res.json()
        }).then(res => {
            let testArticle = res.articles;
            expect(testArticle.length).toBeGreaterThan(0);
            done();
        });
    });

    it('GET /articles/id ', (done) => {
        fetch(url('/articles/2'), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'cookie': cookie }
        }).then(res => {
            return res.json()
        }).then(res => {
            let testArticle = res.articles;
            expect(testArticle.length).toBeGreaterThan(0);
            expect(testArticle[0].pid).toEqual(2)
            expect(testArticle[0].author).toEqual('testUser')
            done();
        });
    });

    it('PUT /logout ', (done) => {
        fetch(url('/logout'), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'cookie': cookie },
        }).then(res => res).then(res => {
            expect(res.status).toEqual(200);
            expect(res.statusText).toEqual('OK');
            done();
        });
    });
})
