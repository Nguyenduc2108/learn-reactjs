import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom/client"; // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>Welcome to the channel</h2>
            <p>Chúc mừng bạn đã tạo thành công ứng dụng React với Webpack!</p>
        </div>
    );
}

// React 17
// Render component App vào #root element
// ReactDOM.render(<App />, document.getElementById("root"));

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
