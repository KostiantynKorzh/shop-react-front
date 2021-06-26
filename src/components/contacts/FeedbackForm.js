import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import FeedbackService from "../../services/FeedbackService";

const FeedbackForm = () => {

    const [feedback, setFeedback] = useState({
        subject: '',
        content: ''
    });

    return (
        <>
            <form>
                <div>
                    <TextField
                        label={"Subject"}
                        value={feedback.subject}
                        onChange={e => setFeedback({...feedback, subject: e.target.value})}>
                    </TextField>
                </div>
                <div>
                    <TextField
                        label={"Content"}
                        value={feedback.content}
                        fullWidth={true}
                        multiline
                        onChange={e => setFeedback({...feedback, content: e.target.value})}>
                    </TextField>
                </div>
                <Button variant="contained" color="primary"
                        onClick={() => {
                            FeedbackService.createFeedback(feedback.subject, feedback.content)
                                .then(() => alert('successfully added your feedback'))
                            setFeedback({subject: '', content: ''})
                        }}>
                    Submit
                </Button>
            </form>
        </>
    );
};

export default FeedbackForm;