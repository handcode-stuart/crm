import React from "react";
import Widget from "../../Widget";
import WidgetRow from "../../WidgetRow";

const Dashboard = () => {
    return (
        <div>
            <h3>Dashboard</h3>
            <WidgetRow>
                <Widget />
                <Widget />
                <Widget />
                <Widget />
                <Widget />
                <Widget />
            </WidgetRow>
        </div>
    );
};

export default Dashboard;
