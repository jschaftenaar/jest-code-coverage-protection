const app = require('./app');
const fs = require('fs')
jest.mock('fs');

fs.readFileSync.mockImplementation(() => {
  return JSON.stringify({total:{
    lines: {pct: 0},
    statements: {pct: 0},
    functions: {pct: 0},
    branches:{pct: 0},
  }});
});

it('It exists with 0', () => {
  process.argv = [];
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});

  app.run();
  expect(mockExit).toHaveBeenCalledWith(0);
});