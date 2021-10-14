import { React, useState } from 'react';

const Photo = (props) => {
   const { photo } = props
   const [size, setsize] = useState("s");
   const [url, seturl] = useState(photo.thumbnailUrl);

   const handleClick = () => {
      switch(size){
         case "s":
            seturl(photo.url);
            setsize("l");
            break;
         case "l":
            seturl(photo.thumbnailUrl);
            setsize("s");
            break;
      }
   }

   return(
      <div>
         <div>
            {<img onClick={handleClick} src={url} title={photo.title}/>}
         </div>
         <div>ID - {photo.id}</div>
      </div>
   )
}

export default Photo