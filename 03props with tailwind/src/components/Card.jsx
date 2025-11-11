import React from 'react'


function Card({username = "users", newObj}) {
    console.log(username);
    console.log((newObj.type, newObj.href));
    
    
    
    return (
        <>
            <div className='border-amber-300'>
                <div className='w-45 bg-blend-overlay'><img src="https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg" alt="sunflower"/>
                </div>
            </div>
        </>
    )
}

export default Card
