# Pull base image
FROM python:3.7-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /Disfactory

RUN apt-get update
RUN apt-get install -y binutils libproj-dev gdal-bin

# Install dependencies
COPY Pipfile Pipfile.lock /Disfactory/
RUN pip install pipenv && pipenv install --system

# Copy project
COPY . /Disfactory/
