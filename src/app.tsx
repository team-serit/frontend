import React from "react";

import { Form } from "./components/form";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Select } from "./components/select";

function App() {
    return (
        <Form>
            <Select />
            <Select />
            <Input />
            <Input />
            <Button />
        </Form>
    );
}

export default App;
