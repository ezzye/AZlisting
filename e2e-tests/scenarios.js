'use strict';


describe('listing page',function() {


  //initally loads page for letter A page 1



  it('load page 1 for A initally',function() {
    browser.get('http://localhost:8000/app');
    var pageLetter=element(by.id('StartingLetter'));
    var pageNumber=element(by.id('PageNumber'));
    expect(pageLetter.getText()).toEqual('Programmes Starting with: A');
    expect(pageNumber.getText()).toEqual('Page: 1');
    expect(browser.getTitle()).toEqual('A-Z Listing Web Page');

  });

  //listing first page of a letter - using API for letter endpoint


  //listing for all pages of a letter - using API for page number



});