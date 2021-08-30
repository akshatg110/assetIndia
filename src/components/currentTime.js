import React from 'react'

function CurrentTime() {
    return (
        <div style={{backgroundColor:'#99CC66',height:'30px',flexDirection:'row',display:'flex',paddingTop:'10px',paddingLeft:'50px'}}>
            {new Date().toDateString()}
        </div>
    )
}

export default CurrentTime
