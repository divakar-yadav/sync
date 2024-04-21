import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import { CircularProgress } from '@mui/material';
import NumberInput from '../numberInput/numberInput'





export default function RecipeReviewCard({title, content, img}) {
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = React.useState(false);
  const [creationSuccesful, isCreationSuccesful] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    isCreationSuccesful(false)
  };

  const handleClose = () => {
    setOpen(false);
    isCreationSuccesful(true)
  };
  const handleLoader = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      isCreationSuccesful(true)
      setTimeout(() => {
        isCreationSuccesful(false)
        setTimeout(() => {
          handleClose()
        })
      },3000)
      // Hide the loader after 2 seconds
    }, 5000);
  };


  const minimumHours = [
    {
      value: 10,
      label: '10 hours',
    },
    {
      value: 20,
      label: '20 hours',
    },
    {
      value: 30,
      label: '30 hours',
    }
  ];

  const deviceType = [
    {
      value: 'Mobile',
      label: 'Mobile',
    },
    {
      value: 'Laptop',
      label: 'Laptop',
    },
    {
      value: 'Tablet',
      label: 'Tablet',
    }
  ];
  const countries  = [
    {"label": "Afghanistan", "value": "AF"}, 
    {"label": "land Islands", "value": "AX"}, 
    {"label": "Albania", "value": "AL"}, 
    {"label": "Algeria", "value": "DZ"}, 
    {"label": "American Samoa", "value": "AS"}, 
    {"label": "AndorrA", "value": "AD"}, 
    {"label": "Angola", "value": "AO"}, 
    {"label": "Anguilla", "value": "AI"}, 
    {"label": "Antarctica", "value": "AQ"}, 
    {"label": "Antigua and Barbuda", "value": "AG"}, 
    {"label": "Argentina", "value": "AR"}, 
    {"label": "Armenia", "value": "AM"}, 
    {"label": "Aruba", "value": "AW"}, 
    {"label": "Australia", "value": "AU"}, 
    {"label": "Austria", "value": "AT"}, 
    {"label": "Azerbaijan", "value": "AZ"}, 
    {"label": "Bahamas", "value": "BS"}, 
    {"label": "Bahrain", "value": "BH"}, 
    {"label": "Bangladesh", "value": "BD"}, 
    {"label": "Barbados", "value": "BB"}, 
    {"label": "Belarus", "value": "BY"}, 
    {"label": "Belgium", "value": "BE"}, 
    {"label": "Belize", "value": "BZ"}, 
    {"label": "Benin", "value": "BJ"}, 
    {"label": "Bermuda", "value": "BM"}, 
    {"label": "Bhutan", "value": "BT"}, 
    {"label": "Bolivia", "value": "BO"}, 
    {"label": "Bosnia and Herzegovina", "value": "BA"}, 
    {"label": "Botswana", "value": "BW"}, 
    {"label": "Bouvet Island", "value": "BV"}, 
    {"label": "Brazil", "value": "BR"}, 
    {"label": "British Indian Ocean Territory", "value": "IO"}, 
    {"label": "Brunei Darussalam", "value": "BN"}, 
    {"label": "Bulgaria", "value": "BG"}, 
    {"label": "Burkina Faso", "value": "BF"}, 
    {"label": "Burundi", "value": "BI"}, 
    {"label": "Cambodia", "value": "KH"}, 
    {"label": "Cameroon", "value": "CM"}, 
    {"label": "Canada", "value": "CA"}, 
    {"label": "Cape Verde", "value": "CV"}, 
    {"label": "Cayman Islands", "value": "KY"}, 
    {"label": "Central African Republic", "value": "CF"}, 
    {"label": "Chad", "value": "TD"}, 
    {"label": "Chile", "value": "CL"}, 
    {"label": "China", "value": "CN"}, 
    {"label": "Christmas Island", "value": "CX"}, 
    {"label": "Cocos (Keeling) Islands", "value": "CC"}, 
    {"label": "Colombia", "value": "CO"}, 
    {"label": "Comoros", "value": "KM"}, 
    {"label": "Congo", "value": "CG"}, 
    {"label": "Congo, The Democratic Republic of the", "value": "CD"}, 
    {"label": "Cook Islands", "value": "CK"}, 
    {"label": "Costa Rica", "value": "CR"}, 
    {"label": "Cote D Ivoire", "value": "CI"}, 
    {"label": "Croatia", "value": "HR"}, 
    {"label": "Cuba", "value": "CU"}, 
    {"label": "Cyprus", "value": "CY"}, 
    {"label": "Czech Republic", "value": "CZ"}, 
    {"label": "Denmark", "value": "DK"}, 
    {"label": "Djibouti", "value": "DJ"}, 
    {"label": "Dominica", "value": "DM"}, 
    {"label": "Dominican Republic", "value": "DO"}
  ]
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <Paper elevation={3}>

    <Card sx={{ maxWidth: 320 }} elevation={15}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="220"
        image= {img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign="start">
         {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ justifyContent: 'space-between' }}>
      <div>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </div>


{open ?     <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Create a Contribution Request to a Model"}
        </DialogTitle>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        p : 1
      }}
      Validate
      autoComplete="off"
    > 
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select Device Type"
          defaultValue="EUR"
          helperText=""
          variant="standard"
        >
          {deviceType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Please select your Country"
          defaultValue="EUR"
          helperText=""
          variant="standard"
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="You are an Organization or Individual ?"
          defaultValue="EUR"
          helperText=""
          variant="standard"
        >
          {['Organization','Individual'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="minimum-hours-available-in-month"
          select
          label="Minimum hours available in a month"
          defaultValue="EUR"
          helperText=" "
          variant="standard"
        >
          {minimumHours.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Available to contribute every day ?"
          defaultValue="EUR"
          helperText=""
          variant="standard"
        >
          {['Yes','No'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="standard-select-currency-native"
          select
          label="Willing to Take reward ?"
          defaultValue="EUR"
          helperText=""
          variant="standard"
        >
          {['Yes','No'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
    { creationSuccesful ?     <Alert severity="success">your contribution request created.</Alert> 
 : null}
        <DialogActions
        sx={{mr : 1.5}}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button
          variant='contained'
          onClick={
            ()=>{
                handleLoader()
            }}
        autoFocus>
            
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Create'}

          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment> : null}
        <Button style={{ borderRadius: '6px' }} variant="contained" endIcon={<CallMergeIcon />}  onClick={handleClickOpen}>
        Contribute
</Button>
      </CardActions>
    </Card>
    </Paper>
  );
}