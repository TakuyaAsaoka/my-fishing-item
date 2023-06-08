const chai = require('chai');
const chaiHttp = require('chai-http');
const SERVER_URL = 'http://localhost:8080';
chai.use(chaiHttp);

describe('My Fishing Item API Server', () => {
  let request, expect, actual, expected;

  beforeEach(() => {
    request = chai.request(SERVER_URL);
    expect = chai.expect;
  });

  describe('GET /api/items', () => {
    it('should return array of data', (done) => {
      // Setup
      expected = true;
      // Exercise
      request.get('/api/items').end((err, res) => {
        actual = Array.isArray(res.body);

        // Assert
        expect(actual).to.deep.eql(expected);

        // Teardown
        done();
      });
    }).timeout(10 * 1000);
  });

  describe('POST /api/items', () => {
    it('should add new item', (done) => {
      // Setup
      const body = { name: 'new Item', quantity: 1, categoryId: 2 };
      request.get('/api/items').end((err, res) => {
        expected = res.body.length + 1;
        // Exercise
        request
          .post('/api/items')
          .send(body)
          .end((err, res) => {
            actual = res.body.length;

            // Assert
            expect(actual).to.deep.eql(expected);

            // Teardown
            done();
          });
      });
    });
  });

  describe('DELETE /api/items', () => {
    it('should delete items given id', (done) => {
      // Setup
      // Exercise
      request.get('/api/items').end((err, res) => {
        expected = res.body.length - 1;
        request
          .delete('/api/items')
          .send({ selectedItem: [expected + 1] })
          .end((err, res) => {
            actual = res.body.length;

            // Assert
            expect(res).to.have.status(200);
            expect(actual).to.deep.eql(expected);
            // Teardown
            done();
          });
      });
    });
  });
});
