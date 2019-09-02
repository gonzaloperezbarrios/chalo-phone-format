import React from "react";
import Phone from "../index";
import renderer from "react-test-renderer";

test("Phone basic snapshot", () => {
  const component = renderer.create(
   <Phone
      value="2151234455"
      handleChange={console.log}
      isFormatOK={true}
      format="(###) ###-####"
      mask="-"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
