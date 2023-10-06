import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contacts(){
    return(
        <div className="contacts">
            <div className="email-btn">
                <Button className="contacts-btn" variant="outlined" startIcon={<EmailIcon />}>
                    Email
                </Button>
            </div>
            <div className="linkedin-btn">
                <Button className="contacts-btn" variant="contained" startIcon={<LinkedInIcon />}>
                    LinkedIn
                </Button>
            </div>
            
        </div>
    );
}