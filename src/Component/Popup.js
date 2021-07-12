import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//     dialogWrapper: {
//         padding: theme.spacing(2),
//         position: 'absolute',
//         top: theme.spacing(5)
//     },
//     dialogTitle: {
//         paddingRight: '0px'
//     }
// }))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    // const classes = useStyles();

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>Title goes here</div>
            </DialogTitle>
            <DialogContent dividers>
               <div>Content</div>
            </DialogContent>
        </Dialog>
    )
}
