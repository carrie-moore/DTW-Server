const mongoose = require('mongoose');

describe('Goals API', () => {
  beforeEach(() => mongoose.connection.dropDatabase());
});