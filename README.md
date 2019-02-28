# Sample App SAM template with a Stripe component

### Building serverless apps with components from the AWS Serverless Application Repository

Includes:

- `ShowProduct`, a AWS Lambda Function to display a single product
- `ProductsTable`, a AWS DynamoDB Table to store products
- `apilambdastripecharge`, a AWS Serverless Application Repository Component, that exposes a callback to get invoked by Stripe Checkout when your customer clicks Buy on your product.

### How to Use

1. `npm run package` - to prepare the SAM application for deployment
2. `npm run deploy` - to deploy the prepared SAM package
3. `npm run describe` - to get the SAM App Output Result

You will ge the `ApiUrl` which you can then use to display a single product.

## License

MIT
