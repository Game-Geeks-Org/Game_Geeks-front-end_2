import React from 'react'




function GameCards(props) {
    const {name1, name2, imgUrl, id} = props.item
    return(
        <div>         
            <div key={id}>     
            <img className=' rounded-[19px] border-BtnColor border-[6px] mb-7 w-full lg:w-auto' src={imgUrl} alt='ss' />
                <p className='text-4xl text-white'>{name1}<span className='text-BtnColor text-4xl '>{name2}</span></p>
             </div>
        </div>
    )

    }
export default GameCards