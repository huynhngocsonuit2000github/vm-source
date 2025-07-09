# Use official .NET SDK to build
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app
COPY . ./
RUN dotnet publish -c Release -o out

# Use ASP.NET Runtime to run
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app/out .

# Listen on port 5000
ENV ASPNETCORE_URLS=http://+:5000

EXPOSE 5000
ENTRYPOINT ["dotnet", "TodoApp.dll"]