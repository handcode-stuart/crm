import React from "react";
import { shallow } from "enzyme";
import Spinner from "../Spinner";

describe("<Spinner />", () => {
    it("should render", () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.html()).toBe("<div><p>Loading...</p></div>");
    });
});
