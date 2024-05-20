FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /app/target/AS1-0.0.1-SNAPSHOT.jar AS1.jar
EXPOSE 8080
ENTRYPOINT [ "java","-jar","AS1.jar"]

