import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <h2>Experience</h2>
            <div className="experience-item">
                <h3>Data Analysis Lead: SoilX | WPI (Oct. 2022 – Present)</h3>
                <ul>
                    <li>Developed a machine learning model to analyze GPR data for soil moisture estimation, achieving 6% error, improving state of the art benchmarks</li>
                    <li>Led a team of five to research soil moisture using drones, radars, and data analysis to develop a system mapping root-zone moisture levels in large farms</li>
                    <li>Co-authored award-winning publication in IEEE ORSS 2023 “Data-Driven Soil Water Content Estimation at Multiple Depths Using SFCW GPR”</li>
                </ul>
            </div>
            <div className="experience-item">
                <h3>Sales & Marketing Data Analyst Intern | Charles River Laboratories (May 2023 – Jan 2024)</h3>
                <ul>
                    <li>Created a semi-autonomous python script to find what 100+ companies are working on resulting in a 30% increase in CRM interactions and 50% reduction in processing time</li>
                    <li>Began the integration of a comprehensive system using CNNs to determine who and when customers should be contacted resulting in 35% increase in sales</li>
                    <li>Enhanced data integrity by fixing inconsistencies across 4000+ rows, boosting data validation and accuracy by 15%, optimizing processes and reliable decision-making</li>
                </ul>
            </div>
            <div className="experience-item">
                <h3>Research Student: BrainEx | WPI (Nov. 2021 – Nov. 2022)</h3>
                <ul>
                    <li>Performed statistical analyses on 100+ datasets, utilizing clustering and normalization techniques to extract pivotal insights about neurological patterns</li>
                    <li>Integrated three data visualizations into a GUI, improving the analysis and pattern discovery in time series neurological data</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
