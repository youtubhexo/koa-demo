// test/app.test.js
const request = require('supertest');
const app = require('../index'); // 确保路径正确

describe('GET /', () => {
  it('should respond with Hello World', async () => {
    const response = await request(app.callback()).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});
