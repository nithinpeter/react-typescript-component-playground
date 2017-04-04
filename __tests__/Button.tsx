import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from '../src/components/Button';

describe("Button tests", function() {
  
  it("renders Button", function() {
    expect(shallow(<Button label="Click me" />).find('button').length).toBe(1);
  });

})