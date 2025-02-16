import { Tab, Tabs } from "@mui/base";
import { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";
import FilterTabs from "./FilterTabs";

export default function FilterBar() {
  const [status, setStatus] = useState("ONLINE");
  const [gender, setGender] = useState("ALL");
  const [show, setShow] = useState(8);

  return (
    <div className="flex items-center gap-4 p-4 bg-light-lighter rounded-lg">
      {/* Show dropdown */}
      <FormControl variant="outlined" className="min-w-[120px]">
        <InputLabel id="show-label">Show</InputLabel>
        <Select
          labelId="show-label"
          value={show}
          onChange={(e) => setShow(e.target.value)}
          label="Show"
          sx={{
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        >
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={16}>16</MenuItem>
        </Select>
      </FormControl>

      {/* Status dropdown */}
      <FormControl variant="outlined" className="min-w-[120px]">
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          labelId="status-label"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Status"
          sx={{
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        >
          <MenuItem value="ONLINE">ONLINE</MenuItem>
          <MenuItem value="OFFLINE">OFFLINE</MenuItem>
        </Select>
      </FormControl>

      {/* Search bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search doctors by name or title"
        sx={{
          borderRadius: "8px",
          backgroundColor: "white",
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
      />

      {/* Gender filter buttons */}
     <FilterTabs/>
    </div>
  );
}
