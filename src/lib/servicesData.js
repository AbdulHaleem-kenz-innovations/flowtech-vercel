import imgRectangle from "../assets/281158e8c678fde7e51a36a31c1553d4e710d208.png";
import img3DGraphComputerIllustration1 from "../assets/3d-graph-computer-illustration 1 (1).png";
import imgRectangle1 from "../assets/c78c44b955a51258030be19e23842e29465b7545.png";
import imgRectangle2 from "../assets/ed6ab4e2d6429f0d554d61b64ceec65f98cbdf2e.png";
import image1 from "../assets/services/image 1.png";
import image2 from "../assets/services/image 2.png";
import image3 from "../assets/services/image 3.png";
import image4 from "../assets/services/image 4.png";

export const servicesData = [
    {
        id: 1,
        title: "Analytics",
        subtitle: "REAL-TIME ANALYTICS, DASHBOARDS",
        description:
            "Transform shop floor operations with real-time data integration, monitoring, and intelligent dashboards. Leverage predictive analytics to reduce downtime, optimise production, and improve quality.",
        img: imgRectangle,
        link: "/services/analytics",
        hoverImg: image2,
    },
    {
        id: 2,
        title: "Energy Management System",
        subtitle: "ENERGY, SUSTAINABILITY",
        description:
            "Real-time energy monitoring that tracks consumption across utilities, equipment, and sites through a centralized dashboard.",
        img: img3DGraphComputerIllustration1,
        link: "/services/energy-monitoring",
        hoverImg: image1,
    },
    {
        id: 3,
        title: "Pipeline Safety ",
        subtitle: "REAL-TIME ANALYTICS, DASHBOARDS",
        description:
            "Turn complex data into actionable insights with advanced analytics, real-time dashboards, and predictive modelling.",
        img: imgRectangle1,
        link: "/services/pipeline-safety",
        hoverImg: image4,
    },
    {
        id: 4,
        title: "Cloud Services ",
        subtitle: "REAL-TIME ANALYTICS, DASHBOARDS",
        description:
            "Monitor pipelines in real time using distributed fiber optic sensing to detect leaks, temperature changes, and intrusions across long distances.",
        img: imgRectangle2,
        link: "/services/cloud-services",
        hoverImg: image3,
    },
    {
        id: 5,
        title: "AI Analytics",
        subtitle: "REAL-TIME ANALYTICS, DASHBOARDS",
        description:
            "Transform shop floor operations with real-time data integration, monitoring, and intelligent dashboards. Leverage predictive analytics to reduce downtime, optimise production, and improve quality.",
        img: imgRectangle,
        link: "/services/ai-analytics",
        hoverImg: image2,
    },
    {
        id: 6,
        title: "SAP Solutions",
        subtitle: "ENERGY, SUSTAINABILITY",
        description:
            "Real-time energy monitoring that tracks consumption across utilities, equipment, and sites through a centralized dashboard.",
        img: img3DGraphComputerIllustration1,
        link: "/services/sap-services",
        hoverImg: image1,
    },
    {
        id: 7,
        title: "Oracle Solutions ",
        subtitle: "REAL-TIME ANALYTICS, DASHBOARDS",
        description:
            "Turn complex data into actionable insights with advanced analytics, real-time dashboards, and predictive modelling.",
        img: imgRectangle1,
        link: "/services/oracle-services",
        hoverImg: image4,
    },
    {
        id: 8,
        title: "Manufacturing Execution System ",
        subtitle: "",
        description:
            "Monitor pipelines in real time using distributed fiber optic sensing to detect leaks, temperature changes, and intrusions across long distances.",
        img: imgRectangle2,
        link: "/services/manufacturing",
        hoverImg: image3,
    },
];

