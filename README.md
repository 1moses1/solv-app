# Post Management App

The **Post Management App** is a modern and fully responsive web application built using **Next.js**. It demonstrates the implementation of CRUD (Create, Read, Update, Delete) operations with integration to the **JSONPlaceholder API**, accompanied by features like pagination, search/filter, form validation, and dynamic updates.

---

## Features

### Core Functionalities
1. **Post List Table**
   - Fetches posts via `[GET] https://jsonplaceholder.typicode.com/posts`.
   - Displays posts in a tabular format with columns for:
     - **ID**, **Title**, **Actions** (Edit/Delete).
   - Includes:
     - **Search/Filter**: Dynamically filter posts by title.
     - **Pagination**: View posts in batches.

2. **Create Post Form**
   - Creates new posts using `[POST] https://jsonplaceholder.typicode.com/posts`.
   - Input fields:
     - **Title**: Required text input.
     - **Body**: Required textarea input.
   - Validates form fields before submission.
   - Reflects new posts instantly in the table.

3. **Edit Post Form**
   - Fetches data of a specific post using `[GET] https://jsonplaceholder.typicode.com/posts/{id}`.
   - Updates post data via `[PUT] https://jsonplaceholder.typicode.com/posts/{id}`.
   - Pre-fills form with existing post data for editing.
   - Updates post list dynamically after successful edits.

4. **Delete Post**
   - Deletes posts using `[DELETE] https://jsonplaceholder.typicode.com/posts/{id}`.
   - Optimistically removes deleted posts from the table.

---

### Additional Features
- **Search/Filter**:
  - Dynamically filters posts based on the title input.
- **Pagination**:
  - Custom pagination ensures seamless navigation through posts.
- **Responsive Design**:
  - The application is optimized for both desktop and mobile devices.
- **Dynamic Sidebar**:
  - Sidebar with icons for navigation:
    - **Overview**: Dashboard icon.
    - **Posts**: Document icon.
  - Sidebar is collapsible with smooth transitions.
- **Header**:
  - Includes breadcrumb navigation (`Solv > Posts` on post-related pages).
  - Displays icons for notifications and user profile.

---

## Technologies Used

- **Next.js**: Framework for server-side rendering and routing.
- **React**: Library for building interactive UIs.
- **Tailwind CSS**: Utility-first framework for styling.
- **Axios**: HTTP client for API integration.
- **Font Awesome**: Icon library for visual elements.
- **Jest + React Testing Library**: Testing tools for robust unit tests.
- **JSONPlaceholder**: Free REST API for backend simulation.

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **npm** or **yarn**

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/solv-repo/post-management-app.git
   cd post-management-app
