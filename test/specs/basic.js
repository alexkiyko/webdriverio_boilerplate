import { expect } from 'chai';

describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('https://webdriver.io');
    const title = browser.getTitle();
    expect(title).equal('WebdriverIO · Next-gen browser automation test framework for Node.js');
  });

  it('should have the right header', () => {
    const header = $('//h2[@class="projectTitle"]');
    expect(header.getText()).equal('WEBDRIVER I/O');
  });

  it('should have the right description', () => {
    const description = $('//small[@class="tagline"]');
    expect(description.getText()).equal('Next-gen browser automation test framework for Node.js');
  });

  it('should click get started and verify header', function () {
    $('//a[contains(text(),"Get Started")]').click();
    expect($('//h1[@id="__docusaurus"]').getText()).eq('Getting Started');
  });
});
