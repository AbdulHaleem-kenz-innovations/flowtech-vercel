import img3DGraph from "../b7bbe33d51abd92f96d7d654afdf841ed7a3aceb.png";
import imgImage2 from "../13a5123d147560e0b029827bd35b00c4ff90b646.png";

// AI Analytics Specific Images
import aiIntro from "./Ai-Analytics/1.jpeg";
import aiFull1 from "./Ai-Analytics/2.jpeg";
import aiSolution from "./Ai-Analytics/3.jpeg";
import aiFull2 from "./Ai-Analytics/4.jpeg";
import aiFinal from "./Ai-Analytics/5.jpeg";

// Analytics Specific Images
import analyticsIntro from "./Analytics/1.jpeg";
import analyticsFull1 from "./Analytics/2.jpeg";
import analyticsSolution from "./Analytics/3.jpeg";
import analyticsFull2 from "./Analytics/4.jpeg";
import analyticsFinal from "./Analytics/5.jpeg";

//Cloud Specific Images
import cloudIntro from "./Cloud/1.jpeg";
import cloudFull1 from "./Cloud/2.jpeg";
import cloudSolution from "./Cloud/3.jpeg";
import cloudFull2 from "./Cloud/4.jpeg";
import cloudFinal from "./Cloud/5.jpeg";

//EMS Specific Images
import emsIntro from "./EMS/1.jpeg";
import emsFull1 from "./EMS/2.jpeg";
import emsSolution from "./EMS/3.jpeg";
import emsFull2 from "./EMS/4.jpeg";
import emsFinal from "./EMS/5.jpeg";

//Manufacturing Specific Images
import mesIntro from "./MES/1.jpeg";
import mesFull1 from "./MES/2.jpeg";
import mesSolution from "./MES/3.jpeg";
import mesFull2 from "./MES/4.jpeg";
import mesFinal from "./MES/5.jpeg";

//Oracle Specific Images
import oracleIntro from "./Oracle/1.jpeg";
import oracleFull1 from "./Oracle/2.jpeg";
import oracleSolution from "./Oracle/3.jpeg";
import oracleFull2 from "./Oracle/4.jpeg";
import oracleFinal from "./Oracle/5.jpeg";

//Pipline Specific Images
import pipelineIntro from "./Pipelines/1.jpeg";
import pipelineFull1 from "./Pipelines/2.jpeg";
import pipelineSolution from "./Pipelines/3.jpeg";
import pipelineFull2 from "./Pipelines/4.jpeg";
import pipelineFinal from "./Pipelines/5.jpeg";

//SAP Specific Images
import sapIntro from "./SAP/1.jpeg";
import sapFull1 from "./SAP/2.jpeg";
import sapSolution from "./SAP/3.jpeg";
import sapFull2 from "./SAP/4.jpeg";
import sapFinal from "./SAP/5.jpeg";

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
};

export default serviceImages;
