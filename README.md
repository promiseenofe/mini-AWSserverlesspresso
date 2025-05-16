# mini-AWSserverlesspresso
The mini project captures the core concept of a serverless coffee order system:  User signup with custom auth triggers  Orders stored in DynamoDB  Basic Lambda backend serving orders  Minimal monitoring/logging extension  But it does not implement the full complexity or feature set of the official workshop.

☕️ Mini AWS Serverlesspresso
This project captures the core concept of a serverless coffee order system, inspired by the official AWS Serverlesspresso workshop. It demonstrates:

User signup with custom authentication triggers

Order storage in DynamoDB

A basic Lambda backend serving orders

Minimal monitoring/logging extension

Note: This mini version focuses on core functionalities and does not implement the full complexity or feature set of the official workshop.

mini-serverlesspresso/
├── 00-baseCore/                      # Authentication Logic (Cognito)
│   ├── define-auth-challenge.js
│   ├── pre-sign-up.js
│   └── template.yaml

├── 01-appCore/
│   └── initDB/                       # Seed initial data (e.g., orders)
│       ├── seedOrders.js
│       └── template.yaml

├── backends/
│   └── 5-order-manager/              # Order management logic
│       ├── index.js
│       └── template.yaml

├── extensions/                       # Optional utilities (metrics, logs)
│   ├── logger.js
│   ├── metrics.js
│   └── README.md

└── README.md                         # This file


✅ Prerequisites
AWS CLI configured (aws configure)

AWS SAM CLI

Node.js v14+ installed

🔧 Deployment Steps
Deploy each module step-by-step using AWS SAM:

1. Deploy Authentication Core
bash
Copy
Edit
cd 00-baseCore
sam deploy --guided
2. Initialize the Database (Optional)
bash
Copy
Edit
cd ../01-appCore/initDB
sam deploy --guided
3. Deploy the Order Manager Backend
bash
Copy
Edit
cd ../../../backends/5-order-manager
sam deploy --guided
💡 Features
Cognito-Driven Sign-up: Triggers like pre-sign-up and define-auth-challenge support custom auth logic.

Order Handling Lambda: Processes user orders and stores them via Step Functions or DynamoDB.

Metrics & Logging: Lightweight logging and monitoring modules (in extensions/).

📌 Notes
Modify the ARNs and resource names in template.yaml to match your environment.

Use seedOrders.js to pre-fill test data into your DynamoDB table.

You can easily expand this mini project by:

Adding payment simulation

Integrating AWS IoT for live event tracking

Introducing frontend (React, Vue, etc.)
