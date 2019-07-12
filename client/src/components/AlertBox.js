import React from "react";
import { connect } from "react-redux";
import StyledAlertBox from "./styles/AlertBox";

const AlertBox = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 && (
        <StyledAlertBox>
            {alerts.map(alert => (
                <li className={alert.alertType}>{alert.msg}</li>
            ))}
        </StyledAlertBox>
    );

const mapStateToProps = state => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(AlertBox);
