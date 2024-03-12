import { Stack, TextField } from '@mui/material'

const Tietokentta = () => {
  return (
    <Stack direction="row" display="flex" gap={70} marginTop="10px">
        <TextField 
            label="Yrityksen nimi"
            variant="outlined"
            />
    
        <TextField 
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