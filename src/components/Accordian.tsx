import * as React from 'react';
import { styled } from '@mui/material/styles';
import { SvgComponent } from './image';
import { SvgComponent2 } from './image2';
import { SvgComponent3 } from './image3';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { SvgComponent4 } from './image4';
import { SvgComponent5 } from './image5';
import { SvgComponent6 } from './image6';
import { SvgComponent7 } from './image7';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({
  
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
  'rgb(22,22,24)'
   ,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="flex flex-row">
      <div className='w-6/12' >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header">
          <Typography className=''>
            <div className="font-bold text-2xl text-white">
            Contract Lifecycle Management
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-[rgb(22,22,24)]'>
          <Typography>
            <div className="flex flex-row">
              <div className="text-white w-6/12 text-xl">Easily create, review, edit, redline, approve, eSign and store contracts in one intuitive workflow. Collaborate with your team and negotiate with counterparties. Powered by AI.</div>
              {/* <div className="w-6/12">
                <SvgComponent/>
              </div> */}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography className=''>
            <div className="font-bold text-2xl text-white">
            Contract Lifecycle Management
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-[rgb(22,22,24)]'>
          <Typography>
            <div className="flex flex-row">
              <div className="text-white w-6/12 text-xl">Easily create, review, edit, redline, approve, eSign and store contracts in one intuitive workflow. Collaborate with your team and negotiate with counterparties. Powered by AI.</div>
              {/* <div className="w-6/12">
                <SvgComponent/>
              </div> */}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography className=''>
            <div className="font-bold text-2xl text-white">
            Contract Lifecycle Management
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-[rgb(22,22,24)]'>
          <Typography>
            <div className="flex flex-row">
              <div className="text-white w-6/12 text-xl">Easily create, review, edit, redline, approve, eSign and store contracts in one intuitive workflow. Collaborate with your team and negotiate with counterparties. Powered by AI.</div>
              {/* <div className="w-6/12">
                <SvgComponent/>
              </div> */}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
        <Typography className=''>
            <div className="font-bold text-2xl text-white">
            Contract Lifecycle Management
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-[rgb(22,22,24)]'>
          <Typography>
            <div className="flex flex-row">
              <div className="text-white w-6/12 text-xl">Easily create, review, edit, redline, approve, eSign and store contracts in one intuitive workflow. Collaborate with your team and negotiate with counterparties. Powered by AI.</div>
              {/* <div className="w-6/12">
                <SvgComponent/>
              </div> */}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
        <Typography className=''>
            <div className="font-bold text-2xl text-white">
            Contract Lifecycle Management
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-[rgb(22,22,24)]'>
          <Typography>
            <div className="flex flex-row">
              <div className="text-white w-6/12 text-xl">Easily create, review, edit, redline, approve, eSign and store contracts in one intuitive workflow. Collaborate with your team and negotiate with counterparties. Powered by AI.</div>
              {/* <div className="w-6/12">
                <SvgComponent/>
              </div> */}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
        <Typography className=''>
            <div className="font-bold text-2xl text-white">
            Contract Lifecycle Management
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-[rgb(22,22,24)]'>
          <Typography>
            <div className="flex flex-row">
              <div className="text-white w-6/12 text-xl">Easily create, review, edit, redline, approve, eSign and store contracts in one intuitive workflow. Collaborate with your team and negotiate with counterparties. Powered by AI.</div>
              {/* <div className="w-6/12">
                <SvgComponent/>
              </div> */}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
        <Typography className=''>
            <div className="font-bold text-2xl text-white">
            Contract Lifecycle Management
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-[rgb(22,22,24)]'>
          <Typography>
            <div className="flex flex-row">
              <div className="text-white w-6/12 text-xl">Easily create, review, edit, redline, approve, eSign and store contracts in one intuitive workflow. Collaborate with your team and negotiate with counterparties. Powered by AI.</div>
              {/* <div className="w-6/12">
                <SvgComponent/>
              </div> */}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <div className="w-6/12 ">
{expanded==='panel1'?<SvgComponent/>:expanded==='panel2'?<SvgComponent2/>:expanded==='panel3'?<SvgComponent3/>:expanded==='panel4'?<SvgComponent4/>:expanded==='panel5'?<SvgComponent5/>:expanded==='panel6'?<SvgComponent6/>:<SvgComponent7/>}
    </div>
    </div>
  );
}