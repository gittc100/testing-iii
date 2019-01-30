// Test away
import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../display/Display.js';
import Controls from '../controls/Controls.js';

describe("Display Component", () => {
  it("Renders Without Crashing", () => {
    const div = document.createElement("div");
    // ReactDOM.render(element, container[, callback])
    ReactDOM.render(<Display />, div);
    // ReactDOM.unmountComponentAtNode(container)
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Controls Component", () => {
    it("Renders Without Crashing", () => {
      const div = document.createElement("div");
      // ReactDOM.render(element, container[, callback])
      ReactDOM.render(<Controls />, div);
      // ReactDOM.unmountComponentAtNode(container)
      ReactDOM.unmountComponentAtNode(div);
    });
  });