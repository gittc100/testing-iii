// Test away!
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Controls from "./Controls.js";

describe("<Controls/>", () => {
//   describe("Button Check", () => {
//     it("Do the Buttons Exist", () => {
//       const { getByTestId, debug } = render(
//         <Controls closed={false} locked={false} />
//       );
//       debug();
//       const enBTN = getByTestId("entry-btn");
//     //   const exBTN = getByTestId("lock-btn");
//       fireEvent.click(enBTN);
//       expect(exBTN).toBeDefined();
//     });
//   });

  describe("Buttons Change Text to Reflect State", () => {
    it("Should Provide Correct Button Value", () => {
      const { getByTestId, rerender, debug } = render(
        <Controls closed={false} locked={false} />
      );
      // debug();
      const enBTN = getByTestId("entry-btn");
      const exBTN = getByTestId("lock-btn");
      fireEvent.click(enBTN);
      expect(enBTN).toHaveTextContent(/Close Gate/i);
      expect(exBTN).toHaveTextContent(/Lock Gate/i);

      rerender(<Controls closed={true} locked={false} />);
      fireEvent.click(enBTN);
      expect(enBTN).toHaveTextContent(/Open Gate/i);
      expect(exBTN).toHaveTextContent(/Lock Gate/i);

      rerender(<Controls closed={true} locked={true} />);
      fireEvent.click(exBTN);
      expect(enBTN).toHaveTextContent(/Open Gate/i);
      expect(exBTN).toHaveTextContent(/Unlock Gate/i);
    });
  });
  describe("Button Disability", () => {
    it("Should Provide Correct Disable Value", () => {
      const { getByTestId, rerender, debug } = render(
        <Controls closed={false} locked={false} />
      );
      //   debug();
      const enBTN = getByTestId("entry-btn");
      const exBTN = getByTestId("lock-btn");
      expect(exBTN).toBeDisabled;

      rerender(<Controls closed={true} locked={true} />);
      expect(enBTN).toBeDisabled;
    });
  });
});
