import {createSlice} from '@reduxjs/toolkit';
//import {useSelector} from 'react-redux';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState:{
        topics: {},
    },
    actions: {
        addTopic: (state, action) => 
        {state.topics.push({[action.payload.id]: action.payload});
            state.topics[action.payload.id].quizIds = []; 
            console.log(state.topics[action.payload.id]);
        }
    },
})


