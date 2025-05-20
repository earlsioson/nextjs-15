'use client'
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useRouter } from "next/navigation";

export default function CountrySelect() {
    const router = useRouter()
    const handleChange = (e: { target: { value: string; }; }) => {
        router.push(e.target.value)
    }
    return (
        <Box
            m={1}
        >
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Country Select</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={handleChange}
                >
                    <FormControlLabel value="Canada" control={<Radio />} label="Canada" />
                    <FormControlLabel value="Mexico" control={<Radio />} label="Mexico" />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}