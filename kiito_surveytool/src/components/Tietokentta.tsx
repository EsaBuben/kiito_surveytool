import { Stack, TextField } from '@mui/material'

const Tietokentta = (props : any) => {
  const handleChange = (e: any) => {
    props.setName(e.target.value);
    e.preventDefault();
  }

  return (
    <Stack component="form" direction="row" display="flex" gap={70} marginTop="10px" noValidate autoComplete="off">
        <TextField
            fullWidth
            label="Yrityksen nimi"
            variant="outlined"
            defaultValue={props.name}
            //save the value to the state
            onChange={(e) => (handleChange(e))}
            key = "name"
            
            />
    
        <TextField 
            sx={{ width: '50%' }}
            label="Päivämäärä"
            variant="outlined"
            defaultValue={date()}
            />
    
    </Stack>
  )
}

function date() {
  let today : any = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = dd + '.' + mm + '.' + yyyy;
  return today;
}

export default Tietokentta