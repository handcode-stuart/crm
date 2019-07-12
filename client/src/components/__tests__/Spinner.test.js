import React from "react";
import { shallow } from "enzyme";
import Spinner from "../Spinner";

describe("<Spinner />", () => {
    it("renders", () => {
        shallow(<Spinner />);
    });

    it("renders and matches the snapshot", () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("renders with fullpage prop and matches the snapshot", () => {
        const wrapper = shallow(<Spinner fullpage />);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
