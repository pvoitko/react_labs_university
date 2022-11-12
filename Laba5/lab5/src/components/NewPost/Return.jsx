import React from 'react';
import {Controller} from "react-hook-form";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const Return = ({control, errors, options}) => {
    return (
        <>
            <Controller
                name="returnType"
                id="returnType"
                defaultValue=""
                control={control}
                render={({field}) => (
                    <FormControl fullWidth>
                        <InputLabel id={"returnTypeLabel"}>Тип палети</InputLabel>
                        <Select {...field} labelId={"returnTypeLabel"}
                                error={errors?.returnType?.type === "required"}>
                            {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                        </Select>
                    </FormControl>
                )}
            />
            {errors?.returnType?.type === "required" && <p style={{color: "red"}}>Вкажіть тип</p>}
        </>
    );
};