FROM mcr.microsoft.com/mssql/server:2017-latest

# Create a config directory
RUN mkdir -p /usr/config
WORKDIR /usr/config
# Moving to root to execute file operations

# Bundle config source
COPY entrypoint.sh /usr/config/entrypoint.sh
COPY configure-db.sh /usr/config/configure-db.sh
COPY setup.sql /usr/config/setup.sql

# Grant permissions for to our scripts to be executable
RUN chmod +x /usr/config/entrypoint.sh
RUN chmod +x /usr/config/configure-db.sh

ENTRYPOINT ["./entrypoint.sh"]