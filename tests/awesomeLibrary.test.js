import assert from "assert";

import { addTwoNumbers } from "./../awesomeLibrary.js";

describe("Testing 'awesomeLibrary'", function () {
  describe("addTwoNumbers", function () {
    it("should return 3", function () {
      assert.equal(addTwoNumbers(1, 2), 3);
    });

    it("should return -5", function () {
      assert.equal(addTwoNumbers(-1, -4), -5);
    });

    it("should return 0", function () {
      assert.equal(addTwoNumbers(-1, 1), 0);
    });
  });
});
