import React, { useState } from 'react'
import { useTheme } from '@mui/material'
import { OutlinedInput,InputLabel,MenuItem,FormControl,ListItemText,Select,Checkbox} from '@mui/material'
import { blueGrey } from '@mui/material/colors';

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Web Development',
  'Mobile Application Development',
  'Cybersecurity',
  'Machine Learning',
  'Artificial Intelligence',
  'Data Science',
  'Devops',
  'Cloud Computing',
  'Blockchain',
  'IOT',
];



const MultipleSelectChip = () => {
    const theme = useTheme();
    const [insName, setInsName] = useState([]);
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setInsName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
        };
      
  return (
    <div>
    <FormControl sx={{ m: 1, width: 870,backgroundColor:blueGrey,}}>
      <InputLabel id="demo-multiple-checkbox-label">Technology Stack of your project</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={insName}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={insName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
  )
}

export default MultipleSelectChip