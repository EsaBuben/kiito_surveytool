import { Stack, TextField } from '@mui/material'

const FrontInput = (props : any) => {
  const handleChange = (e: any) => {
    props.setName(e.target.value);
    e.preventDefault();
  }

    const dateHandleChange = (e: any) => {
      props.setDate(e.target.value);
      e.preventDefault();
    }

  return (
    <Stack component="form" direction="row" display="flex" sx={{gap: {xs: 1, sm: 15, md: 45, lg: 70}}} marginTop="10px" noValidate autoComplete="off">
        <TextField
            fullWidth
            label={props.localData.napit.yrityksenNimi}
            variant="outlined"
            defaultValue={props.name}
            //save the value to the state
            onChange={(e) => (handleChange(e))}
            key = "name"
            
            />
    
        <TextField 
            sx={{ width: '50%' }}
            label={props.localData.napit.paivamaara}
            variant="outlined"
            defaultValue={props.date}
            onChange={(e) => (dateHandleChange(e))}
            key = "date"
            />
    
    </Stack>
  )
}

export function dateCalc() {
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

export default FrontInput