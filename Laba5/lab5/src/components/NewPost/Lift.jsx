import React from 'react';
import {Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import {Controller} from "react-hook-form";

export const Lift = ({control, errors}) => {
    return (
        <Grid container>
            <Grid xs={3}>
                <p style={{fontSize: 18}}>Послуга "Підйом на поверх"</p>
            </Grid>
            <Grid xs={2}>
                <Controller
                    name="floor"
                    control={control}
                    render={({field}) =>
                        <TextField error={errors.floor?.type != null}
                                   {...field}
                                   label="Кількість поверхів"
                                   type="number"
                        />}
                />
                {errors.floor?.type === "required" &&
                    <p style={{color: "red"}}>Вкажіть поверх</p>}
                {errors.floor?.type === "min" &&
                    <p style={{color: "red"}}>Вкажіть додатнє число</p>}
            </Grid>
            <Grid xs={2}>
                <Controller
                    name="isElevator"
                    defaultValue=""
                    control={control}
                    render={({field}) => <FormControlLabel {...field} control={<Checkbox/>}
                                                           label='Ліфт'/>}
                />
            </Grid>
        </Grid>
    );
};