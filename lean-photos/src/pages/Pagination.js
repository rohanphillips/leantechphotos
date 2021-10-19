import React from 'react'
import NumericInput from 'react-numeric-input';

const Pagination = (props) => {
   const { imagesPerPage, setImagesPerPage } = props;
   return (
      <div>
        <div>Use Pagination</div>
        <div>
           <div>Images Per Page</div>
           <div>
            <NumericInput
               step={1}
               precision={0}
               value={imagesPerPage}
               min={1}
               max={5}
               onChange={setImagesPerPage}
            />
         </div>
        </div>
        <div>

        </div>
         
      </div>
   )
}

export default Pagination