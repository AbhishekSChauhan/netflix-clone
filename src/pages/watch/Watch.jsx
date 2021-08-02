import React from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import "./watch.scss"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <IoArrowBackSharp />
                Home
            </div>
            <video className="video" autoPlay progress controls
            src="https://www.youtube.com/watch?v=2fngvQS_PmQ" />
        </div>
    )
}
