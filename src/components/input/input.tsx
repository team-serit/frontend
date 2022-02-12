import React from "react";

export interface InputProps {
    label?: string;
    placeholder?: string;
    onChange?: () => void;
}

export function Input(props: InputProps): JSX.Element {
    const { label, placeholder, onChange } = props;

    return (
        <label className="block text-sm font-medium text-gray-700">
            {label}
            <input
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder={placeholder}
                onChange={onChange}
            />
        </label>
    );
}
