const request = require('supertest')
const server = require('../server')

const db = require('../db/db')

jest.mock('../db/db')

describe('GET /api/v1/pets/', () => {
  it('renders a list of pets correctly', () => {
    db.getPets.mockReturnValue(Promise.resolve([
      {"name": "doggo", "mobile": 123456789, "description": "looks like a potato", "img": "potato.png"}
    ]))
    return request(server)
      .get('/api/v1/pets/')
      .then(res => {
        expect(res.body).toHaveLength(1)
        expect(res.body[0].name).toBe('doggo')
      })
  })

  it('returns a 500 status error if there is a DB error', () => {
    expect.assertions(2)
    db.getPets.mockImplementation(() => {
      return Promise.reject(new Error('OhNoError'))
    })
    return request(server)
      .get("/api/v1/pets/")
      .then(res => {
        expect(res.text).toBe('OhNoError')
        expect(res.status).toBe(500)
      })
  })
})

