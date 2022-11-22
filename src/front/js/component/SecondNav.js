import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";



const SecondNav = () => {
    const [value, setValue] = React.useState();
    let categories = <h2>hello</h2>
    let categories2 = <h2>world</h2>
    return (
        <div
        style={{
            // marginLeft: "40%",
        }}
        >
            <Paper square>
                <Tabs
                value={value}
                textColor="primary"
                indicatorColor="primary"
                centered
                variant="fullWidth"
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                >
                    <Tab label="Categories" />
                    <Tab label="Buget Buddy" />
                    <Tab label="Don't click me!" />
                </Tabs>
                
                {value == 0 ? categories : ""}
                {value == 2 ? categories2 : ""}
            </Paper>
       
        </div>
    )
}

export default SecondNav