# Chat App

## Getting Started

### Install Dependencies

In the project root directory, run the following command to install all required dependencies:

```bash
npm install
```

### Run Application:

```bash
npm start
```

# Chat App Deployment Instructions

## Deploying Frontend to Heroku

1. **Prepare the Frontend Build:**

   - Build the production-ready files:
     ```bash
     npm install
     npm run build
     ```

2. **Create a Static Server:**

   - Install `serve`:
     ```bash
     npm install -g serve
     ```
   - Add a `Procfile` in the root of the frontend repository with the following content:
     ```
     web: serve -s build
     ```

3. **Push Frontend to Heroku:**

   - Create a Heroku app:
     ```bash
     heroku create <app-name>
     ```
   - Deploy your frontend:
     ```bash
     git push heroku main
     ```

4. **Verify Deployment:**
   - Open your Heroku app:
     ```bash
     heroku open
     ```
