import React, {FC} from "react";

import Clock from "components/Clock";
import "./App.css";

const App: FC = ({}) => {
    return (
        <div className="container">
            <Clock />
        </div>
    );
};

export default App;
