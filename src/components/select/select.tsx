import React, { useState } from "react";

export interface SelectProps {
    label: string;
}

export function Select(props: SelectProps): JSX.Element {
    const { label } = props;

    const [value, setValue] = useState();

    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1 relative">
                <button
                    onClick={handleOpen}
                    className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <span className="flex items-center">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                            className="flex-shrink-0 h-6 w-6 rounded-full"
                        />
                        <span className="ml-3 block truncate"> Tom Cook </span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></span>
                </button>

                {isOpened && (
                    <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                            <div className="flex items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    className="flex-shrink-0 h-6 w-6 rounded-full"
                                />
                                <span className="font-normal ml-3 block truncate">
                                    {" "}
                                    Wade Cooper{" "}
                                </span>
                            </div>

                            <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"></span>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );

    function handleOpen(e: React.MouseEvent): void {
        e.preventDefault();
        console.log("open");
        setIsOpened(!isOpened);
    }
}
