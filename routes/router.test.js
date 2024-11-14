const request = require('supertest');
const express = require('express');
const router = require('./index');

const app = express();
app.use(router);

describe('Test Endpoint', () => {
  test('GET / should return "Test route !" message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Test route' });
  });
});