export const fullServiceDetails = {
    'analytics': {
        title: "Analytics",
        subtitle: "Turn Data Into Your Most Powerful Business Asset",
        technology: "Data Engineering, BI Tools, Data Warehousing",
        concept: "Data-Driven Decision Making, Business Intelligence",
        industry: "Manufacturing, Energy, Government, Enterprise",
        intro: "In today's hyper-competitive landscape, the difference between leading companies and the rest is not the volume of data they collect — it's how quickly and accurately they act on it. Flowtech IT's Analytics practice transforms raw enterprise data into clear, actionable intelligence that accelerates decisions, uncovers hidden opportunities, and drives measurable growth across every function of your business.\n\nWe bring together advanced data engineering, business intelligence, and performance management into a single, cohesive analytics capability — purpose-built for the industries we serve.",
        sections: [
            {
                title: "What We Deliver",
                subsections: [
                    {
                        title: "Data Strategy & Governance",
                        content: "Before analytics can create value, data must be trustworthy. We help organizations define their data vision, establish governance frameworks, and build the policies, standards, and ownership structures that ensure data quality, security, and compliance at scale.",
                        bullets: [
                            "Data maturity assessment and roadmap development",
                            "Data ownership, stewardship, and access control frameworks",
                            "Master data management (MDM) and data quality programs",
                            "Regulatory and compliance alignment (GDPR, PDPL, and industry standards)"
                        ]
                    },
                    {
                        title: "Data Engineering & Integration",
                        content: "We architect the pipelines, platforms, and ecosystems that make analytics possible — connecting your ERP, IoT sensors, cloud platforms, and operational systems into a unified, real-time data foundation.",
                        bullets: [
                            "ETL/ELT pipeline design using Pentaho, Apache Kafka, and Python",
                            "Data warehouse and data lake architecture (star schema, snowflake schema)",
                            "Real-time streaming integration for high-volume industrial data",
                            "API-based connectivity across SAP, Oracle, and third-party platforms"
                        ]
                    },
                    {
                        title: "Business Intelligence & Visualization",
                        content: "Our BI solutions move beyond static reports. We design interactive, role-based dashboards that put the right intelligence in front of the right people — at the right moment.",
                        bullets: [
                            "Custom Power BI, Tableau, Grafana, and Apache Superset dashboards",
                            "Executive scorecards, operational KPI monitors, and drill-down analytics",
                            "Sales, finance, HR, supply chain, and production intelligence views",
                            "Self-service BI enablement and user training programs"
                        ]
                    },
                    {
                        title: "Performance Management & Benchmarking",
                        content: "We close the gap between insight and action by embedding analytics directly into performance management workflows — enabling teams to track progress against targets, identify gaps, and course-correct in real time.",
                        bullets: [
                            "KPI definition, target-setting, and variance analysis",
                            "Balanced scorecard and OKR integration",
                            "Cross-functional performance dashboards linking strategy to operations",
                            "Automated alerts and escalation workflows for performance deviations"
                        ]
                    }
                ]
            },
            {
                title: "Why Flowtech Analytics?",
                table: {
                    headers: ["Feature", "Description"],
                    rows: [
                        ["Industry Depth", "Deep domain knowledge across manufacturing, energy, oil & gas, and government sectors ensures analytics models reflect operational realities, not just data patterns."],
                        ["End-to-End Ownership", "From data architecture to dashboard delivery, we manage the full analytics lifecycle — eliminating the fragmentation that slows down other vendors."],
                        ["Rapid Time-to-Value", "Our proven delivery frameworks and pre-built industry accelerators compress implementation timelines without sacrificing quality or customization."],
                        ["Human-Centered Design", "Every dashboard and report we build is designed with the end user in mind — clear, intuitive, and built to drive action, not generate confusion."]
                    ]
                }
            },
            {
                title: "Outcomes Our Clients Experience",
                bullets: [
                    "50%+ reduction in time spent generating manual reports",
                    "Real-time visibility across production, supply chain, and financial performance",
                    "Faster, more confident decisions backed by trusted data",
                    "Unified view of enterprise performance — across plants, divisions, and geographies"
                ]
            }
        ]
    },
    'ai-analytics': {
        title: "AI Analytics",
        subtitle: "Intelligence That Learns, Predicts, and Evolves With Your Business",
        technology: "Machine Learning, Generative AI, MLOps",
        concept: "Predictive Intelligence, Intelligent Automation",
        industry: "Enterprise, Manufacturing, Energy, Digital Platforms",
        intro: "Artificial Intelligence is no longer a future capability — it is the defining competitive advantage of the present. Flowtech IT's AI Analytics practice combines advanced machine learning, generative AI, and predictive modeling to embed intelligence directly into your business processes, products, and decisions.\n\nWe don't build AI for the sake of it. Every solution we develop is anchored to a specific business outcome — reducing costs, preventing failures, accelerating workflows, or unlocking new revenue streams.",
        sections: [
            {
                title: "Our AI Capabilities",
                subsections: [
                    {
                        title: "Generative AI Solutions",
                        content: "Harness the power of large language models and generative AI to automate complex knowledge work, accelerate content creation, and build intelligent user experiences across your enterprise.",
                        bullets: [
                            "Enterprise LLM deployment (on-premise and cloud) with data privacy controls",
                            "Retrieval-Augmented Generation (RAG) for domain-specific knowledge systems",
                            "AI-powered document intelligence and automated report generation",
                            "Conversational AI interfaces for internal operations and customer engagement"
                        ]
                    },
                    {
                        title: "Predictive Analytics & Forecasting",
                        content: "Move from reactive operations to proactive strategy. Our predictive models analyze historical patterns and real-time signals to forecast demand, detect anomalies, and surface risks before they become problems.",
                        bullets: [
                            "Demand forecasting and inventory optimization models",
                            "Predictive maintenance — equipment failure prediction using sensor and operational data",
                            "Churn prediction, customer lifetime value, and market demand modeling",
                            "Financial risk scoring and anomaly detection for fraud prevention"
                        ]
                    },
                    {
                        title: "AI Agents & Intelligent Automation",
                        content: "Deploy autonomous AI agents that execute multi-step workflows, interact with enterprise systems, and continuously learn — dramatically reducing manual effort and human error across operations.",
                        bullets: [
                            "Process automation agents for procurement, HR, finance, and operations",
                            "Multi-agent orchestration for complex, cross-functional workflows",
                            "Intelligent document processing — automated extraction, classification, and validation",
                            "AI-driven quality inspection using computer vision and sensor fusion"
                        ]
                    },
                    {
                        title: "Adaptive AI Systems",
                        content: "Unlike static models, our adaptive AI systems evolve continuously — refining their understanding of your environment as conditions change, ensuring sustained accuracy and reliability over time.",
                        bullets: [
                            "Online learning pipelines that update models from production feedback",
                            "Concept drift detection and automated model retraining workflows",
                            "MLOps infrastructure for model versioning, monitoring, and governance",
                            "Edge AI deployment for real-time decision-making in industrial environments"
                        ]
                    },
                    {
                        title: "Small & Large Language Model Development",
                        content: "From domain-tuned small language models optimized for speed and efficiency to enterprise-scale LLMs fine-tuned on proprietary knowledge, we deliver the right language intelligence for your specific use case.",
                        bullets: [
                            "Custom SLM development for constrained environments (edge, embedded, mobile)",
                            "LLM fine-tuning on proprietary datasets with full IP protection",
                            "Prompt engineering, evaluation frameworks, and safety guardrails",
                            "Multilingual models supporting Arabic, English, and regional languages"
                        ]
                    }
                ]
            },
            {
                title: "AI Products by Flowtech",
                table: {
                    headers: ["Product", "Description"],
                    rows: [
                        ["Kenvoice.ai", "AI-powered voice agents that automate customer interactions, call center operations, and internal helpdesks with natural, human-quality conversations."],
                        ["SmartIDP.ai", "Intelligent document processing platform that automatically extracts, classifies, and validates data from invoices, contracts, forms, and complex documents."],
                        ["AIBizzApp.ai", "Enterprise AI application suite that embeds intelligent automation into core business processes — from approval workflows to predictive reporting."],
                        ["KenTalk.ai", "Conversational AI platform enabling natural, context-aware dialogue across web, mobile, and voice channels — in Arabic and English."]
                    ]
                }
            },
            {
                title: "Business Outcomes",
                bullets: [
                    "60-80% reduction in manual document processing time",
                    "Predictive maintenance models delivering 20-35% reduction in unplanned downtime",
                    "AI-driven demand forecasting with 15-25% improvement in inventory efficiency",
                    "Automated workflows eliminating repetitive tasks and freeing talent for high-value work"
                ]
            }
        ]
    },
    'pipeline-safety': {
        title: "DTS & DTSS — Pipeline Safety & Operational Intelligence",
        subtitle: "One Fiber. End-to-End Visibility. Zero Blind Spots.",
        technology: "DFOS, DAS, DTS, DSS, DTSS",
        concept: "Multi-Modal Sensing, Real-Time Asset Monitoring",
        industry: "Oil & Gas, Energy, Infrastructure",
        intro: "Pipelines are the circulatory system of the energy economy — and they must be protected with the same precision and vigilance as any critical infrastructure. Flowtech IT delivers distributed fiber optic sensing solutions that transform a single optical fiber into a continuous, intelligent sensor array spanning tens of kilometers of pipeline, providing real-time visibility into temperature, strain, acoustic events, and structural integrity.\n\nOur solutions are built on a phased, vendor-agnostic architecture — giving operators the flexibility to start with targeted monitoring and scale to full multi-modal pipeline intelligence.",
        sections: [
            {
                title: "The Technology: Distributed Fiber Optic Sensing (DFOS)",
                content: "DFOS uses standard optical fiber as a linear, passive sensing medium. External influences — temperature changes, mechanical strain, and acoustic vibrations — modify the properties of backscattered light traveling through the fiber. Advanced interrogators analyze these changes to reconstruct spatially resolved profiles of conditions along the entire fiber length, providing unprecedented visibility into asset behavior.",
                table: {
                    headers: ["Capability", "Advantage"],
                    rows: [
                        ["Extended Range", "Tens of kilometers of coverage from a single interrogator unit — eliminating the cost and complexity of deploying thousands of point sensors."],
                        ["Passive Design", "No active electronics in the field. Fewer failure points. Lower maintenance burden. Inherently safe in hazardous environments."],
                        ["EMI Immunity", "Immune to electromagnetic interference — reliable in high-voltage, heavy industrial, and RF-noisy environments."],
                        ["Long-Term Stability", "Proven optical fiber reliability over decades of continuous monitoring — a trusted foundation for long-term asset integrity programs."]
                    ]
                }
            },
            {
                title: "Our DFOS Solution Portfolio",
                subsections: [
                    {
                        title: "DAS — Distributed Acoustic Sensing",
                        content: "Detects dynamic strain and vibrations along the fiber, converting the entire cable into a sensitive acoustic sensor array. Based on Rayleigh backscattering, DAS precisely localizes acoustic events — from third-party excavation near the right-of-way to flow anomalies indicating leaks.",
                        bullets: [
                            "Intrusion detection — identifies digging, unauthorized access, and third-party interference",
                            "Flow monitoring — detects acoustic signatures of operational anomalies and leaks",
                            "Event localization — pinpoints acoustic events within meters along the entire monitored length"
                        ]
                    },
                    {
                        title: "DTS — Distributed Temperature Sensing",
                        content: "Measures absolute temperature along the entire fiber length with high spatial resolution. Based on Raman scattering, DTS detects the thermal signatures of gas leaks (cooling from Joule-Thomson effects), liquid product releases (heating), and fire or overheating conditions.",
                        bullets: [
                            "Leak-induced temperature anomaly detection — early warning before incidents escalate",
                            "Fire and overheating detection with rapid spatial localization",
                            "Thermal stress monitoring — identifies expansion and contraction patterns affecting structural integrity",
                            "Continuous real-time thermal profiling with trend analysis and alert integration"
                        ]
                    },
                    {
                        title: "DSS — Distributed Strain Sensing",
                        content: "Captures static and slowly varying mechanical strain using Brillouin scattering technology. DSS monitors ground subsidence, pipeline deformation, and long-term stress accumulation — providing critical early warning of structural integrity threats.",
                        bullets: [
                            "Ground movement and soil settlement monitoring near buried assets",
                            "Pipeline bending, buckling, and deformation detection before critical thresholds",
                            "Long-term structural stress tracking in support infrastructure and civil assets"
                        ]
                    },
                    {
                        title: "DTSS — Distributed Temperature & Strain Sensing",
                        content: "The most comprehensive DFOS approach — combining simultaneous temperature and strain measurement along the entire fiber. By separating mechanical deformation from thermal effects, DTSS eliminates ambiguity and enables root-cause analysis of complex operational events.",
                        bullets: [
                            "Simultaneous dual-parameter profiling — full asset behavioral intelligence",
                            "Eliminates cross-sensitivity between thermal and mechanical signals",
                            "Supports predictive maintenance and risk-based decision making",
                            "Ideal for complex asset environments where single-modality sensing creates blind spots"
                        ]
                    }
                ]
            },
            {
                title: "Multi-Modal Correlation: How Intelligence Emerges",
                content: "Single sensing modalities create blind spots. The operational power of our DFOS solutions comes from correlating signals across multiple modalities:",
                table: {
                    headers: ["Event Type", "Correlation Logic"],
                    rows: [
                        ["Leak Event", "DTS thermal anomaly + DAS acoustic signature = high-confidence leak alert with precise spatial location"],
                        ["Third-Party Intrusion", "DAS ground activity + DSS strain change = actionable intrusion alert with reduced false alarms"],
                        ["Environmental Noise", "DAS signal only, no thermal or strain correlation = low-confidence event, alarm suppressed"],
                        ["Ground Subsidence", "DSS strain progression over time + DTS thermal monitoring = early geotechnical warning"]
                    ]
                }
            },
            {
                title: "From Data to Decisions: The Analytics Layer",
                content: "Raw fiber sensing data is transformed into operational intelligence through our advanced analytics platform:",
                bullets: [
                    "Baseline learning — establishes normal operational patterns across time and space",
                    "Deviation detection — identifies statistically significant departures from baselines",
                    "Trend analysis — tracks progressive changes indicating developing anomalies",
                    "Confidence-scored alerts — prioritized events ranked by detection confidence",
                    "SCADA integration — processed insights feed directly into existing control systems"
                ]
            },
            {
                title: "Business Value",
                bullets: [
                    "Early leak and intrusion detection — response before incidents escalate to critical failures",
                    "Dramatic reduction in false alarms — operator focus on genuine events, not noise",
                    "Proactive, condition-based maintenance replacing costly scheduled inspections",
                    "Regulatory compliance and environmental risk mitigation",
                    "Reduced insurance exposure and improved HSE performance metrics"
                ]
            }
        ]
    },
    'manufacturing': {
        title: "Manufacturing Execution Systems (MES)",
        subtitle: "Real-Time Intelligence for the Modern Shop Floor",
        technology: "IIoT, MES Platforms, Data Integration",
        concept: "Real-Time Production Monitoring, Smart Manufacturing",
        industry: "Manufacturing, Industrial Enterprises",
        intro: "Manufacturing operations generate vast amounts of data — from machine sensors and production lines to quality stations and supply chain touchpoints. Yet for many manufacturers, this data remains trapped in silos, forcing decisions based on yesterday's reports rather than today's reality. Flowtech IT's Manufacturing Execution System practice bridges the gap between the plant floor and the boardroom, delivering real-time operational intelligence that drives efficiency, quality, and competitive advantage.\n\nOur MES solutions are powered by Manufacturing Intelligence (MI) — a layer of advanced analytics, IIoT integration, and AI-driven insights that transforms raw operational data into decisions that matter.",
        sections: [
            {
                title: "Core MES Capabilities",
                subsections: [
                    {
                        title: "Real-Time Production Monitoring",
                        content: "Gain complete, live visibility into every aspect of your production environment — from individual machine states to line-level output and plant-wide performance metrics.",
                        bullets: [
                            "Live OEE (Overall Equipment Effectiveness) monitoring — availability, performance, and quality",
                            "Shift-wise, machine-wise, and batch-level production tracking",
                            "Automated alerts for production deviations, stoppages, and quality failures",
                            "KPI dashboards accessible to operators, supervisors, and plant management"
                        ]
                    },
                    {
                        title: "Predictive Maintenance",
                        content: "Move from costly reactive repairs and rigid scheduled maintenance to intelligent, condition-based intervention. Our predictive maintenance models analyze real-time sensor data to forecast equipment failures before they cause unplanned downtime.",
                        bullets: [
                            "Vibration, temperature, and current signature analysis for early failure detection",
                            "Remaining useful life (RUL) estimation for critical equipment",
                            "Automated work order generation triggered by predictive model alerts",
                            "Integration with CMMS (Computerized Maintenance Management Systems)"
                        ]
                    },
                    {
                        title: "Quality Management & Defect Analytics",
                        content: "Embed quality intelligence throughout your production process — from incoming material inspection to final product release — and use data to systematically eliminate the root causes of defects.",
                        bullets: [
                            "Station-wise defect tracking and rejection rate analysis (Pareto, trend, and FR%)",
                            "Rework monitoring — quantity, station, team, and defect type analysis",
                            "Statistical Process Control (SPC) with control chart visualization",
                            "Quality yield reporting with drill-down to batch, shift, and operator level"
                        ]
                    },
                    {
                        title: "Supply Chain & Inventory Integration",
                        content: "Connect production visibility with supply chain intelligence — ensuring material availability, on-time delivery, and inventory efficiency are always in alignment with production demand.",
                        bullets: [
                            "Real-time inventory tracking and consumption monitoring",
                            "Supplier performance management and on-time delivery analytics",
                            "Work-in-progress (WIP) tracking across all production stages",
                            "Demand-driven production scheduling and material replenishment alerts"
                        ]
                    },
                    {
                        title: "Data Integration & ETL Pipelines",
                        content: "Our MES solutions aggregate data from every source in your manufacturing ecosystem — PLCs, SCADA systems, ERP platforms, IoT sensors, and manual inputs — into a unified data foundation that powers all analytics and reporting.",
                        bullets: [
                            "Pentaho ETL pipelines for multi-source data cleansing and loading",
                            "Kafka-based real-time streaming for high-frequency sensor data",
                            "SAP, Oracle, and third-party ERP integration",
                            "Data warehouse architecture optimized for manufacturing analytics workloads"
                        ]
                    }
                ]
            },
            {
                title: "Technologies We Deploy",
                table: {
                    headers: ["Category", "Technologies"],
                    rows: [
                        ["Data Integration", "Pentaho ETL, Apache Kafka, SQL, Python"],
                        ["Analytics & Visualization", "Power BI, Tableau, Grafana, Apache Superset, Streamlit"],
                        ["Data Storage", "SQL data warehouses (star/snowflake schema), time-series databases"],
                        ["Cloud Infrastructure", "Azure, AWS — supporting on-premise and hybrid architectures"],
                        ["IIoT Connectivity", "Modbus, OPC-UA, MQTT — connecting sensors, PLCs, and SCADA systems"]
                    ]
                }
            },
            {
                title: "Proven Use Cases",
                table: {
                    headers: ["Client", "Solution Highlights"],
                    rows: [
                        ["Tata Electronics", "UPH Box Plot reporting, Defect & Station-wise FR% analysis, TDM weekly monitoring — enabling shift-level production intelligence and quality optimization."],
                        ["Jindal Steel & Power", "Performance dashboard covering production, downtime, supply chain, and energy sustainability — with real-time OEE, rework, and chiller plant performance tracking."],
                        ["L&T Construction & Mining", "Industry 4.0 Power Management System with home screen dashboard, production unit monitoring, and station-level equipment intelligence."],
                        ["Alghanim Industries", "Nationalization dashboard, sales performance analytics, and organization overview — integrating SAP HR and financial data with Power BI."]
                    ]
                }
            },
            {
                title: "Business Impact",
                bullets: [
                    "20-40% reduction in unplanned downtime through predictive maintenance",
                    "15-25% improvement in OEE through real-time production visibility",
                    "Significant reduction in defect rates through data-driven quality management",
                    "Elimination of manual reporting — saving hundreds of engineering hours monthly",
                    "End-to-end supply chain visibility reducing material shortages and production delays"
                ]
            }
        ]
    },
    'energy-monitoring': {
        title: "Energy Management System (EMS) — IoT",
        subtitle: "Monitor Every Watt. Optimize Every Hour. Sustain Every Tomorrow.",
        technology: "IoT Sensors, Edge Devices, Cloud Platforms",
        concept: "Energy Intelligence, Real-Time Monitoring",
        industry: "Manufacturing, Utilities, Industrial Enterprises",
        intro: "Energy is among the largest controllable costs in industrial and commercial operations — yet for most organizations, energy consumption remains poorly understood, difficult to optimize, and largely reactive. Flowtech IT's Energy Management System (EMS) changes this fundamentally, delivering real-time IoT-based energy intelligence that enables organizations to monitor, analyze, and optimize energy use across every asset, line, plant, and site.\n\nOur EMS is built for the demands of modern industrial environments — supporting multiple utilities, complex equipment hierarchies, and the ESG reporting requirements that investors and regulators increasingly require.",
        sections: [
            {
                title: "EMS Architecture Overview",
                table: {
                    headers: ["Layer", "Description"],
                    rows: [
                        ["Field Layer", "Energy meters and sensors installed on motors, equipment, utilities, and distribution panels — capturing electrical parameters, thermal data, and utility consumption in real time."],
                        ["Edge Connectivity", "GSM/GPRS IoT devices acquire data from field meters via Modbus RTU/TCP, OPC-UA, MQTT, and BACnet protocols — with edge buffering for connectivity resilience."],
                        ["Transport", "Secure HTTP data push to local or central servers over the internet — with authenticated device registration and encrypted communication."],
                        ["Platform", "Centralized EMS application providing real-time monitoring, analytics, alerts, reporting, and ESG integration — accessible via web and mobile."]
                    ]
                }
            },
            {
                title: "Core Features",
                subsections: [
                    {
                        title: "Real-Time Monitoring",
                        content: "Track energy consumption, power quality, and equipment performance across your entire asset base — from individual motors to entire production lines and campuses.",
                        bullets: [
                            "Live monitoring of kW, kWh, Power Factor, Voltage, Current, and THD",
                            "Equipment hierarchy mapping — site > line > machine > component",
                            "High-frequency data polling for precision energy profiling",
                            "Multi-area dashboards (Area 1, 2, 3) with drill-down to individual assets"
                        ]
                    },
                    {
                        title: "Shift & Batch Energy Analysis",
                        content: "Understand exactly how much energy each shift, batch, and product consumes — enabling targeted optimization and accurate cost attribution.",
                        bullets: [
                            "Automatic shift detection and energy tracking per shift/batch",
                            "Operator-linked energy metrics for accountability and benchmarking",
                            "Product and batch efficiency analysis — energy per unit output",
                            "Comparative analytics across time periods, shifts, and production lines"
                        ]
                    },
                    {
                        title: "Alerts & Anomaly Detection",
                        content: "Our intelligent alerting system ensures energy issues are never missed — with configurable thresholds, anomaly-based triggers, and a structured escalation matrix.",
                        bullets: [
                            "Threshold-based alerts for overconsumption, power factor violations, and demand spikes",
                            "Anomaly detection — automatic identification of unusual energy patterns",
                            "Multi-channel notifications — email, SMS, and in-application alerts",
                            "Escalation matrix — alerts routed to the right team members at the right severity level"
                        ]
                    },
                    {
                        title: "Reporting & Dashboards",
                        content: "From executive energy summaries to granular equipment-level reports — our EMS delivers the right information to every stakeholder in the format they need.",
                        bullets: [
                            "Auto-generated daily, weekly, and monthly energy reports",
                            "PDF and Excel export with scheduled distribution via email",
                            "KPI dashboards — energy intensity, consumption trends, demand profiles, and heatmaps",
                            "On-demand and ad-hoc reporting for audits and compliance reviews"
                        ]
                    },
                    {
                        title: "Multi-Utility & ESG Integration",
                        content: "Energy is only one part of your sustainability story. Our EMS monitors all utilities and provides the carbon accounting data organizations need for credible ESG reporting.",
                        bullets: [
                            "Multi-utility monitoring — electricity, diesel/DG, solar, gas, water, steam, and compressed air",
                            "CO2 emissions calculation using emission factors — carbon footprint tracking by asset and site",
                            "ESG dashboard — integrated sustainability KPIs for investor and regulatory reporting",
                            "Historical carbon trend analysis and reduction target tracking"
                        ]
                    },
                    {
                        title: "Security, Reliability & Scalability",
                        bullets: [
                            "Secure transport with authenticated device registration — no unauthorized data access",
                            "Store-and-forward edge buffering — no data loss during connectivity interruptions",
                            "Horizontal scalability — supports multi-plant, multi-site, and multi-country deployments",
                            "Audit trails for user actions and tamper-proof data integrity records",
                            "Role-based access control — admin, operator, and viewer segregation"
                        ]
                    }
                ]
            },
            {
                title: "Future-Ready Capabilities",
                table: {
                    headers: ["Capability", "Description"],
                    rows: [
                        ["AI-Driven Insights", "Machine learning models forecasting energy demand, detecting inefficiencies, and recommending optimization actions automatically."],
                        ["Plant Maintenance (AI)", "Predictive maintenance integration — correlating energy anomalies with equipment health to prevent costly failures."],
                        ["Carbon Footprint Analytics", "Advanced scope 1, 2, and 3 emissions tracking aligned with international sustainability frameworks (GHG Protocol, ISO 50001)."],
                        ["Asset Management", "Full asset lifecycle management integrated with energy performance data for capital planning and replacement decisions."]
                    ]
                }
            },
            {
                title: "Business Impact",
                bullets: [
                    "10-20% reduction in energy costs through real-time visibility and optimization",
                    "Elimination of manual meter reading and energy report preparation",
                    "Compliance with energy efficiency mandates and environmental regulations",
                    "Credible ESG reporting backed by accurate, auditable energy data",
                    "Proactive identification of energy waste — leaks, idle equipment, and power quality issues"
                ]
            }
        ]
    },
    'cloud-services': {
        title: "Cloud Services",
        subtitle: "Accelerate. Scale. Innovate — Without Limits.",
        technology: "AWS, Azure, Cloud-Native Architecture",
        concept: "Cloud Transformation, Scalable Infrastructure",
        industry: "Enterprise, Technology, Manufacturing",
        intro: "The cloud is no longer a destination — it is the foundation upon which every competitive enterprise is built. Flowtech IT's Cloud Services practice helps organizations design, migrate, and operate cloud environments that are secure, scalable, and optimized for the AI-driven workloads defining the next decade of business.\n\nWhether you are beginning your cloud journey, modernizing a legacy infrastructure, or building cloud-native AI applications, our team brings the architecture expertise, vendor partnerships, and operational discipline to deliver outcomes that matter.",
        sections: [
            {
                title: "Our Cloud Service Areas",
                subsections: [
                    {
                        title: "Cloud Strategy & Migration",
                        content: "Every successful cloud transformation starts with a clear strategy. We help organizations assess their current environment, define the right cloud architecture, and execute migrations that minimize risk and disruption.",
                        bullets: [
                            "Cloud readiness assessment and total cost of ownership (TCO) analysis",
                            "Migration strategy — lift-and-shift, re-platform, re-architect — mapped to business priorities",
                            "Workload migration across Azure and AWS with zero-downtime methodologies",
                            "Legacy application modernization — decomposing monoliths into cloud-native microservices"
                        ]
                    },
                    {
                        title: "Data Platforms & Analytics Infrastructure",
                        content: "The modern data platform lives in the cloud — and we architect data environments that handle everything from real-time IoT streaming to enterprise-scale analytics workloads.",
                        bullets: [
                            "Azure Synapse, AWS Glue, and Amazon Athena for cloud data warehousing and analytics",
                            "Data lake design and implementation on Azure Data Lake and Amazon S3",
                            "Real-time streaming pipelines using Azure Event Hubs and AWS Kinesis",
                            "Integration with Power BI, Tableau, and custom visualization layers"
                        ]
                    },
                    {
                        title: "AI & ML Infrastructure",
                        content: "Running AI at scale requires purpose-built cloud infrastructure. We design and operate the ML platforms, compute environments, and data pipelines that power Flowtech's AI solutions and our clients' own AI initiatives.",
                        bullets: [
                            "Azure Machine Learning and AWS SageMaker environment configuration and optimization",
                            "GPU cluster provisioning for model training and fine-tuning workloads",
                            "MLOps pipelines — automated model training, evaluation, deployment, and monitoring",
                            "Edge AI deployment pipelines — from cloud training to edge device inference"
                        ]
                    },
                    {
                        title: "DevOps & Cloud-Native Development",
                        content: "Speed and reliability are the twin imperatives of modern software delivery. Our DevOps practice embeds automation, continuous integration, and infrastructure-as-code discipline into every project we deliver.",
                        bullets: [
                            "CI/CD pipeline design and implementation using Azure DevOps and GitHub Actions",
                            "Infrastructure-as-Code (IaC) using Terraform and ARM templates",
                            "Container orchestration with Kubernetes (AKS, EKS) and Docker",
                            "Automated testing, security scanning, and deployment gate implementation"
                        ]
                    },
                    {
                        title: "Cloud Security & Governance",
                        content: "Cloud security is not an afterthought — it is a design principle. We embed security controls, governance frameworks, and compliance monitoring into every cloud environment we build.",
                        bullets: [
                            "Zero-trust network architecture and identity governance",
                            "Cloud security posture management (CSPM) and continuous compliance monitoring",
                            "Data encryption, key management, and secrets governance",
                            "Cost governance — tagging policies, budget alerts, and FinOps optimization reviews"
                        ]
                    }
                ]
            },
            {
                title: "Outcomes",
                bullets: [
                    "40-60% reduction in infrastructure costs through right-sizing and cloud-native architectures",
                    "Dramatically improved deployment frequency and system reliability",
                    "Scalable AI and analytics infrastructure without capital expenditure",
                    "Enhanced security posture and compliance readiness across cloud environments"
                ]
            }
        ]
    },
    'sap-services': {
        title: "SAP Solutions",
        subtitle: "Unlock the Full Value of Your SAP Investment",
        technology: "SAP SAC, BW/4HANA, S/4HANA",
        concept: "Enterprise Intelligence, Integrated Business Systems",
        industry: "Manufacturing, Energy, Enterprise",
        intro: "SAP is the operational backbone of the world's largest enterprises — managing everything from financial accounting and procurement to production planning and HR. But SAP's true power is realized only when it is properly implemented, deeply integrated, and continuously optimized. Flowtech IT's SAP practice helps organizations across the Gulf region unlock the full strategic value of their SAP investment — through expert implementation, analytics enablement, and intelligent transformation services.",
        sections: [
            {
                title: "Our SAP Service Lines",
                subsections: [
                    {
                        title: "SAP Analytics Cloud (SAC) & Business Intelligence",
                        content: "Transform your SAP data into real-time strategic intelligence. We deploy and optimize SAP Analytics Cloud environments that bring together planning, analytics, and predictive capabilities in a unified, cloud-based platform.",
                        bullets: [
                            "SAC implementation — dashboards, stories, and KPI monitoring",
                            "Integration with SAP S/4HANA, BW/4HANA, and third-party data sources",
                            "Predictive analytics models using SAC's built-in machine learning capabilities",
                            "Planning and consolidation — budgeting, forecasting, and financial close automation"
                        ]
                    },
                    {
                        title: "SAP BW/4HANA & Data Warehousing",
                        content: "Build a modern SAP data warehouse that delivers trusted, governed analytics at enterprise scale. Our BW/4HANA expertise spans migration, modeling, and performance optimization.",
                        bullets: [
                            "BW/4HANA implementation and migration from legacy BW environments",
                            "Advanced data modeling — LSA++, CompositeProviders, and HANA-native models",
                            "Data acquisition and transformation from SAP and non-SAP source systems",
                            "Performance tuning and query optimization for large-scale analytical workloads"
                        ]
                    },
                    {
                        title: "SAP S/4HANA Implementation & Migration",
                        content: "Whether you are implementing SAP for the first time or migrating from a legacy ECC environment, our team brings the methodology, industry templates, and technical depth to deliver successful transformations.",
                        bullets: [
                            "Greenfield S/4HANA implementation with industry-specific best practices",
                            "Brownfield and selective data migration from SAP ECC to S/4HANA",
                            "System integration — SAP PI/PO, Integration Suite, and API Management",
                            "User adoption and change management support"
                        ]
                    },
                    {
                        title: "SAP-Powered Manufacturing & Operations",
                        content: "Connect your SAP environment to your operational systems — creating a seamless flow of data between the shop floor, the supply chain, and the executive dashboard.",
                        bullets: [
                            "SAP Manufacturing Integration and Intelligence (MII) and Plant Connectivity",
                            "Production planning (PP), quality management (QM), and plant maintenance (PM) optimization",
                            "Integration of SAP data with Power BI and Manufacturing Intelligence dashboards",
                            "Real-time OEE, WIP, and quality analytics connecting SAP to production systems"
                        ]
                    }
                ]
            },
            {
                title: "Client Outcomes",
                table: {
                    headers: ["Outcome", "Description"],
                    rows: [
                        ["ESR Dashboard (L&T)", "SAP data integrated with Power BI to deliver real-time engineering status reporting — enabling proactive project management across critical milestones."],
                        ["Customer Analytics (Alghanim)", "SAP sales data transformed into a 360-degree customer intelligence platform — tracking revenue, distribution performance, and outstanding exposure."],
                        ["Nationalization Dashboard", "SAP HR data integrated with Power BI to deliver regulatory compliance monitoring and strategic workforce planning for Kuwait-based operations."]
                    ]
                }
            }
        ]
    },
    'oracle-services': {
        title: "Oracle Solutions",
        subtitle: "Modernize. Integrate. Transform — With Oracle Expertise",
        technology: "Oracle Cloud, Oracle ERP, Oracle DB",
        concept: "Oracle Cloud, Oracle ERP, Oracle DB",
        industry: "Enterprise, Finance, Manufacturing",
        intro: "Oracle's enterprise portfolio spans ERP, databases, cloud infrastructure, and middleware — providing organizations with a comprehensive technology foundation for digital transformation. Flowtech IT's Oracle practice helps clients implement, integrate, and modernize Oracle environments to deliver the performance, reliability, and intelligence that enterprise operations demand.",
        sections: [
            {
                title: "Our Oracle Service Areas",
                subsections: [
                    {
                        title: "Oracle Cloud ERP",
                        content: "Modernize your enterprise resource planning on Oracle Cloud — replacing fragmented, on-premise systems with a unified, intelligent cloud platform that drives operational efficiency and financial transparency.",
                        bullets: [
                            "Oracle Cloud ERP implementation — Financials, Procurement, Project Management",
                            "Migration from Oracle E-Business Suite (EBS) and PeopleSoft to Oracle Cloud",
                            "Workflow automation and approval management configuration",
                            "Oracle ERP analytics — embedded BI and custom reporting"
                        ]
                    },
                    {
                        title: "Oracle Database & Infrastructure",
                        content: "Oracle Database remains the trusted foundation for mission-critical enterprise applications. We design, optimize, and manage Oracle database environments that deliver the performance and availability your operations require.",
                        bullets: [
                            "Oracle Database 19c and 21c implementation and migration",
                            "Oracle Autonomous Database deployment for self-managing, self-securing operations",
                            "Database performance tuning, query optimization, and capacity planning",
                            "High availability architecture — Oracle RAC, Data Guard, and Golden Gate replication"
                        ]
                    },
                    {
                        title: "Oracle Middleware & Integration",
                        content: "Connect disparate enterprise systems into a cohesive, real-time data ecosystem using Oracle's integration and middleware technologies.",
                        bullets: [
                            "Oracle Integration Cloud (OIC) — API-first integration between Oracle and third-party systems",
                            "Oracle SOA Suite and Service Bus for enterprise service orchestration",
                            "Data synchronization and event-driven integration patterns",
                            "Integration with SAP, Salesforce, custom applications, and IoT platforms"
                        ]
                    },
                    {
                        title: "Oracle Analytics & Business Intelligence",
                        content: "Transform Oracle data into strategic intelligence with Oracle Analytics Cloud and custom BI solutions that give decision-makers the visibility they need.",
                        bullets: [
                            "Oracle Analytics Cloud (OAC) implementation and dashboard development",
                            "Oracle BI Publisher for enterprise report generation and distribution",
                            "Integration of Oracle data with Power BI, Tableau, and custom visualization layers",
                            "Embedded analytics within Oracle ERP and operational workflows"
                        ]
                    }
                ]
            },
            {
                title: "Why Flowtech for Oracle?",
                table: {
                    headers: ["Value", "Description"],
                    rows: [
                        ["Gulf Region Expertise", "Deep experience with Oracle implementations across manufacturing, oil & gas, government, and retail organizations in KSA and the broader GCC."],
                        ["Vendor-Agnostic Integration", "We connect Oracle seamlessly with SAP, custom applications, IoT platforms, and cloud services — ensuring your Oracle investment works within your entire technology ecosystem."],
                        ["Outcome Focus", "Every Oracle engagement is scoped and delivered with specific business outcomes — not just technical deliverables. We measure success by the value created."],
                        ["Ongoing Partnership", "Beyond implementation, we provide managed services, optimization, and continuous improvement support — ensuring Oracle environments evolve with your business."]
                    ]
                }
            },
            {
                title: "Outcomes",
                bullets: [
                    "Unified financial and operational visibility across the enterprise",
                    "Elimination of manual reconciliation and data silos between systems",
                    "Reduced total cost of ownership through Oracle Cloud migration and consolidation",
                    "Enhanced compliance, auditability, and governance through centralized Oracle ERP"
                ]
            }
        ]
    }
};