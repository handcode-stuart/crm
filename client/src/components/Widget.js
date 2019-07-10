import React from "react";
import { connect } from "react-redux";
import StyledWidget from "./styles/Widget";

const Widget = ({ job: { jobs } }) => {
    return (
        <StyledWidget>
            <div>Current active jobs</div>
            <div>{jobs.length}</div>
        </StyledWidget>
    );
};

const mapStateToProps = state => ({
    job: state.job,
});

export default connect(mapStateToProps)(Widget);
