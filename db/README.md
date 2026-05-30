# Supabase Database Setup

This project is configured to use Supabase PostgreSQL only.

Apply the auth schema repair script in the Supabase SQL Editor:

```sql
-- paste and run the contents of db/auth_schema_fix.sql
```

The active backend environment is in `farmkart/.env`.

Use the Supabase pooler JDBC URL:

```env
DB_URL=jdbc:postgresql://aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres?sslmode=require&prepareThreshold=0&tcpKeepAlive=true&connectTimeout=30&socketTimeout=30
DB_USERNAME=postgres.<project-ref>
DB_PASSWORD=<your-database-password>
HIBERNATE_DDL_AUTO=none
```

If startup still shows `SocketTimeoutException: Connect timed out`, your machine/network cannot reach the Supabase pooler port. Try a different network/hotspot, disable VPN/firewall filtering, or copy the latest pooler host/port from Supabase Dashboard -> Project Settings -> Database -> Connection pooling.
