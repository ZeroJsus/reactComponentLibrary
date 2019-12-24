import React from 'react';
import { render } from "react-dom";
// import ReactDemo from "../../src/index.js"; // 引入组件
import ReactDemo from "nebulacomponent"
import "nebulacomponent/lib/common.min.css";

const App = () => <ReactDemo />
render(<App />, document.getElementById("root"))