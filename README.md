# gfg_hackathon
Dataset used for air quality prediction : https://www.kaggle.com/datasets/rohanrao/air-quality-data-in-india?select=stations.csv

Dataset used for water pollution prediction : https://www.kaggle.com/datasets/anbarivan/indian-water-quality-data

Dataset used for Deforestation Rates: https://www.kaggle.com/datasets/mbogernetto/brazilian-amazon-rainforest-degradation

Dataset used for climate prediction : https://www.kaggle.com/datasets/ananthr1/weather-prediction
# About
The dataset contains air quality data and AQI (Air Quality Index) at hourly and daily level of various stations across multiple cities in India. It contains five CSV files : city_day, city_hour, station_hour, station_day and station.
Air quality prediction has been done using LSTM. Optimizer used: Stochastic Gradient Descent (SGD) with nesterov momentum.

Water Pollution dataset : Combined data for Historical Water Quality in certain locations of India . Pollutants measures in each column is the average values measured over a period of time. 
The prediction for water pollution has been done by using Random Regressor Model. Most reliable field for prediction : WQI (Water Quality Index).

Deforestation Dataset : Deforestation area (km²) by year and state, from 2004 to 2019. The data are public and were extracted from INPE website on December 16th 2019. It was already aggregated, so, no data process was made.
Attributes : Ano/Estados (Year of occurrence), AC (Deforested area in Acre state (km²)), AM (Deforested area in Amazonas state (km²)), AP (Deforested area in Amapa state (km²)), MA (Deforested area in Maranhao state (km²)), MT (Deforested area in Mato Grosso state (km²)), PA (Deforested area in Para state (km²)), RO (Deforested area in Rondonia state (km²)), RR (Deforested area in Roraima state (km²)), TO (Deforested area in Tocantins state (km²)).
Target attribute : AMZ Legal.

Climate Dataset :  columns >>
* precipitation
* temp_max
* temp_min
* wind. We are going to predict the weather condition :
* drizzle
* rain
* sun
* snow
* fog


The website EcoTech, provides users with a gaming environment that encourages them to save the environment from pollution. The website also has a "Geotagging" feature that allows the user to locate the trees that are most prone to pollution or degradation. The user also has an option of logging in. 


![Home](C:\Users\nilas\OneDrive\Pictures\Screenshots\Screenshot (2148).png)


