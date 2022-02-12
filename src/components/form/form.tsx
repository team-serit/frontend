import React from "react";

export interface FormProps {}

export function Form(props: FormProps): JSX.Element {
    return <form className="shadow sm:rounded-md sm:overflow-hidden"></form>;
}
