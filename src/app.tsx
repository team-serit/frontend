import React from "react";

import { Input } from "./components/input";
import { Select } from "./components/select";

function App() {
    return (
        <div className="container mx-auto px-4">
            <div className="">
                <div className="w-200 shadow sm:rounded-md sm:overflow-hidden">
                    <form onSubmit={() => {}}>
                        <Select label="From" />
                        <Select label="To" />
                        <Input label="Amount" placeholder="Enter amount" />
                        <Input label="You will recieve" />
                        <button type="submit">Connect wallet</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
