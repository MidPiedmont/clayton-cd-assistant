# Description
This is a web app developed by Clayton County DoIT for Clayton County Community Development.
The purpose of the application is to help citizens and business owners figure what documents and 
costs are associated with all the different permits, licenses, planning requests, and zoning requests the county has. The application consists of a node api server (port 3001) and a node-react web page (port 3000).
    
## Development Server
To run in a development environment, 
- open `./server` in a terminal and run `npm i && node index.js`.  
- open `./client` in a terminal and run `npm i && npm run dev`.

## Production Server
To run in Production
- open `./server` in a terminal and run `pm2 index.js`.  
- open `./client` in a terminal and run `npm run build && pm2 serve -s build`.
