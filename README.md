# Project Evaluation Viewer 
This is a lightweight GUI to view project data sheets from Google sheets data. This is intended for internal use and deployment on any web server. For use with private data, deployment should include an authentication layer. 

## Setup and Install
This static website uses Bootstrap for UI elements and is compiled with Webpack. 
1. Install required dependencies:
    ```
    npm install
    ```
2. Add credentials for Google API service account with read-only access to source data sheet. Copy the credentials JSON to `../config/creds.json`.

3. Run a development version of the application
    ```
    npm run start
    ```

To build the application for deployment run `npm run build`


 
