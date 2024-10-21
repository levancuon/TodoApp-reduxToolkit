import './App.css';
import Filters from "./components/Filters";
import {Divider} from "antd";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div
            style={{
                width: 500,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: 20,
                boxShadow: '0 0 10px 4px #bfbfbf',
                borderRadius: 5,
                height: '90vh',
            }}
        >
            <h2 style={{textAlign: "center"}}> TODO APP with REDUX</h2>
            <Filters/>
            <Divider/>
            <TodoList/>
        </div>
    );
}

export default App;
