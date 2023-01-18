import {FC} from "react";
import {Button, Container, Paper, TextField} from "@mui/material";
import {Controller, useForm} from "react-hook-form";

import css from './CustomForm.module.css';

interface IProps {
    buttonName: string,
    placeholder: string,
    action: (data: string) => void
}


const CustomForm: FC<IProps> = ({
                                    buttonName,
                                    placeholder,
                                    action,
                                }) => {


    const {control, handleSubmit, reset} = useForm();


    const onSubmit = handleSubmit((data) => {
        action(data.name)
        reset()
    })


    return (
        <Container
            component={Paper}
            maxWidth={'lg'}
            className={css.form_container}>
            <form onSubmit={onSubmit} className={css.custom_form}>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label={placeholder}
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            className={css.form_input}
                        />
                    )}
                    rules={{ required: 'Name required' }}
                />

                <Button className={css.form_btn} variant={'contained'} type={'submit'}>{buttonName}</Button>
            </form>
        </Container>
    )

}

export {CustomForm}