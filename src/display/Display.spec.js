// Test away!
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import Display from "./Display.js";

describe("<Display/>", () => {
  it("Defaults to Unlocked and Open", () => {
    const { getByTestId } = render(<Display />);
    expect(getByTestId("lock")).toHaveTextContent(/Unlocked/i);
    expect(getByTestId("entry")).toHaveTextContent(/Open/i);
  });
  it("Check for Correct Display Values", () => {
    const { getByTestId, rerender, debug } = render(
      <Display closed={false} locked={false} />
    );
    // debug();
    const enBTN = getByTestId("entry");
    const exBTN = getByTestId("lock");
    expect(enBTN).toHaveTextContent(/Open/i);
    expect(exBTN).toHaveTextContent(/Unlocked/i);

    rerender(<Display closed={true} locked={false} />);
    expect(enBTN).toHaveTextContent(/Closed/i);
    expect(exBTN).toHaveTextContent(/Unlocked/i);

    rerender(<Display closed={true} locked={true} />);
    expect(enBTN).toHaveTextContent(/Closed/i);
    expect(exBTN).toHaveTextContent(/Locked/i);
  });
  it("Check for Correct Class Values", () => {
    const { getByText, getByTestId, rerender, debug } = render(
      <Display closed={false} locked={false} />
    );
    // debug();
    const enBTN = getByTestId("entry");
    const exBTN = getByTestId("lock");
    expect(enBTN).toHaveClass('green-led');
    expect(exBTN).toHaveClass('green-led');

    rerender(<Display closed={true} locked={false} />);
    expect(enBTN).toHaveClass('red-led');
    expect(exBTN).toHaveClass('green-led');

    rerender(<Display closed={true} locked={true} />);
    expect(enBTN).toHaveClass('red-led');
    expect(exBTN).toHaveClass('red-led');
  });
});
