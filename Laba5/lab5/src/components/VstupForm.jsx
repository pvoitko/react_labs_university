import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";


export default function VstupForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, topic, message);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const isEmailValid = () => {
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        return regex.test(email) || email === "";
    }
    const isTopicValid = () => {
        return topic.length > 1 || topic === "";
    }

    return (
        <Box>
            <Typography variant="h4" align={'left'}>Vstup Form</Typography>
            <form onSubmit={handleFormSubmit}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
                    <TextField label={"Name"} type={"text"}
                               value={name} onChange={handleNameChange} sx={{marginY: 3, width: 700}}/>
                    <TextField label={"Email"} type={"email"} required
                               error={!isEmailValid()} helperText={!isEmailValid() ? "Invalid email" : ""}
                               value={email} onChange={handleEmailChange} sx={{marginY: 3, width: 700}}/>
                    <TextField label={"Topic"}
                               required error={!isTopicValid()}
                               helperText={!isTopicValid() ? "The message must be longer than 1 characters" : ""}
                               type={"text"} value={topic} onChange={handleTopicChange} sx={{marginY: 3, width: 700}}/>
                    <TextField label={"Message"} type={"textarea"}
                               value={message} onChange={handleMessageChange} sx={{marginY: 3, width: 700}}/>

                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 700}}>
                        <Button variant="contained" type={"submit"} sx={{marginY: 3}}>GO</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}