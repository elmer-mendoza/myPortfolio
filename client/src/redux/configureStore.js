'react-redux';
import {configureStore} from "@reduxjs/toolkit"
import sampleReducer from './sample/sample'
import secondSampleReducer from './secondSample/secondSample'

export default configureStore({
    reducer:{
        sampleReducer:sampleReducer,
        secondSampleReducer:secondSampleReducer
    }
})