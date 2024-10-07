import { useState } from 'react'
import classes from './BooksGrid.module.css'
export default function FilterBooks({genres, setPickedGenre}){
    console.log(genres);
    
    const [isClicked, setIsClicked] = useState(false)
    return <div className={classes.filter_section}>
        <button type='button' onClick={()=>setIsClicked(prev=>!prev)}>Genres</button>
        {isClicked&&(
            <ul>
            {Array.from(genres).map(genre=><li onClick={()=>setPickedGenre(genre)}>{genre}</li>)}

            </ul>
            )}
    </div>
}