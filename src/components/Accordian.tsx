import * as React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { styled } from "@mui/material/styles";
import { SvgComponent } from "./image";
import { SvgComponent2 } from "./image2";
import { SvgComponent3 } from "./image3";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { SvgComponent4 } from "./image4";
import { SvgComponent5 } from "./image5";
import { SvgComponent6 } from "./image6";
import { SvgComponent7 } from "./image7";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem', color: 'white' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgb(22,22,24)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="flex flex-row">
      <div className="sm:w-6/12 w-full">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className="">
              <div className={`sm:font-bold sm:text-2xl text-xl ${expanded==='panel1'?"text-white":"text-white/50"} `}>
                Contract Lifecycle Management
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[rgb(22,22,24)]">
            <Typography>
              <div className="flex flex-col">
                <div className="text-white w-10/12 sm:text-xl">
                  Easily create, review, edit, redline, approve, eSign and store
                  contracts in one intuitive workflow. Collaborate with your
                  team and negotiate with counterparties. Powered by AI.
                </div>
             <div className="text-yellow-400 text-md flex">
          learn more about  Contract Lifecycle Management
          <div className="hover:pl-5 duration-200">
          <ArrowForwardIcon/>
          </div>
             </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
       
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="">
              <div className={`sm:font-bold sm:text-2xl text-xl ${expanded==='panel2'?"text-white":"text-white/50"} `}>
                PLAI Assistant
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[rgb(22,22,24)]">
            <Typography>
              <div className="flex flex-col">
                <div className="text-white w-10/12 sm:text-xl">
                  PLAI supports with everything from drafting, reviewing and
                  understanding documents to creating summaries. Ask any
                  questions and get instant answers. Powered by AI.
                </div>
                <div className="text-yellow-400 text-md">
          learn more about PLAI Assistant
          <ArrowForwardIcon/>
             </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className="">
              <div className={`sm:font-bold sm:text-2xl text-xl ${expanded==='panel3'?"text-white":"text-white/50"} `}>
                Contract Automation
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[rgb(22,22,24)]">
            <Typography>
              <div className="flex flex-col">
                <div className="text-white w-10/12 sm:text-xl">
                  Streamline contract lifecycles by automating templates and
                  empower your teams to generate contracts in minutes. Elevate
                  efficiency, minimise human error.
                </div>
                <div className="text-yellow-400 text-md">
          learn more about  Contract Automation
          <ArrowForwardIcon/>
             </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography className="">
              <div className={`sm:font-bold sm:text-2xl text-xl ${expanded==='panel4'?"text-white":"text-white/50"} `}>
                eSigning & Approval
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[rgb(22,22,24)]">
            <Typography>
              <div className="flex flex-col">
                <div className="text-white w-10/12 sm:text-xl">
                  Get your contracts approved, signed and stored in one
                  platform. Integrated with DocuSign.
                </div>
                <div className="text-yellow-400 text-md">
          learn more about eSigning & Apporoval
          <ArrowForwardIcon/>
             </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography className="">
              <div className={`sm:font-bold sm:text-2xl text-xl ${expanded==='panel5'?"text-white":"text-white/50"} `}>Repository</div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[rgb(22,22,24)]">
            <Typography>
              <div className="flex flex-col">
                <div className="text-white w-10/12 sm:text-xl">
                  Transform legal management. Get full visibility of your
                  agreements with the Pocketlaw repository. Powered by AI.
                </div>
                <div className="text-yellow-400 text-md">
          learn more about Repository
          <ArrowForwardIcon/>
             </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography className="">
              <div className={`sm:font-bold sm:text-2xl text-xl ${expanded==='panel6'?"text-white":"text-white/50"} `}>
                Task Management
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[rgb(22,22,24)]">
            <Typography>
              <div className="flex flex-col">
                <div className="text-white w-10/12 sm:text-xl">
                  Maintain speed and control at scale with your task management
                  tool. Integrated with Slack.
                </div>
                <div className="text-yellow-400 text-md">
          learn more about Task Management
          <ArrowForwardIcon/>
             </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography className="">
              <div className={`sm:font-bold sm:text-2xl text-xl ${expanded==='panel7'?"text-white":"text-white/50"} `}>
                Templates and Playbooks
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[rgb(22,22,24)]">
            <Typography>
              <div className="flex flex-col">
                <div className="text-white w-10/12 sm:text-xl">
                  One place to easily access all your company's templates and
                  playbooks. In addition to your own, access our library of +400
                  templates for different jurisdictions.
                </div>
                <div className="text-yellow-400 text-md">
          learn more about Templates and Playbooks
          <ArrowForwardIcon/>
             </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="w-6/12 sm:block hidden ">
        {expanded === "panel1" ? (
          <SvgComponent />
        ) : expanded === "panel2" ? (
          <SvgComponent2 />
        ) : expanded === "panel3" ? (
          <SvgComponent3 />
        ) : expanded === "panel4" ? (
          <SvgComponent4 />
        ) : expanded === "panel5" ? (
          <SvgComponent5 />
        ) : expanded === "panel6" ? (
          <SvgComponent6 />
        ) : expanded === "panel7" ? (
          <SvgComponent7 />
        ):<SvgComponent/>}
      </div>
    </div>
  );
}
