import React from "react";
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Controller} from "react-hook-form";

export const Pallet = ({control, fields, append, remove, errors, options}) => {
    const addPlace = () => {
        append({
            palletType: "",
            announcedPrice: "",
            placeCount: ""
        })
    }

    return (
        <>
            {fields.map((item, i) =>
                <Grid container key={i}>
                    <Grid xs={3}>
                        <Controller
                            name={`characteristic[${i}].palletType`}
                            control={control}
                            render={({field}) => (
                                <FormControl fullWidth>
                                    <InputLabel id={`palletTypeLabel${i}`}>Тип палети</InputLabel>
                                    <Select {...field} required labelId={`palletTypeLabel${i}`}>
                                        {options.map(option => <MenuItem key={option}
                                                                         value={option}>{option}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </Grid>
                    <Grid xs={3}>
                        <Controller
                            name={`characteristic[${i}].announcedPrice`}
                            control={control}
                            render={({field}) =>
                                <TextField fullWidth error={errors?.characteristic?.[i]?.announcedPrice}
                                           {...field}
                                           label="Оголошена вартість"
                                />}
                        />
                        {errors?.characteristic?.[i]?.announcedPrice?.type === "typeError" &&
                            <p style={{color: "red"}}>Вкажіть число</p>}
                        {errors?.characteristic?.[i]?.announcedPrice?.type === "min" &&
                            <p style={{color: "red"}}>Вкажіть додатнє число</p>}
                    </Grid>
                    <Grid xs={3}>
                        <Controller
                            name={`characteristic[${i}].placeCount`}
                            control={control}
                            render={({field}) =>
                                <TextField required error={errors?.characteristic?.[i]?.placeCount}
                                           {...field}
                                           label="Кількість"
                                           type="number"
                                />}
                        />
                        {errors?.characteristic?.[i]?.placeCount?.type === "min" &&
                            <p style={{color: "red"}}>Вкажіть додатнє число</p>}
                    </Grid>
                    {i !== 0 && <Grid xs={3}>
                        <Button onClick={() => remove(i)}>Видалити</Button>
                    </Grid>}

                </Grid>)}
            <Button onClick={addPlace}>Додати місце</Button>
        </>
    );
};
