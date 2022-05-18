/**
 * {
 *  notes:[],
 *  active: null |
 *  active: {
 *      id: <FIREBASE ID>
 *      title:'',
 *      body: '',
 *      imageUrl:'',
 *      date: <DATE>
 *       }
 * }
 */

const initialState= {
    notes:[],
    active: null
}

export const notesReducer = (state=initialState, action)=>{
    switch (action.type) {
       
    
        default:
            return state;
    }

}