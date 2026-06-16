import img3DGraph from "../b7bbe33d51abd92f96d7d654afdf841ed7a3aceb.png";
import imgImage2 from "../13a5123d147560e0b029827bd35b00c4ff90b646.png";

// AI Analytics Specific Images
import aiIntro from "./Ai-Analytics/1.webp";
import aiFull1 from "./Ai-Analytics/ai-analytics-2.webp";
import aiSolution from "./Ai-Analytics/3.webp";
import aiFull2 from "./Ai-Analytics/ai-analytics-4.webp";
import aiFinal from "./Ai-Analytics/5.webp";

// Analytics Specific Images
import analyticsIntro from "./Analytics/1.webp";
import analyticsFull1 from "./Analytics/analytics-2.webp";
import analyticsSolution from "./Analytics/3.webp";
import analyticsFull2 from "./Analytics/analytics-4.webp";
import analyticsFinal from "./Analytics/5.webp";

//Cloud Specific Images
import cloudIntro from "./Cloud/1.webp";
import cloudFull1 from "./Cloud/cloud-service-2.webp";
import cloudSolution from "./Cloud/3.webp";
import cloudFull2 from "./Cloud/cloud-service-4.webp";
import cloudFinal from "./Cloud/5.webp";

//EMS Specific Images
import emsIntro from "./EMS/1.webp";
import emsFull1 from "./EMS/EMS-2.webp";
import emsSolution from "./EMS/3.webp";
import emsFull2 from "./EMS/EMS-4.webp";
import emsFinal from "./EMS/5.webp";

//Manufacturing Specific Images
import mesIntro from "./MES/1.webp";
import mesFull1 from "./MES/MES-2.webp";
import mesSolution from "./MES/3.webp";
import mesFull2 from "./MES/MES-4.webp";
import mesFinal from "./MES/5.webp";

//Oracle Specific Images
import oracleIntro from "./Oracle/1.webp";
import oracleFull1 from "./Oracle/oracle-2.webp";
import oracleSolution from "./Oracle/3.webp";
import oracleFull2 from "./Oracle/oracle-4.webp";
import oracleFinal from "./Oracle/5.webp";

//Pipline Specific Images
import pipelineIntro from "./Pipelines/1.webp";
import pipelineFull1 from "./Pipelines/pipeline-safety-2.webp";
import pipelineSolution from "./Pipelines/3.webp";
import pipelineFull2 from "./Pipelines/pipeline-safety-4.webp";
import pipelineFinal from "./Pipelines/5.webp";

//SAP Specific Images
import sapIntro from "./SAP/1.webp";
import sapFull1 from "./SAP/sap-2.webp";
import sapSolution from "./SAP/3.webp";
import sapFull2 from "./SAP/sap-4.webp";
import sapFinal from "./SAP/5.webp";

//Cyber-Security
import cyberIntro from "./Cybersecurity/cyber1.webp";
import cyberFull1 from "./Cybersecurity/cyber2.webp";
import cyberSolution from "./Cybersecurity/cyber3.webp";
import cyberFull2 from "./Cybersecurity/cyber4.webp";
import cyberFinal from "./Cybersecurity/cyber-5.webp";


const defaultSet = {
  intro: img3DGraph,
  fullWidth1: img3DGraph,
  solution: imgImage2,
  fullWidth2: img3DGraph,
  finalThoughts: imgImage2,
};

export const serviceImages = {
  analytics: {
    intro: analyticsIntro,
    fullWidth1: analyticsFull1,
    solution: analyticsSolution,
    fullWidth2: analyticsFull2,
    finalThoughts: analyticsFinal,
  },
  manufacturing: {
    intro: mesIntro,
    fullWidth1: mesFull1,
    solution: mesSolution,
    fullWidth2: mesFull2,
    finalThoughts: mesFinal,
  },
  "energy-monitoring": {
    intro: emsIntro,
    fullWidth1: emsFull1,
    solution: emsSolution,
    fullWidth2: emsFull2,
    finalThoughts: emsFinal,
  },
  "pipeline-safety": {
    intro: pipelineIntro,
    fullWidth1: pipelineFull1,
    solution: pipelineSolution,
    fullWidth2: pipelineFull2,
    finalThoughts: pipelineFinal,
  },
  "ai-analytics": {
    intro: aiIntro,
    fullWidth1: aiFull1,
    solution: aiSolution,
    fullWidth2: aiFull2,
    finalThoughts: aiFinal,
  },
  "cloud-services": {
    intro: cloudIntro,
    fullWidth1: cloudFull1,
    solution: cloudSolution,
    fullWidth2: cloudFull2,
    finalThoughts: cloudFinal,
  },
  "sap-services": {
    intro: sapIntro,
    fullWidth1: sapFull1,
    solution: sapSolution,
    fullWidth2: sapFull2,
    finalThoughts: sapFinal,
  },
  "oracle-services": {
    intro: oracleIntro,
    fullWidth1: oracleFull1,
    solution: oracleSolution,
    fullWidth2: oracleFull2,
    finalThoughts: oracleFinal,
  },
  "cybersecurity": {
    intro: cyberIntro,
    fullWidth1: cyberFull1,
    solution: cyberSolution,
    fullWidth2: cyberFull2,
    finalThoughts: cyberFinal,
  },
};

export default serviceImages;
