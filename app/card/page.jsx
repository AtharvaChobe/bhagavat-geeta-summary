import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// bg-gradient-to-t from-amber-200 via-orange-300 to-orange-400
export default function AccordionExpandDefault({ item }) {
    return (
        <div className='border rounded-md p-4 shadow-md bg-gradient-to-t from-amber-200 via-orange-300 to-orange-400'>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    
                >
                    <Typography> <span className='text-red-500'>{item.id}</span> : <span className='font-bold'>{item.name_meaning}</span> ({item.name})</Typography>
                </AccordionSummary>


                <AccordionDetails>
                    <Typography>
                        {item.slug}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* hindi */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content-hindi"
                    
                >
                    <Typography>Hindi Summary</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {item.chapter_summary_hindi}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* english */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content-english"
                    
                >
                    <Typography>English Summary</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {item.chapter_summary}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}