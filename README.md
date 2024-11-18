# Article App

**Article App** is a streamlined app designed to help users efficiently manage their articles. Whether you're a writer, editor, or someone who loves to organize written content, this app offers all the essential features you need to stay on top of your work.

---

## **Table of Contents**

1. [About Article](#about-article)
2. [Getting Started](#getting-started)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Additional docs](#additional-docs)
6. [Screenshots](#screenshots)

## **About Article**

### **Key Features:**

- **Add Articles:** Quickly create new articles with a simple and intuitive API.
- **Edit Articles:** Easily update and refine your articles, ensuring content stays accurate and up-to-date.
- **Delete Articles:** Remove outdated or unwanted articles with just a one call of API.
- **Read Articles:** Retrieve your articles by user-friendly API.

### **Who is it for?**

This app is perfect for:

- Content creators managing blog posts or articles.
- Teams collaborating on written content.
- Anyone looking to organize and maintain their article collection effortlessly.

### **Tech stack**

Article app is made of next stacks:

- AWS Cloud Infrastructure
- Serverless v3
- TypeScript v5
- Node v20

## **Getting Started**

To get started with this project, follow these steps:

1. Get AWS and Github accounts

1. Get AWS [credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html):

- **AWS_ACCESS_KEY_ID**
- **AWS_SECRET_ACCESS_KEY**

### **Prerequisites**

Ensure you have the following installed:

- [AWS CLI](https://github.com/aws/aws-cli)
- [Git CLI](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line)
- [Node v20](https://nodejs.org/en/blog/release/v20.9.0)
- [Npm](https://www.npmjs.com/)
- [Curl](https://curl.se/)

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/dosim086/article-app.git
   cd article-app
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

## **Deploy**

### Locally

1. Set AWS credentials as environments:

   ```bash
   export AWS_ACCESS_KEY_ID = <your_key>
   export AWS_SECRET_ACCESS_KEY = <your_secret>
   ```

2. Deploy the project
   ```bash
   npm run deploy
   ```

### Github Actions

1. Set AWS credentials as secrets in [Github Action](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)

   ![github_actions_deployment](/docs/images/github_actions_secrets.png?raw=true)

2. Push the project to own repository
   ```bash
   git remote set-url "origin" git@github.com:<your_user>/<your_repo>.git
   git push -u origin master
   ```

## **Usage**

1. Create article:

   ```bash
   curl --request POST \
   --location 'https://<api-gateway-url>/dev/v1/articles' \
   --header 'Content-Type: application/json' \
   --data '{
      "title": "Breaking News",
      "content": "Shocking Story!"
   }'
   ```

2. Edit article:

   ```bash
   curl --request PATCH \
   --location 'https://<api-gateway-url>/dev/v1/articles/<article-id>' \
   --header 'Content-Type: application/json' \
   --data '{
      "content": "New Shocking Story!"
   }'
   ```

3. Read article:

   ```bash
   curl --location 'https://<api-gateway-url>/dev/v1/articles/<article-id>'
   ```

4. Delete article:

   ```bash
   curl --request DELETE \
   --location 'https://<api-gateway-url>/dev/v1/articles/<article-id>'
   ```

5. Get articles

   ```bash
   curl --location 'https://<api-gateway-url>/dev/v1/articles'
   ```

## **Additional docs**

- [OpenAPI](/docs/api/openapi.yml)

## **Screenshots**

### **Deployment by Github Actions**

![github_actions_deployment](/docs/images/github_actions_deployment.png?raw=true)

### **Cloudformation stack on AWS**

![aws_cloudfromation_stack](/docs/images/aws_cloudfromation_stack.png?raw=true)
