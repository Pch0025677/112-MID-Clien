import React, {useContext, useReducer, useEffect } from 'react';
import DemoReducer_xx from './DemoReducer_xx';
import { supabase } from '../db/clientSupabse';


const initialState = {
    pName: 'Kay_Yang',
    pId: '210410543',
    blogs:[],
    blogs2: []
}

const DemoContext_xx = React.createContext();

const DemoProvider_xx = ({children}) => {
    const [ state, dispatch] = useReducer(DemoReducer_xx, initialState);

    const fetchBlogDataFromSupabase = async () => {
          try {
              
          let { data, error } = await supabase.from('card_xx').select('*')
      
            console.log("data", data);
            dispatch({ type: 'GET_BLOGS_SUPABASE_SUPABASE_SUCCESS', payload: data});
            // setData(data);
          } catch (error) {
            console.log(error);
          }
        }
      
        useEffect(() => {
          fetchBlogDataFromSupabase();
        }, []);

    return(
        <DemoContext_xx.Provider value={{...state}}>
            {children}
        </DemoContext_xx.Provider>
    )
}

const useDemoContext_xx = () => {
    return useContext(DemoContext_xx);
}

export { DemoProvider_xx, useDemoContext_xx }