/**
 * Created by hesk on 16年8月22日.
 */
const chai = require('chai');
const cpdf = require('../index');
const fs = require('fs');
const mocha = require('mocha');
const path = require('path');
const Q = require('q');

const expect = chai.expect;

const testSR = path.resolve('./test/einstein-sr.pdf');
const testGR = path.resolve('./test/einstein-gr.pdf');
const testCHi = path.resolve('./test/cm0710-translate-c.pdf');

cpdf.listBookmarks(testCHi)
  .then((print)=> {
    expect(print).to.greaterThan.length(0);
    console("outline", print);
  })
;

