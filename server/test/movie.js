const {expect} = require('chai')
const request = require('supertest')

const app = require('../app')

describe('Get Movie', ()=>{
    it('Get All Movie', (done)=>{
        request(app).get('/api/v1/movie').then((res)=>{
            const body = res.body
            expect(body).to.be.a('Array', 'No Data')
            expect(body.length).to.be.equal(10, 'Data Corrupt')
            body.map(data=>{
                expect(data).to.contain.all.keys('title', 'imdb_title_id', 'avg_vote', 'genre', 'imageURL')
            })
            done()
        }).catch((err)=>done(err))
    })
    it('Get 1 Movie', (done)=>{
        request(app).get('/api/v1/movie/tt10612148').then((res)=>{
            const body = res.body
            expect(body).to.be.a('object', 'Wrong Object')
            expect(body).to.contain.all.keys('title', 'imdb_title_id', 'avg_vote', 'genre', 'imageURL')
            done()
        }).catch((err)=>done(err))
    })
})