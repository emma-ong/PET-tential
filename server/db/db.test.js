const knex = require('knex')
const testConfig = require('./knexfile').test
const testDb = knex(testConfig)

const {getPets, addPet, getReviews, addReview} = require('./db')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('getPets()', () => {
  it('reads from the database of pets correctly', () => {
    return getPets(testDb)
    .then(res => {
      expect.assertions(2)
      expect(res).toHaveLength(2)
      expect(res[0].name).toBe('Snoop')
    })
  })

})

describe('addPet()', () => {
  it('Adds a new pet to the database correctly', () => {
    expect.assertions(2)
    const newPet =  {name: 'Bob', mobile: 444444444, description: "Test comment", img: 'bobb.jpg'};
     return addPet(newPet,testDb)
    .then(() => {
      return getPets(testDb)
    })
    .then((res) => {
      expect(res).toHaveLength(3)
      expect(res[2].name).toBe('Bob')
    })
    
  })

})

describe('getReviews()', () => {
  it('Retrieves reviews correctly', () => {
    expect.assertions(2)
    return getReviews(testDb)
      .then(res => {
        expect(res).toHaveLength(3)
        expect(res[0].post).toContain('Bubz')
      })
  })
})

describe('addReview()', () => {
  it('Adds a review correctly', () => {
    expect.assertions(3)
    const newReview = {name: 'Dora', post: 'Diego found a fur-ever home'}
    return addReview(newReview,testDb)
      .then(res => {
        expect(res[0]).toBe(4)
        return getReviews(testDb)
      })
      .then(res => {
        expect(res).toHaveLength(4)
        expect(res[3].post).toContain('Diego')
      })
  })
})