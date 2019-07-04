import React from "react";
import { shallow } from "enzyme";
import Spinner from "../layout/Spinner";

describe("<Spinner />", () => {
    it("should render", () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.contains("Loading...")).toEqual(true);
    });
});
