import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import Label from '../src/components/Label';

describe("Label tests", function() {
  
  it("renders Label", function() {
    expect(shallow(<Label label="this is a label" />).find('label').length).toBe(1);
  });

})