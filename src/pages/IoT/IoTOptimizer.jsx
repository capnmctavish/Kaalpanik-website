import React, { useState } from "react";
import Grid from '@mui/material/Grid2';

const IoTOptimizer = () => {
  return (
    <div className="bg-dark text-white min-vh-100">
      <section className="py-5" >
        <Grid container spacing={2} className="container containerStyle">
          <Grid size={7} className="columnStyle">
            <p></p>
            <h2 className="display-5 fw-bold mb-3">Optimizer IoT Project for Manufacturing Machines</h2>
            <p className="lead">
              This project aims to optimize machine performance, reduce downtime, and improve efficiency in a manufacturing company using Industrial IoT (IIoT) and AI-driven predictive maintenance.
            </p>
         </Grid>
         <Grid size={5} className="columnStyle">
          <img
            src="/images/iot-optimizer.jpeg"
            alt="Cloud computing visualization"
            className="img-fluid rounded shadow-sm mt-4"
          />
          </Grid>
        </Grid>
      </section>

      <section className="py-4" >
        <Grid container spacing={2} className="container ">
          <Grid size={9}>
            <h2 className="display-7 fw-bold mb-3">Expected Benefits</h2>
            <ul>
              <li>Reduces machine downtime by predicting failures before they happen.</li>
              <li>Lowers maintenance costs with data-driven scheduling.</li>
              <li>Increases machine lifespan by preventing excessive wear and tear.</li>
              <li>Enhances productivity by reducing unexpected failures.</li>
              <li>Real-Time Machine Monitoring</li>
              <li>Install IoT sensors (vibration, temperature, pressure, energy usage) on machines.</li>
              <li>Use Edge Computing (Raspberry Pi/Jetson Nano) for real-time processing.</li>
              <li>Transmit data via MQTT, LoRaWAN, Zigbee, or Wi-Fi to the cloud.</li>
            </ul>
          </Grid>
        </Grid>
      </section>

      <section className="py-4" >
          <Grid container spacing={2} className="container">
            <Grid size={9}>
              <h2 className="display-7 fw-bold mb-3">Tech Stack & Tools</h2>
              <ul>
                <li>Hardware: Raspberry Pi, Jetson Nano, ESP32, Industrial Sensors.</li>
                <li>Communication: MQTT, LoRa, Zigbee, Wi-Fi.</li>
                <li>Database: InfluxDB, PostgreSQL, Firebase.</li>
                <li>AI/ML: Python (TensorFlow, Scikit-Learn, Pandas).</li>
                <li>Cloud: AWS IoT, Azure IoT Hub, Google Cloud IoT.</li>
                <li>Dashboard: Grafana, Power BI, Flask/Django + React.</li>
              </ul>
          </Grid>
        </Grid>
      </section>

      <section className="py-4" >
        <Grid container spacing={2} className="container ">
          <Grid size={9}>
            <h2 className="display-7 fw-bold mb-3">Project Highlights</h2>
              <p> 1️⃣ Real-Time Machine Monitoring</p>
              <ul>
                <li>Install IoT sensors (vibration, temperature, pressure, energy usage) on machines.</li>
                <li>Use Edge Computing (Raspberry Pi/Jetson Nano) for real-time processing.</li>
                <li>Transmit data via MQTT, LoRaWAN, Zigbee, or Wi-Fi to the cloud.</li>
                </ul>
              2️⃣ AI-Based Predictive Maintenance
              <ul>
                <li>Analyze machine health using AI/ML models (Random Forest, LSTM, Autoencoders).</li>
                <li>Detect anomalies and predict failures before they occur.</li>
                <li>Schedule data-driven maintenance to reduce downtime.</li>
                </ul>
              3️⃣ Energy Optimization & Cost Reduction
              <ul>
                <li>Track power consumption per machine.</li>
                <li>Implement AI-driven load balancing to optimize energy usage.</li>
                <li>Reduce unnecessary power usage, improving efficiency.</li>
                </ul>
              4️⃣ Cloud & Dashboard Integration
              <ul>
                <li>Store historical data in AWS IoT, Azure IoT Hub, or Google Cloud IoT.</li>
                <li>Develop a dashboard (Grafana/Power BI/React.js) for real-time monitoring.</li>
                <li>Send alerts via SMS/Email when an anomaly is detected.</li>
                </ul>
              5️⃣ Production Line Optimization
              <ul>
                <li>Monitor cycle time, machine performance, and efficiency trends.</li>
                <li>Use AI to predict bottlenecks and optimize the production process.</li>
                <li>Reduce waste and improve throughput.</li>
                </ul>
          </Grid>
        </Grid>
      </section>

      <section className="py-4" >
        <Grid container spacing={2} className="container ">
          <Grid size={9}>
            <h2 className="display-7 fw-bold mb-3">Key Benefits for Manufacturing</h2>
              ✔ Reduces downtime with predictive failure detection.
              ✔ Improves machine lifespan with optimized maintenance schedules.
              ✔ Cuts operational costs by reducing energy waste.
              ✔ Enhances productivity through real-time monitoring & insights.
          </Grid>
        </Grid>
      </section>
      <div className="short_height"></div>
    </div>
  )
}

export default IoTOptimizer;