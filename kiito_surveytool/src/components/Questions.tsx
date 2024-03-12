import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Questions() {
  return (
    <>
    <div style={{display: "flex", width: "80%", margin: "auto", alignItems: "center", fontFamily: "arial"}}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Curabitur euismod velit id est varius, eget aliquam velit condimentum.</p>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom' />
        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom' />
        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom' />
        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom' />
        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom' />
      </RadioGroup>
    </FormControl>
    </div>


    <div style={{display: "flex", width: "80%", margin: "auto", alignItems: "center", fontFamily: "arial", padding: "30px"}}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Curabitur euismod velit id est varius, eget aliquam velit condimentum.</p>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom' />
        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom' />
        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom' />
        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom' />
        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom' />
      </RadioGroup>
    </FormControl>
    </div>


    <div style={{display: "flex", width: "80%", margin: "auto", alignItems: "center", fontFamily: "arial"}}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Curabitur euismod velit id est varius, eget aliquam velit condimentum.</p>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom' />
        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom' />
        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom' />
        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom' />
        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom' />
      </RadioGroup>
    </FormControl>
    </div>
    </>
  );
}
