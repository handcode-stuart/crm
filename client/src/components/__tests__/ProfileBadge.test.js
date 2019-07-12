import React from "react";
import { shallow } from "enzyme";
import ProfileBadge from "../ProfileBadge";

let user = {};
let wrapper;

beforeEach(() => {
    user.name = "Stuart Morris";
    wrapper = shallow(<ProfileBadge user={user} />);
});

describe("<ProfileBadge />", () => {
    it("renders", () => {
        expect(wrapper).toBeTruthy();
    });

    it("renders the user name with given props", () => {
        expect(wrapper.contains(user.name)).toBeTruthy();
    });

    it("the profile image alt is populated", () => {
        const imageAlt = wrapper.find("img").props().alt;
        expect(imageAlt).toBe(user.name);
    });
});
