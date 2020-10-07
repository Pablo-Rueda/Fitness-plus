import React from 'react';
import Tasks from "./SettingsSection/Tasks";
import ClockSettings from "./SettingsSection/ClockSettings";

const Settings = () => {
    return  (
        <div className="tasksSection">
            <div className="vnav-content container flex-col">
                <div className="center card-list">
                    <div className="title">
                        <h1>TIME</h1>
                        <h2> Please, set below your exercises time </h2>
                    </div>
                        <ClockSettings />
                    <div className="title">
                        <h1>EXERCISES</h1>
                        <h2> Please, input here the exercises you would like to realise</h2>
                    </div>
                        <Tasks /> 
                </div>
            </div>
        </div>
    );
}
 
export default Settings;