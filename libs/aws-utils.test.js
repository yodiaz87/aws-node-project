const awsUtils = require('./aws-utils');

describe('add', () => {
  it('list objects correctly', async() => {
    const a = await awsUtils.listObjects('yk-bucket-2023', 'january/');
    expect(a.Contents.length).toBe(3)
  });
});