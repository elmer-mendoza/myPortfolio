import React from 'react';
import LoadingGif from "../../assets/gif/loading-arrow.gif"
import './loading.css'

export default function Loading() {
    return (
        <div className="loading">
            <h4>...data loading</h4>
            <img src={LoadingGif} alt="loading"  />
        </div>
        )
}
