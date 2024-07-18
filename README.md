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

HOME

![Screenshot (2148)](https://github.com/nila-2003/gfg_hackathon/assets/93534905/6fc22dfa-987d-4d16-b307-44d5639e396e)


About Us

![Screenshot (2149)](https://github.com/nila-2003/gfg_hackathon/assets/93534905/73652805-1429-49e1-9c4a-346c9c49a5d4)

Game

![Screenshot (2150)](https://github.com/nila-2003/gfg_hackathon/assets/93534905/08c8daeb-4ece-4ec7-90d7-69aaee4bed89)

Contact Us

![Screenshot (2151)](https://github.com/nila-2003/gfg_hackathon/assets/93534905/585c8587-1a5d-4a64-9855-51a74dc289d5)

Geotagging

![Screenshot (2152)](https://github.com/nila-2003/gfg_hackathon/assets/93534905/9e709089-4969-4436-bb7e-cefc657be310)

Predictions

![Screenshot (2153)](https://github.com/nila-2003/gfg_hackathon/assets/93534905/04f7b22a-078a-4a11-99cc-91f34965c7a3)



import yaml
import json
from pactman import Consumer, Provider

def swagger_to_pact(swagger_file, pact_file):
    # Read the Swagger YAML file
    with open(swagger_file, 'r') as file:
        swagger_data = yaml.safe_load(file)

    # Create a Pact Consumer and Provider
    consumer = Consumer('MyConsumer')
    provider = Provider('MyProvider')
    pact = consumer.has_pact_with(provider)

    # Find the paths in the Swagger data
    paths = swagger_data.get('paths', {})
    if not paths:
        print("Error: No paths found in the Swagger file.")
        return

    # Process each path and method
    for path, path_item in paths.items():
        for method, operation in path_item.items():
            if method.lower() not in ['get', 'post', 'put', 'delete', 'patch']:
                continue

            # Create a Pact interaction
            interaction_name = operation.get('summary', f'{method.upper()} {path}')
            pact.upon_receiving(interaction_name)

            # Set up the request
            request = {
                'method': method.upper(),
                'path': path,
            }

            # Handle query parameters
            parameters = operation.get('parameters', [])
            query_params = {
                param['name']: 'string'
                for param in parameters
                if param.get('in') == 'query'
            }
            if query_params:
                request['query'] = query_params

            # Handle request body
            if 'requestBody' in operation:
                content = operation['requestBody'].get('content', {})
                if 'application/json' in content:
                    request['headers'] = {'Content-Type': 'application/json'}
                    request['body'] = {}  # You may want to generate a more specific body

            pact.with_request(**request)

            # Handle responses
            responses = operation.get('responses', {})
            for status_code, response_details in responses.items():
                response = {'status': int(status_code)}
                
                content = response_details.get('content', {})
                if 'application/json' in content:
                    response['headers'] = {'Content-Type': 'application/json'}
                    response['body'] = {}  # You may want to generate a more specific body

                pact.will_respond_with(**response)

    # Write the Pact file
    with open(pact_file, 'w') as file:
        json.dump(pact.json(), file, indent=2)

    print(f"PACT file successfully generated: {pact_file}")

# Usage
swagger_to_pact('path/to/swagger.yaml', 'path/to/pact.json')
