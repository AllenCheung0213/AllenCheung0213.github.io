import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="project-item">
                <h3>Advanced Neural Networks for MEDMNIST Dataset (Mar. 2024 – May 2024)</h3>
                <ul>
                    <li>Engineered a multi-task model across four datasets achieving an average accuracy of 95%, surpassing set benchmarks by 2-10%</li>
                    <li>Developed an advanced transfer learning model that enhanced accuracy by 20% and surpassed established benchmarks by approximately 5%</li>
                    <li>Applied fine-tuning techniques and domain-specific features, leading to a 5% reduction in error rates compared to baseline models</li>
                </ul>
            </div>
            <div className="project-item">
                <h3>Social Media Sentiment Analysis (Jun. 2023 – Jul. 2023)</h3>
                <ul>
                    <li>Collected and analyzed 2 million Twitter and Reddit posts using Spark, searching 4.7 million combinations for the best preprocessing technique</li>
                    <li>Developed a high-precision sentiment analysis model achieving a precision rate of 89.95%, surpassing industry baselines by approximately 10%</li>
                    <li>Implemented real-time sentiment analysis on a web platform, allowing users to input text and receive the percentage of positive or negative sentiment</li>
                </ul>
            </div>
            <div className="project-item">
                <h3>AI-Powered Chatbot for Customer Support (May 2023 – Jun. 2023)</h3>
                <ul>
                    <li>Launched a customer support chatbot by analyzing 50,000+ messages, leveraging a Transformer model to achieve 86% accuracy</li>
                    <li>Engineered an efficient NLP pipeline, deploying the solution via Flask to handle real-time customer service inquiries</li>
                </ul>
            </div>
            <div className="project-item">
                <h3>Brigham and Women’s Hospital Kiosk Application (Mar. 2023 – May 2023)</h3>
                <ul>
                    <li>Spearheaded the Agile development of a software application using Java design patterns and created an AWS backed database utilizing AWS Lambdas</li>
                    <li>Coordinated with a 10-person team to deliver a custom application with pathfinding, a map editor, and multiple integrated service request modules</li>
                    <li>Fine-tuned a ChatGPT integrated chatbot to inform users how to use the different functionalities of the app (hosted through AWS using NginX)</li>
                </ul>
            </div>
            <div className="project-item">
                <h3>AI-Powered Resume Screening Web App | WPI (Nov. 2022 – Jan. 2023)</h3>
                <ul>
                    <li>Developed a Python and NLP-based application that screens resumes with 82% accuracy, streamlining the hiring process</li>
                    <li>Enhanced the NLP pipeline to increase detail extraction precision by 13%, utilizing multi-label classification techniques</li>
                </ul>
            </div>
            <div className="project-item">
                <h3>Machine Learning with Cancer Dataset | WPI (Sep. 2022 – Nov. 2022)</h3>
                <ul>
                    <li>Implemented five machine learning algorithms for breast cancer stage classification, enhancing predictive accuracy by 12%</li>
                    <li>Executed four supervised learning models, achieving a 5% improvement in classification precision over baseline models</li>
                </ul>
            </div>
        </section>
    );
};

export default Projects;
