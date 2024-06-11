# Bnkle Internship Assessment
> This project is a take home challenge required as part of the selection process for an Internship with Bnkle Technologies.
The project is built using Vite, React, and TypeScript. It fetches data from this [API](https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts) and uses the React Context API to pass data to various components. The project includes an analytics page to track card clicks.

## Table of Contents
- [Bnkle Internship Assessment](#bnkle-internship-assessment)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Project Structure](#project-structure)
  - [Approach and Key Decisions](#approach-and-key-decisions)
    - [Data Fetching](#data-fetching)
    - [Context API](#context-api)
    - [Analytics](#analytics)
    - [Key Decisions](#key-decisions)
## Setup

### Prerequisites
  - Node.js (version 14 or higher)
  - npm (version 6 or higher)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/ChinatuL/Bnkle-Internship-Assessment.git
cd your-project-directory
```
2. Install dependencies:
```bash
npm install
```

## Running the Project
To start the development server, run:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

## Project Structure
```
project_root/
src
├── assets
├── context
│   ├── appContext.ts
│   └── appProvider.tsx
├── components
│   ├── Cards
│   ├── Card
│   ├── CardModal
│   ├── Navbar
│   └── Loader
├── hooks
│   └── usePostAnalytics.ts
├── lib
│   ├── definitions.ts
│   └── utils.ts
├── pages
│   ├── Home
│   ├── Analytics
│   └── Error
├── App.tsx
├── index.css
└── main.tsx

```

## Approach and Key Decisions

### Data Fetching
Data is fetched from the API using fetch API and the [`useEffect`](https://react.dev/reference/react/useEffect) hook. The fetched data is then provided to the application using [React Context API](https://react.dev/learn/passing-data-deeply-with-context) making it accessible throughout the application.

### Context API
[React Context API](https://react.dev/learn/passing-data-deeply-with-context) is used to manage and distribute state. This approach ensures that data can be accessed by deeply nested components thereby preventing prop drilling.

### Analytics
A custom hook, `usePostAnalytics`, is used to manage analytics. The hook maintains a record of card clicks and uses local storage to persist the analytics data. It initializes the analytics state by fetching data from local storage and provides a function to update the analytics state and store the updated data in local storage.

Here is an implementation of the hook:
```typescript
import { useState, useEffect } from "react";
import type { ClicksRecord } from "../lib/definitions";
import { getAnalyticsFromStorage, storeAnalytics } from "../lib/utils";

export const usePostAnalytics = (): [ClicksRecord, (data: ClicksRecord) => void] => {
    const [analytics, setAnalytics] = useState<ClicksRecord>({});

    const updateAnalytics = (data: ClicksRecord) => {
        const analyticsData = { ...analytics, ...data };
        storeAnalytics(analyticsData);
        setAnalytics(analyticsData);
    };

    useEffect(() => {
        const analyticsData = getAnalyticsFromStorage();
        setAnalytics(analyticsData);
    }, []);

    return [analytics, updateAnalytics];
};

```

### Key Decisions
- Vite: Chosen as scaffolding tool because of its faster build time and modern development features
- Context API: Used for state management to provide an efficient way to pass data across components.
- Custom Hook: Implemented for analytics to keep the logic separated and reusable, while leveraging local storage for data persistence.



