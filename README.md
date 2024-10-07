### Introduction
This project demonstrates a basic **microfrontend architecture** 

- **Microfrontends**: Independent, decoupled applications developed and deployed separately. Each microfrontend represents a specific feature or module of the larger application.

### Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

#### 2. Install Dependencies
For each microfrontend, install the dependencies:

```bash
npm install
```

#### 3. Run the Main Application
This starts the individual microfrontends, and runs the **main application** concurrently to stitch them together:

```bash
npm start
```