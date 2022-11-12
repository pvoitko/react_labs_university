import React from 'react';
import {Controller} from "react-hook-form";
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";

export const Packing = ({control, fields, options}) => {
    return (
        <>
            {fields.map((item, i) =>
                <Grid container key={i}>
                    <Grid xs={3}>
                        <Controller
                            name={`packing[${i}].type`}
                            defaultValue=""
                            control={control}
                            render={({field}) => (
                                <FormControl fullWidth>
                                    <InputLabel id={`packingTypeLabel${i}`}>Вид пакування</InputLabel>
                                    <Select {...field} required labelId={`packingTypeLabel${i}`}>
                                        {options.map(option => <MenuItem key={option}
                                                                         value={option}>{option}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </Grid>
                    <Grid xs={3}>
                        <Controller
                            name={`characteristic[${i}].placeCount`}
                            control={control}
                            render={({field}) =>
                                <TextField required disabled
                                           {...field}
                                           label="Кількість"
                                           type="number"
                                />}
                        />
                    </Grid>
                </Grid>)}
        </>
    );
};