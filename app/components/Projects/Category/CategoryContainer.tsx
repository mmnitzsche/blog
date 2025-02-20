import React from 'react';

interface props {
    Category: any
}

export default function CategoryContainer(props: props) {
    return (
        <>
            <span
                key={props.Category}
                className="transition-all px-3 py-1 text-xs text-white rounded-full bg-secondary">
                {props.Category.replace(/-/g, " ")}
            </span>
        </>
    );
}