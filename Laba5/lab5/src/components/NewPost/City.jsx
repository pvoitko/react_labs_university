import React from "react";
import {Controller} from "react-hook-form";
import {MenuItem, Select} from "@mui/material";

export const City = ({control, options, errors, name, typeName}) => {
    return (
        <>
            <p>{typeName}</p>
            <Controller
                name={name}
                id={name}
                defaultValue=""
                control={control}
                render={({field}) => (
                    <Select {...field} error={errors?.[name]?.type === "required"}>
                        {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                    </Select>
                )}
            />
            {errors?.[name]?.type === "required" && <p style={{color: "red"}}>Вкажіть місто</p>}
        </>
    );
};