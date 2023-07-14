const test = require('tape');
const supertest = require('supertest');
const func = require('./validarZ30');
const app = require('./icmsSP');

test('Validar se a letra e Z', (t) => {
  t.assert(func.validarZ('Z'), "validacao se a letra e Z");
  t.end();
});

test('Validar se e 30%', (t) => {
    t.assert(func.validarnumero(10, 20) === 2, "validacao true 30%");
    //t.assert(func.validarnumero(10, 40) === false, "validacao false 30%");
    t.end();
  })

  test('teste api', (t) => {
    supertest(app)
    .get('/icms/100')
    .expect('Content-Type',/json/)
    .expect(200)
    .end((err, res) => {
        t.assert(res.body.icms === 18, 'icms')
        t.end()
    })
})