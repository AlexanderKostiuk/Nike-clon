import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';



const AccordionUi = () => {
  return (
    <div className=' z-10'>
      <Accordion sx={{
        /*                 opacity: 1,
                        zIndex: 10 */
      }}>
        <AccordionSummary
          id='pane1'
          aria-controls='panel1-content'
          expandIcon={<ArrowDropDownIcon></ArrowDropDownIcon>}
        >
          <h1 className="font-semibold text-xl">Categorias</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Link to='/Nike-clon'><h1 className='text-lg py-2'>Destacados</h1></Link>
          <Link to='/Nike-clon/category/Hombre'><h1 className='text-lg py-2'>Hombre</h1></Link>
          <Link to='/Nike-clon/category/Mujer'><h1 className='text-lg py-2'>Mujer</h1></Link>
          <Link to='/Nike-clon/category/Kids'><h1 className='text-lg py-2'>Niño/a</h1></Link>
          <Link to='/Nike-clon/category/Accesorios'><h1 className='text-lg py-2'>Accesorios</h1></Link>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionUi