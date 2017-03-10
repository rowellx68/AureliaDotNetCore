# AureliaDotNetCore
A simple skeleton app with Aurelia for the front-end and dotnet core for the backend.

## Get Started
To get started, navigate into `Web` and do the following commands

```bash
npm install
dotnet restore
npm run build
```

There will be no need to manually build the single page app everytime you make changes as it will do it on the fly. However, you will need to run the app like so on your terminal. You will need to pass the environment variable based on your system, more information can be found [here](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments);

```bash
ASPNETCORE_ENVIRONMENT=Development dotnet run
```
