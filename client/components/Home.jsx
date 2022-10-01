import * as React from 'react'
import { useState } from 'react'

import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Divider, Icon } from '@mui/material'

function Home() {
  const [age, setAge] = useState('')
  const [toggle, setToggle] = useState(false)
  const [day, setDay] = useState(false)

  const handleChange = (event) => {
    setAge(event.target.value)
    setToggle(true)

  }

  return (
    <>
      <section>
        <div>
          <h1>Finance For Kids</h1>
          <p>
            Welcome to Finance For Kids. A platform designed to equip kids with
            the skills and confidence to talk money and grow their skills and
            knowledge of all things business and finance from younger ages. Lets
            get kids talking about money and setting them up for a more
            successful earning and spending career. Select Your targeted Age and
            Lets Get Started!
          </p>
        </div>
      </section>
      <br></br>
      <Box sx={{ width: 120 }}>
        <FormControl sx={{ width: 120 }}>
          <InputLabel id="simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={5}>5-10</MenuItem>
            <Divider/>
            <MenuItem value={10}>10-13</MenuItem>
            <Divider/>
            <MenuItem value={15}>13-18</MenuItem>
            <Divider/>
            <MenuItem value={20}>18+</MenuItem>
          </Select>
        </FormControl>
        <div>
          {!toggle && (
            <Link to="/">
              <Button variant="contained" disabled>
                Lets Get Started
              </Button>
            </Link>
          )}
          {toggle && (
            <Link to="/accounts">
              <Button variant="contained" color = "success">Lets Get Started</Button>
            </Link>
          )}
        </div>
      </Box>
    </>
  )
}

export default Home
