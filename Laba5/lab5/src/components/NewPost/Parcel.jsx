import React from "react";
import {Button, Grid, TextField} from "@mui/material";
import {Controller} from "react-hook-form";

export const Parcel = ({control, fields, append, remove, errors}) => {
    const addPlace = () => {
        append({
            placeCount: "",
            announcedPrice: "",
            weight: "",
            length: "",
            width: "",
            height: ""
        })
    }

    return (
        <>
            {fields.map((item, i) =>
                <Grid container key={i}>
                    <Grid xs={1}>
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
                    <Grid xs={2}>
                        <Controller
                            name={`characteristic[${i}].announcedPrice`}
                            control={control}
                            render={({field}) =>
                                <TextField fullWidth required error={errors?.characteristic?.[i]?.announcedPrice}
                                           {...field}
                                           label="Оголошена вартість"
                                />}
                        />
                        {errors?.characteristic?.[i]?.announcedPrice?.type === "typeError" &&
                            <p style={{color: "red"}}>Вкажіть число</p>}
                        {errors?.characteristic?.[i]?.announcedPrice?.type === "min" &&
                            <p style={{color: "red"}}>Вкажіть додатнє число</p>}
                    </Grid>
                    <Grid xs={1}>
                        <Controller
                            name={`characteristic[${i}].weight`}
                            control={control}
                            render={({field}) =>
                                <TextField required error={errors?.characteristic?.[i]?.weight}
                                           {...field}
                                           label="Вага"
                                />}
                        />
                        {errors?.characteristic?.[i]?.weight?.type === "typeError" &&
                            <p style={{color: "red"}}>Вкажіть число</p>}
                        {errors?.characteristic?.[i]?.weight?.type === "min" &&
                            <p style={{color: "red"}}>Вкажіть додатнє число</p>}
                    </Grid>
                    <Grid xs={1}>
                        <Controller
                            name={`characteristic[${i}].length`}
                            control={control}
                            render={({field}) =>
                                <TextField required error={errors?.characteristic?.[i]?.length}
                                           {...field}
                                           label="Довжина"
                                />}
                        />
                        {errors?.characteristic?.[i]?.length?.type === "typeError" &&
                            <p style={{color: "red"}}>Вкажіть число</p>}
                        {errors?.characteristic?.[i]?.length?.type === "min" &&
                            <p style={{color: "red"}}>Вкажіть додатнє число</p>}
                    </Grid>
                    <Grid xs={1}>
                        <Controller
                            name={`characteristic[${i}].width`}
                            control={control}
                            render={({field}) =>
                                <TextField required error={errors?.characteristic?.[i]?.width}
                                           {...field}
                                           label="Ширина"
                                />}
                        />
                        {errors?.characteristic?.[i]?.width?.type === "typeError" &&
                            <p style={{color: "red"}}>Вкажіть число</p>}
                        {errors?.characteristic?.[i]?.width?.type === "min" &&
                            <p style={{color: "red"}}>Вкажіть додатнє число</p>}
                    </Grid>
                    <Grid xs={1}>
                        <Controller
                            name={`characteristic[${i}].height`}
                            control={control}
                            render={({field}) =>
                                <TextField required error={errors?.characteristic?.[i]?.height}
                                           {...field}
                                           label="Висота"
                                />}
                        />
                        {errors?.characteristic?.[i]?.height?.type === "typeError" &&
                            <p style={{color: "red"}}>Вкажіть число</p>}
                        {errors?.characteristic?.[i]?.height?.type === "min" &&
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
