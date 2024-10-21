## setup

After cloning the repository, you need to install the required packages.
Please run the following command in the root directory of the repository

```bash
npm install
```

## development

To run the development mode, run the following command.

```bash
npm run dev
```

Before pushing the code, please run the following command to check the code quality.

```bash
npm run lint
```

if there are any prettier errors, please run the following command to fix them.

```bash
npx prettier . --write
```

## mock mode

To run the mock mode, run the following command.

```bash
npm run dev:mock
```

It will run the application with the mock data.
