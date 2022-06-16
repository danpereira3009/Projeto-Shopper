import React from "react"

export default (props) => {
    return (
        <button className="
            rounded-md 
            bg-gray-400
            font-bold
            w-20
            h-8
            self-center
            text-sm
            hover:cursor-pointer 
            hover:scale-105
            hover:shadow-lg
            active:scale-90
            ml-2" onClick={props.click}>
                {props.label}
        </button>
    )
}





