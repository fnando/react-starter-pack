import {describe, it} from "mocha";
import {expect} from "chai";
import {shallow} from "enzyme";
import React from "react";

import MainHeader from "app/components/MainHeader";

describe("MainHeader", () => {
  it("renders title", () => {
    const component = shallow(<MainHeader title="Some Title" />);
    const title = component.find(".MainHeader > h1");

    expect(title).to.have.length(1);
    expect(title.text()).to.eq("Some Title");
  });
});
