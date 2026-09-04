const request = require('supertest');
const app = require('./app');

describe('API endpoints', () => {
test('GET / returns message', async () => {
const response = await request(app).get('/');
expect(response.status).toBe(200);
expect(response.body.message).toBe('Hello CICD!');
});

test('GET /health returns healthy status', async () => {
const response = await request(app).get('/health');
expect(response.status).toBe(200);
expect(response.body.status).toBe('healthy');
});
});
