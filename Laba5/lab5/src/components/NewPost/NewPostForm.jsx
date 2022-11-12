import React, {useEffect} from "react";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Checkbox, FormControlLabel, Grid, MenuItem, Select,} from "@mui/material";
import * as yup from "yup";
import {Pallet} from "./Pallet";
import {Parcel} from "./Parcel";
import {City} from "./City";
import {Packing} from "./Packing";
import {Lift} from "./Lift";
import {Return} from "./Return";

const startData = {
    characteristic: [{
        palletType: "",
        placeCount: "",
        announcedPrice: "",
        weight: "",
        length: "",
        width: "",
        height: ""
    }]
};

const schema = yup.object().shape({
    recipient: yup.string().required(),
    departure: yup.string().required(),
    deliveryType: yup.string().required(),
    isElevator: yup.boolean(),
    returnType: yup.string().when("isReturn", {
        is: true,
        then: yup.string().required()
    }),
    floor: yup.number().positive().when("isElevator", {
        is: true,
        then: yup.number().required()
    }),
    characteristic: yup.array().of(
        yup.object().shape({
            palletType: yup.string(),
            announcedPrice: yup.number().positive(),
            placeCount: yup.number().integer().positive(),
            weight: yup.number().positive(),
            length: yup.number().positive(),
            width: yup.number().positive(),
            height: yup.number().positive()
        })
    )
});

export const NewPostForm = ({
                                 cityOptions,
                                 palletTypeOptions,
                                 deliveryTypeOptions,
                                 returnTypeOptions,
                                 packingOptions
                             }) => {
    const {control, handleSubmit, watch, reset, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        shouldUnregister: true,
        defaultValues: {
            isPacking: false,
            isElevator: false,
            isReturn: false
        }
    });
    const {fields, append, remove} = useFieldArray({name: "characteristic", control});
    const deliveryType = watch("deliveryType");
    const isPacking = watch("isPacking");
    const isReturn = watch("isReturn");

    useEffect(() => {
        reset(startData);
    }, []);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Маршрут</p>
                <Grid container>

                    <Grid item xs={2}>
                        <City control={control} options={cityOptions} errors={errors} name="departure"
                              typeName="Місто відправник"/>
                    </Grid>
                    <Grid item xs={10}>
                        <City control={control} options={cityOptions} errors={errors} name="recipient"
                              typeName="Місто одержувач"/>
                    </Grid>
                </Grid>
                <div>
                    <p>Вид відправлення</p>
                    <Controller
                        name="deliveryType"
                        id="deliveryType"
                        defaultValue={deliveryTypeOptions[0]}
                        control={control}
                        render={({field}) => (
                            <Select {...field} error={errors.deliveryType?.type === "required"}>
                                {deliveryTypeOptions.map(option => <MenuItem key={option}
                                                                             value={option}>{option}</MenuItem>)}
                            </Select>
                        )}
                    />
                    {errors.deliveryType?.type === "required" && <p style={{color: "red"}}>Вкажіть тип</p>}
                </div>
                <div>
                    <p>Характеристика місць</p>
                    {deliveryType === "Палети" ?
                        <Pallet control={control} fields={fields} remove={remove} append={append}
                                errors={errors} options={palletTypeOptions}/>
                        :
                        <Parcel control={control} fields={fields} remove={remove} append={append}
                                errors={errors}/>
                    }
                </div>
                <Controller
                    name="isPacking"
                    control={control}
                    render={({field}) => <FormControlLabel {...field} control={<Checkbox/>}
                                                           label='Послуга "Пакування"'/>}
                />
                {isPacking && <Packing control={control} fields={fields} options={packingOptions}/>}
                <Lift control={control} errors={errors}/>
                <Grid container>
                    <Grid xs={3}>
                        <Controller
                            name="isReturn"
                            control={control}
                            render={({field}) => <FormControlLabel {...field} control={<Checkbox/>}
                                                                   label='Послуга "Зворотна доставка"'/>}
                        />
                    </Grid>
                </Grid>
                {isReturn && <Return control={control} errors={errors} options={returnTypeOptions}/>}
                <div>
                    <Button variant="contained" color="secondary" type="submit">Розрахувати вартість</Button>
                    <Button onClick={reset} variant="contained" color="inherit" >Очистити</Button>
                </div>
            </form>
        </div>
    );
};