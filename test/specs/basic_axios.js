import { expect } from 'chai';
import axios from 'axios';

describe('webdriver.io api', () => {
  it('should get success response',async () => {
    const response = await axios({
      method: 'get',
      url: 'https://webdriver.io',
    })
      .then(res => res)
      .catch(err => err);
    expect(response.status).equal(200);
  });
});
